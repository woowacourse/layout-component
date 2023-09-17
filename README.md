# **React Layout Component**

이 라이브러리는 React를 사용하여 다양한 레이아웃을 쉽게 구현할 수 있는 컴포넌트를 제공합니다. 라이브러리는 TypeScript로 작성되었으며, 각 컴포넌트는 화면 레이아웃을 만들 때 도움이 됩니다.

## **설치**

먼저 npm을 사용하여 패키지를 설치합니다:

```bash
npm install goni-layout-component
```

## **Container 컴포넌트**

**Container** 컴포넌트는 화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃을 구현합니다.

### **Props**

- **`minWidth`** (number): 최소 폭을 지정합니다.
- **`maxWidth`** (number): 최대 폭을 지정합니다.

### **사용 예제**

```jsx
import React from "react";
import { Container } from "goni-layout-component";

const App = () => {
  return (
    <Container minWidth={600} maxWidth={960}>
      <div>Content</div>
    </Container>
  );
};

export default App;
```

## **Grid 컴포넌트**

**Grid** 컴포넌트는 CSS Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 레이아웃을 구현합니다.

### **Props**

**필수**

- **`rows`** (number): 격자의 행 수를 지정합니다.
- **`columns`** (number): 격자의 열 수를 지정합니다.

**선택 (기본값 0)**

- **`gap`** (number): 자식 컴포넌트 간의 간격을 조절합니다.

### **사용 예제**

```jsx
import React from "react";
import { Grid } from "goni-layout-component";

const App = () => {
  return (
    <Grid rows={3} columns={3} gap={10}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Grid>
  );
};

export default App;
```

## **Flex 컴포넌트**

**Flex** 컴포넌트는 CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 레이아웃을 구현합니다.

### **Props**

**필수**

- **`direction`** ('row' | 'column'): 배열 방향을 지정합니다.
- **`justify`** ('flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'): 주 축 정렬을 지정합니다.
- **`align`** ('flex-start' | 'flex-end' | 'center' | 'stretch'): 교차 축 정렬을 지정합니다.

**선택 (기본값 0)**

- **`gap`** (number): 자식 컴포넌트 간의 간격을 조절합니다.

### **사용 예제**

```jsx
import React from "react";
import { Flex } from "goni-layout-component";

const App = () => {
  return (
    <Flex direction="row" justify="center" align="center" gap={5}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
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
