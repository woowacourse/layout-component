import React from 'react';
import styled, { css } from 'styled-components';
import useSwipeable from '../hooks/useSwipeable';

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
  swipeable?: boolean;
}

const Tabs = ({
  width = 400,
  height = 400,
  $simpleTab = false,
  $tabBoxHeight = height / 10,
  responsive = true,
  swiper = false,
  swipeable = false,
  children,
}: Props) => {
  const childrenList = React.Children.toArray(
    children,
  ) as React.ReactElement<TabProps>[];

  const {
    pos,
    increasePos,
    decreasePos,
    moveToSettedPos,
    handleTouchMove,
    handleTouchEnd,
  } = useSwipeable(childrenList.length);

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
                onClick={() => moveToSettedPos(idx)}
              >
                {!$simpleTab && (children.props.label || idx + 1)}
              </TabButton>
            ),
        )}
      </TabButtonWrapper>

      <TabSectionWrapper
        {...(swipeable && {
          onTouchMove: handleTouchMove,
          onTouchEnd: handleTouchEnd,
        })}
        width={width}
        height={height}
        $childrenLength={childrenList.length}
        pos={pos}
        responsive={responsive}
      >
        {children}
      </TabSectionWrapper>

      {swiper && (
        <SwiperButtonWrapper>
          <SwiperButton onClick={decreasePos}>◀️</SwiperButton>
          <SwiperButton onClick={increasePos}>▶️</SwiperButton>
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

  // responsive가 true 이면 입력 받은 width 값 보다 뷰포트가 작아질 때 뷰포트에 맞게 width를 설정합니다.
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
  responsive: boolean;
}>`
  display: flex;

  // 사용자가 입력한 <Tabs />의 width 값을 <Tab /> 컴포넌트 개수만큼 곱하여 Tab Section의 width를 설정합니다. 따라서 overflow 됩니다.
  width: ${({ width, $childrenLength }) => `${width * $childrenLength}px`};
  height: ${({ height }) => `${height}px`};

  // 사용자가 입력한 width 값 보다 <Tab /> 컴포넌트 개수만큼 overflow 되었으므로 width * index 만큼 transform 하여 요소의 위치로 이동합니다. (전환 효과)
  transform: ${({ width, pos }) => `translateX(${-width * pos}px)`};
  transition: 0.3s ease transform;

  ${({ responsive, width, $childrenLength, pos }) =>
    responsive &&
    css`
      @media (max-width: ${width}px) {
        width: calc(100vw * ${$childrenLength});
        transform: translateX(calc(-100vw * ${pos}));
      }
    `}

  // <Tabs /> 컴포넌트에 입력한 width와 <Tab /> 컴포넌트 width를 동일하게 합니다.
  & > * {
    width: ${({ width }) => `${width}px`};

    ${({ responsive, width }) =>
      responsive &&
      css`
        @media (max-width: ${width}px) {
          width: 100vw;
        }
      `}
  }
`;

const TabButtonWrapper = styled.div<{
  $simpleTab: boolean;
  $tabBoxHeight: number;
}>`
  display: flex;
  align-items: center;

  // 기본값은 height / 10 입니다. 하지만 사용자가 직접 지정할 수도 있게 해두었습니다.
  height: ${({ $tabBoxHeight }) => `${$tabBoxHeight}px`};
  overflow: auto;

  // simpleTab 모드에서는 TabButton이 작아지므로 가운데 정렬하도록 합니다.
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

  // simpleTab 모드일 때 탭 박스 대신 원이 생성됩니다. 해당 원의 크기를 지정합니다.
  ${({ $simpleTab, $tabBoxHeight }) =>
    $simpleTab &&
    css`
      padding: 0;
      width: ${$tabBoxHeight / 2}px;
      height: ${$tabBoxHeight / 2}px;
      border-radius: 50%;
    `}

  // simpleTab 모드에서 원들이 가운데 정렬되므로 각 요소의 margin을 설정합니다.
  ${({ $simpleTab }) =>
    $simpleTab &&
    css`
      margin-right: 12px;

      &:last-of-type {
        margin-right: 0;
      }
    `}

    // simpleTab 모드가 아닐때, 포커스 된 탭 박스 하단 밑줄 구현부입니다.
    ${({ idx, pos }) =>
    idx === pos &&
    css`
      border-bottom: 2px solid #316fc4;
    `}

    // simpleTab 모드 일 때, 포커스 된 원 배경색 구현부입니다.
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
