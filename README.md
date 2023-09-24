# **TabLayout 라이브러리**

TabLayout 라이브러리는 React 애플리케이션에서 탭 기반의 레이아웃을 구현하는 데 도움을 주는 라이브러리입니다. 이 라이브러리를 사용하여 여러 탭 간에 콘텐츠를 전환하고 사용자에게 편리한 탭 인터페이스를 제공할 수 있습니다.

본 라이브러리는 다음과 같은 제작 의도를 가지고 개발되었습니다:

- **용량 최소화**: TabLayout은 최소한의 스타일을 포함하여 용량을 최소화하고 페이지 로딩 속도를 개선하며, 애플리케이션의 성능을 향상시키도록 고안되었습니다.

- **간편한 적용**: TabLayout은 스타일 및 디자인에 크게 신경 쓰지 않고도 사용자가 쉽게 UI를 구현할 수 있도록 설계되었습니다. 스타일 관련 Props는 제공되지 않으며, 사용자가 간단하게 TabLayout을 활용할 수 있는 간편한 옵션을 제공합니다.

- **적절한 기능**: 필요한 기본 기능을 제공하고 복잡한 설정을 최소화하여 사용자에게 직관적이고 쉬운 경험을 제공합니다.

## **설치**

먼저 npm을 사용하여 패키지를 설치합니다:

```bash
npm i goni-tab-layout-component
```

## **Props**

TabLayout 컴포넌트는 다음과 같은 Props를 사용합니다:

- `tabs` (string[]): 탭 이름을 포함하는 문자열 배열을 전달합니다.
- `children` (ReactNode[]): 각 탭에 해당하는 콘텐츠를 포함하는 ReactNode 배열을 전달합니다.

### **사용 예제**

```jsx
import React from "react";
import TabLayout from "goni-tab-layout-component";

const App = () => {
  return (
    <div>
      <h1>TabLayout 예제</h1>
      <TabLayout tabs={["Tab 1", "Tab 2", "Tab 3"]}>
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </TabLayout>
    </div>
  );
};

export default App;
```

## **기여**

이 프로젝트에 기여하려면 GitHub 저장소를 방문하십시오: **[GitHub 저장소 링크](https://github.com/jeongwusi/layout-component/tree/step2)**

## **라이센스**

이 프로젝트는 MIT 라이센스 하에 릴리스되었습니다.

자세한 정보는 LICENSE 파일을 참조하십시오: **[LICENSE 파일](https://raw.githubusercontent.com/jeongwusi/layout-component/step2/LICENSE)**
