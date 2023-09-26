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
  swiper?: boolean;
}

const Tabs = ({
  width = 400,
  height = 400,
  $simpleTab = false,
  $tabBoxHeight = height / 10,
  responsive = false,
  swiper = false,
  children,
}: Props) => {
  const childrenList = React.Children.toArray(
    children
  ) as React.ReactElement<TabProps>[];

  const [pos, setPos] = useState<number>(0);

  return (
    <Wrapper width={width} responsive={responsive}>
      <TabButtonWrapper $simpleTab={$simpleTab} $tabBoxHeight={$tabBoxHeight}>
        {childrenList.map(
          (children, idx) =>
            children && (
              <TabButton
                key={`${children.props.label}, ${idx + 1}`}
                idx={idx}
                pos={pos}
                width={width}
                $tabBoxHeight={$tabBoxHeight}
                $childrenLength={childrenList.length}
                $simpleTab={$simpleTab}
                onClick={() => setPos(idx)}
              >
                {!$simpleTab && (children.props.label || idx + 1)}
              </TabButton>
            )
        )}
      </TabButtonWrapper>

      <TabSectionWrapper
        width={width}
        height={height}
        $childrenLength={childrenList.length}
        pos={pos}
      >
        {children}
      </TabSectionWrapper>

      {swiper && (
        <SwiperButtonWrapper>
          <SwiperButton onClick={() => pos > 0 && setPos(pos - 1)}>
            ◀️
          </SwiperButton>
          <SwiperButton
            onClick={() => pos < childrenList.length - 1 && setPos(pos + 1)}
          >
            ▶️
          </SwiperButton>
        </SwiperButtonWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ width: number; responsive: boolean }>`
  width: ${({ width }) => `${width}px`};
  overflow: hidden;
  margin: 0 auto;
  position: relative;

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

const TabButtonWrapper = styled.div<{
  $simpleTab: boolean;
  $tabBoxHeight: number;
}>`
  display: flex;
  align-items: center;
  height: ${({ $tabBoxHeight }) => `${$tabBoxHeight}px`};
  overflow: auto;

  ${({ $simpleTab }) =>
    $simpleTab &&
    css`
      justify-content: center;
    `}
`;

const TabButton = styled.button<{
  width: number;
  idx: number;
  pos: number;
  $tabBoxHeight: number;
  $childrenLength: number;
  $simpleTab: boolean;
}>`
  width: ${({ width, $childrenLength }) => `${width / $childrenLength}px`};
  height: inherit;
  padding: 0.2rem 1rem;
  border: 0;
  cursor: pointer;
  background-color: #e4e4e4;

  ${({ $simpleTab, $tabBoxHeight }) =>
    $simpleTab &&
    css`
      padding: 0;
      width: ${$tabBoxHeight / 2}px;
      height: ${$tabBoxHeight / 2}px;
      border-radius: 50%;
    `}

  ${({ $simpleTab }) =>
    $simpleTab &&
    css`
      margin-right: 12px;

      &:last-of-type {
        margin-right: 0;
      }
    `}

    ${({ idx, pos }) =>
    idx === pos &&
    css`
      border-bottom: 2px solid #316fc4;
    `}

    ${({ $simpleTab, idx, pos }) =>
    idx === pos &&
    $simpleTab &&
    css`
      border-bottom: 0;
      background-color: #316fc4;
    `}
`;

const SwiperButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const SwiperButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(149, 149, 149, 0.25);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
`;

export default Tabs;
