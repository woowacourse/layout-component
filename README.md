# **React Layout Component**

이 라이브러리는 React를 사용하여 다양한 레이아웃을 쉽게 구현할 수 있는 컴포넌트를 제공합니다. 라이브러리는 TypeScript로 작성되었으며, 각 컴포넌트는 화면 레이아웃을 만들 때 도움이 됩니다.

## **설치**

먼저 npm을 사용하여 패키지를 설치합니다:

```bash
npm install goni-layout-component
```

## **Container 컴포넌트**

**Container** 컴포넌트는 화면의 폭에 따라 내용의 최대 폭을 제한하는 레이아웃을 구현합니다.

### **Props**

> `type Unit = "px" | "rem" | "%" | "vw";`

- **`children`** (ReactNode): 컨테이너 내부에 포함될 컨텐츠입니다.
- **`minWidth`** (**`"${number}${Unit}"`**): 컨테이너의 최소 폭을 지정합니다.
- **`maxWidth`** (**`"${number}${Unit}"`**): 컨테이너의 최대 폭을 지정합니다.
- **`style`** (CSSProperties, 선택적): 컨테이너에 추가적인 스타일을 적용합니다.
- **`as`** (keyof JSX.IntrinsicElements, 선택적): 렌더링할 HTML 요소의 타입을 지정합니다. 기본값은 "div"입니다.

### **사용 예제**

```jsx
import React from "react";
import { Container } from "goni-layout-component";

const App = () => {
  return (
    <Container minWidth="400px" maxWidth="800px">
      <div>내용</div>
    </Container>
  );
};

export default App;
```

## **Grid 컴포넌트**

**Grid** 컴포넌트는 CSS Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 레이아웃을 구현합니다.

### **Props**

> `type Unit = "px" | "rem" | "%" | "vw";`

- **`children`** (ReactNode): 그리드 내부에 포함될 컴포넌트입니다.
- **`rows`** (string): 그리드의 행 정의를 지정합니다.
- **`columns`** (string): 그리드의 열 정의를 지정합니다.
- **`gap`** (**`"${number}${Unit}"`**, 선택적): 자식 컴포넌트 간의 간격을 조절합니다.
- **`style`** (CSSProperties, 선택적): 그리드에 추가적인 스타일을 적용합니다.
- **`as`** (keyof JSX.IntrinsicElements, 선택적): 렌더링할 HTML 요소의 타입을 지정합니다. 기본값은 "div"입니다.

### **사용 예제**

```jsx
import React from "react";
import { Grid } from "goni-layout-component";

const App = () => {
  return (
    <Grid rows="1fr 1fr" columns="1fr 1fr" gap="16px">
      <div>아이템 1</div>
      <div>아이템 2</div>
      <div>아이템 3</div>
    </Grid>
  );
};

export default App;
```

## **Flex 컴포넌트**

**Flex** 컴포넌트는 CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 레이아웃을 구현합니다.

### **Props**

> `type Unit = "px" | "rem" | "%" | "vw";`

- **`children`** (ReactNode): 플렉스 컨테이너 내부에 포함될 컴포넌트입니다.
- **`direction`** ("row" | "column"): 배열 방향을 지정합니다.
- **`justify`** ("flex-start" | "flex-end" | "center" | "space-between" | "space-around"): 주 축 정렬을 지정합니다.
- **`align`** ("flex-start" | "flex-end" | "center" | "stretch"): 교차 축 정렬을 지정합니다.
- **`gap`** (**`${number}${Unit}`**, 선택적): 자식 컴포넌트 간의 간격을 조절합니다.
- **`style`** (CSSProperties, 선택적): 플렉스 컨테이너에 추가적인 스타일을 적용합니다.
- **`as`** (keyof JSX.IntrinsicElements, 선택적): 렌더링할 HTML 요소의 타입을 지정합니다. 기본값은 "div"입니다.

### **사용 예제**

```jsx
import React from "react";
import { Flex } from "goni-layout-component";

const App = () => {
  return (
    <Flex direction="row" justify="center" align="center" gap="8px">
      <div>아이템 1</div>
      <div>아이템 2</div>
      <div>아이템 3</div>
    </Flex>
  );
};

export default App;
```

## **기여**

이 프로젝트에 기여하려면 GitHub 저장소를 방문하십시오: **[GitHub 저장소 링크](https://github.com/jeongwusi/layout-component)**

## **라이센스**

이 프로젝트는 MIT 라이센스 하에 릴리스되었습니다.

자세한 정보는 LICENSE 파일을 참조하십시오: **[LICENSE 파일](https://raw.githubusercontent.com/jeongwusi/layout-component/main/LICENSE)**
