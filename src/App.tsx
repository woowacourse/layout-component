import React from 'react';
import styled from 'styled-components';
import IntroductionUI from './component/IntroductionUI';
import UsageFlexUI from './component/UsageFlexUI';
import UsageGridUI from './component/UsageGridUI';
import UsageContainerUI from './component/UsageContainerUI';
import UsageMasonryUI from './component/UsageMasonry';

function App() {
  return (
    <div className="App">
      <Style.Layout>
        <IntroductionUI
          name="Masonry Layout"
          description=" 여러 크기의 아이템을 격자 형태로 정렬하되, 각 행과 열의 높이가 동일하지 않아 빈 공간이 최소화되는 레이아웃 컴포넌트"
        >
          <UsageMasonryUI />
        </IntroductionUI>
        <Style.UnderLine />

        <IntroductionUI
          name="Container"
          description="화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃"
        >
          <UsageContainerUI />
        </IntroductionUI>
        <Style.UnderLine />

        <IntroductionUI
          name="Grid"
          description="CSS Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 컴포넌트"
        >
          <UsageGridUI />
        </IntroductionUI>
        <Style.UnderLine />

        <IntroductionUI
          name="Flex"
          description="CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트"
        >
          <UsageFlexUI />
        </IntroductionUI>
      </Style.Layout>
    </div>
  );
}

export default App;

const Style = {
  Layout: styled.div`
    padding: 50px;
  `,

  Item: styled.div`
    text-align: center;

    border-radius: 3px;
    padding: 5px 10px;

    background-color: rgb(225, 235, 255);
  `,

  UIContainerOuter: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    height: 300px;
    padding: 30px;
    border-radius: 10px;
    border: 2px solid rgb(235, 235, 240);

    background-color: rgb(243, 243, 250);
  `,

  UIContainerInner: styled.div`
    background-color: white;
  `,

  ButtonWrapper: styled.div`
    position: absolute;
    bottom: 20px;
    right: 30px;
  `,

  Button: styled.div`
    text-align: center;

    width: 130px;
    padding: 8px;
    border-radius: 5px;

    background-color: #1976d2;

    color: white;
    font-size: 1.15rem;
    font-weight: 500;

    cursor: pointer;
  `,

  UnderLine: styled.div`
    margin-bottom: 50px;
    border-bottom: 1px solid rgb(235, 235, 240);
  `,
};
