# 🛠️ luxo-layout-component

이 라이브러리는 React에서 누구나 사용할 수 있는 다양한 레이아웃(Container, Grid, Flex) 컴포넌트를 제공합니다.
해당 라이브러리는 React 및 Typescript로 작성되었습니다.

# 설치

#### npm

```
npm install luxo-layout-component
```

### yarn

```
yarn add luxo-layout-component
```

# 사용 방법

## Container

Container는 화면 컨텐츠들을 가로 중앙에 배치합니다. 가장 기본적인 레이아웃 컴포넌트입니다.

### Props

#### Required

- `maxWidth`: 화면의 최대 너비를 정합니다.

#### Optional

- `minWidth`: 화면의 최소 너비를 정합니다.

### 사용 예시

```jsx
import { Container } from "luxo-layout-component";

const App = () => {
  return (
    <Container minWidth={500} maxWidth={800}>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
    </Container>
  );
};
```

## Grid

Grid는 화면 컨텐를 격자 형태로 배치합니다. 화면 크기에 따라 유동적으로 배치가 조정됩니다.

### Props

#### Required

- `rows`: 격자의 행 수 를 지정합니다.
- `columns`: 격자의 열 수를 지정합니다.

#### Optional

- `rowGap`: 행 사이 간격을 지정합니다.
- `columnGap`: 열 사이 간격을 지정합니다.
- `gap`: 행과 열 사이 간격을 지정합니다.

### 사용 예시

```jsx
import { Grid } from "luxo-layout-component";

const App = () => {
  return (
    <Grid rows={3} column={2} gap={10}>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
    </Grid>
  );
};
```

## Flex

Flex는 Flexbox 속 컨텐츠 요소들을 유연하게 배치할 수 있는 레이아웃입니다.

### Props

#### Optional

- `direction`: 요소의 방향을 지정합니다.
- `justify`: 요소의 가로축 배치 속성을 지정합니다.
- `align`: 요소의 세로축 배치 속성을 지정합니다.
- `gap`: 요소 사이의 간격을 지정합니다.
- `wrap`: 요소간 줄바꿈 속성을 지정합니다.

### 사용 예시

```jsx
import { Flex } from "luxo-layout-component";

const App = () => {
  return (
    <Flex direction="column" gap={10}>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
    </Flex>
  );
};
```
