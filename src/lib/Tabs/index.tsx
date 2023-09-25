import React, { useState } from 'react';
import styled, { css } from 'styled-components';

type SizeType = number | string;

interface TabProps {
  label: string;
}

interface Props {
  children: React.ReactNode;
  width?: SizeType;
  height?: SizeType;
  $tabBoxHeight?: SizeType;
  $simpleTab?: boolean;
}

const Tabs = ({
  width = 400,
  height = 400,
  $simpleTab = false,
  $tabBoxHeight = 40,
  children,
}: Props) => {
  const childrenList = React.Children.toArray(
    children
  ) as React.ReactElement<TabProps>[];

  const [pos, setPos] = useState<number>(0);

  return (
    <Wrapper width={width}>
      <TabBoxWrapper $simpleTab={$simpleTab} $tabBoxHeight={$tabBoxHeight}>
        {childrenList.map(
          (children, idx) =>
            children && (
              <TabBox
                key={`${children.props.label}, ${idx + 1}`}
                width={width}
                $childrenLength={childrenList.length}
                $simpleTab={$simpleTab}
                onClick={() => setPos(idx)}
              >
                {!$simpleTab && (children.props.label || idx + 1)}
              </TabBox>
            )
        )}
      </TabBoxWrapper>

      <TabSectionWrapper
        width={width}
        height={height}
        $childrenLength={childrenList.length}
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

const setTabBoxWidth = (width: SizeType, childrenLength: number) =>
  typeof width === 'number'
    ? `${width / childrenLength}px`
    : `calc(${width} / ${childrenLength})`;

const Wrapper = styled.div<{ width: SizeType }>`
  width: ${({ width }) => translateValue(width)};
  overflow: hidden;
  margin: 0 auto;
`;

const TabSectionWrapper = styled.div<{
  width: SizeType;
  height: SizeType;
  $childrenLength: number;
  pos: number;
}>`
  display: flex;
  width: ${({ width, $childrenLength }) =>
    setTabSectionWrapperWidth(width, $childrenLength)};
  height: ${({ height }) => translateValue(height)};
  transform: translateX(${({ width, pos }) => translatePosition(width, pos)});
  transition: 0.3s ease all;

  & > * {
    width: ${({ width }) => translateValue(width)};
  }
`;

const TabBoxWrapper = styled.div<{
  $simpleTab: boolean;
  $tabBoxHeight: SizeType;
}>`
  display: flex;
  align-items: center;
  height: ${({ $tabBoxHeight }) => translateValue($tabBoxHeight)};

  overflow: auto;

  background-color: #959595;

  ${({ $simpleTab }) =>
    $simpleTab &&
    css`
      justify-content: center;
    `}
`;

const TabBox = styled.button<{
  width: SizeType;
  $childrenLength: number;
  $simpleTab: boolean;
}>`
  width: ${({ width, $childrenLength }) =>
    setTabBoxWidth(width, $childrenLength)};
  height: inherit;
  padding: 0.2rem 1rem;

  &:focus {
    border-bottom: 2px solid #316fc4;
  }

  ${({ $simpleTab }) =>
    $simpleTab &&
    css`
      padding: 0;
      width: 24px;
      height: 24px;
      border-radius: 50%;

      &:focus {
        border-bottom: 0;
        background-color: #316fc4;
      }
    `}

  ${({ $simpleTab }) =>
    $simpleTab &&
    css`
      margin-right: 12px;

      &:last-of-type {
        margin-right: 0;
      }
    `}
`;

export default Tabs;
