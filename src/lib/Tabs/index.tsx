import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface TabProps {
  label: string;
}

interface Props {
  children: React.ReactNode;
  width?: number;
  height?: number;
  $tabBoxHeight?: number;
  $simpleTab?: boolean;
  responsive?: boolean;
}

const Tabs = ({
  width = 400,
  height = 400,
  $simpleTab = false,
  $tabBoxHeight = height / 10,
  responsive = false,
  children,
}: Props) => {
  const childrenList = React.Children.toArray(
    children
  ) as React.ReactElement<TabProps>[];

  const [pos, setPos] = useState<number>(0);

  return (
    <Wrapper width={width} responsive={responsive}>
      <TabBoxWrapper $simpleTab={$simpleTab} $tabBoxHeight={$tabBoxHeight}>
        {childrenList.map(
          (children, idx) =>
            children && (
              <TabBox
                key={`${children.props.label}, ${idx + 1}`}
                width={width}
                $tabBoxHeight={$tabBoxHeight}
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

const Wrapper = styled.div<{ width: number; responsive: boolean }>`
  width: ${({ width }) => `${width}px`};
  overflow: hidden;
  margin: 0 auto;

  ${({ responsive, width }) =>
    responsive &&
    css`
      @media (max-width: ${width}px) {
        width: 100%;
      }
    `}
`;

const TabSectionWrapper = styled.div<{
  width: number;
  height: number;
  $childrenLength: number;
  pos: number;
}>`
  display: flex;
  width: ${({ width, $childrenLength }) => `${width * $childrenLength}px`};
  height: ${({ height }) => `${height}px`};
  transform: ${({ width, pos }) => `translateX(${-width * pos}px)`};
  transition: 0.3s ease all;

  & > * {
    width: ${({ width }) => `${width}px`};
  }
`;

const TabBoxWrapper = styled.div<{
  $simpleTab: boolean;
  $tabBoxHeight: number;
}>`
  display: flex;
  align-items: center;
  height: ${({ $tabBoxHeight }) => `${$tabBoxHeight}px`};

  overflow: auto;

  background-color: #959595;

  ${({ $simpleTab }) =>
    $simpleTab &&
    css`
      justify-content: center;
    `}
`;

const TabBox = styled.button<{
  width: number;
  $tabBoxHeight: number;
  $childrenLength: number;
  $simpleTab: boolean;
}>`
  width: ${({ width, $childrenLength }) => `${width / $childrenLength}px`};
  height: inherit;
  padding: 0.2rem 1rem;
  border: 0;
  cursor: pointer;

  &:focus {
    border-bottom: 2px solid #316fc4;
  }

  ${({ $simpleTab, $tabBoxHeight }) =>
    $simpleTab &&
    css`
      padding: 0;
      width: ${$tabBoxHeight / 2}px;
      height: ${$tabBoxHeight / 2}px;
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
