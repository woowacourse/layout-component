import React, { useState } from 'react';
import styled from 'styled-components';

type SizeType = number | string;

interface TabProps {
  label: string;
}

interface Props {
  children: React.ReactNode;
  width?: SizeType;
  height?: SizeType;
  simpleContent?: boolean;
}

const Tabs = ({ width = 400, height = 400, children }: Props) => {
  const childrenList = React.Children.toArray(
    children
  ) as React.ReactElement<TabProps>[];

  const [pos, setPos] = useState<number>(0);

  return (
    <Wrapper width={width}>
      <TabBoxWrapper>
        {childrenList.map(
          (children, idx) =>
            children && (
              <TabBox
                key={children.props.label || idx + 1}
                onClick={() => setPos(idx)}
              >
                {children.props.label || idx + 1}
              </TabBox>
            )
        )}
      </TabBoxWrapper>

      <TabSectionWrapper
        width={width}
        height={height}
        childrenLength={childrenList.length}
        pos={pos}
      >
        {children}
      </TabSectionWrapper>
    </Wrapper>
  );
};

const translateValue = (size: SizeType) =>
  typeof size === 'number' ? `${size}px` : size;

const translatePosition = (width: SizeType, pos: number) =>
  typeof width === 'number' ? `${-width * pos}px` : `calc(-${width} * ${pos})`;

const setTabSectionWrapperWidth = (width: SizeType, childrenLength: number) =>
  typeof width === 'number'
    ? `${width * childrenLength}px`
    : `calc(${width} * ${childrenLength})`;

const Wrapper = styled.div<{ width: SizeType }>`
  width: ${({ width }) => translateValue(width)};
  overflow: hidden;
`;

const TabSectionWrapper = styled.div<{
  width: SizeType;
  height: SizeType;
  childrenLength: number;
  pos: number;
}>`
  display: flex;
  width: ${({ width, childrenLength }) =>
    setTabSectionWrapperWidth(width, childrenLength)};
  height: ${({ height }) => translateValue(height)};
  transform: translateX(${({ width, pos }) => translatePosition(width, pos)});
  transition: 0.3s ease all;

  & > * {
    width: ${({ width }) => translateValue(width)};
  }
`;

const TabBoxWrapper = styled.div`
  display: flex;

  background-color: red;
`;

const TabBox = styled.button``;

export default Tabs;
