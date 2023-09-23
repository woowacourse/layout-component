# @bassyu/layout-component

## Container

### 속성

| 속성     | 기본값   | 설명                                  |
| -------- | -------- | ------------------------------------- |
| as       | `'div'`  | Block-level 요소의 이름을 지정합니다. |
| minWidth | `'none'` | 해당 픽셀만큼 최소 너비를 지정합니다. |
| maxWidth | `'none'` | 해당 픽셀만큼 최대 너비를 지정합니다. |

### 예제

```tsx
import { Container } from '@bassyu/layout-component';

const App = () => (
  <Container minWidth={600} maxWidth={960}>
    <div>Content</div>
  </Container>
);
```

## Grid

### 속성

`Container` 속성을 상속 받습니다.

| 속성    | 기본값 | 설명                         |
| ------- | ------ | ---------------------------- |
| rows    | `1`    | 행 개수를 줍니다.            |
| columns | `1`    | 열 개수를 줍니다.            |
| gap     | `0`    | 해당 픽셀만큼 간격을 줍니다. |

### 예제

```tsx
import { Grid } from '@bassyu/layout-component';

const App = () => (
  <Grid rows={3} columns={3} gap={10} minWidth={600} maxWidth={960}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Grid>
);
```

## Flex

### 속성

`Container` 속성을 상속 받습니다.

| 속성      | 기본값      | 설명                         |
| --------- | ----------- | ---------------------------- |
| direction | `undefined` | 축의 방향을 줍니다.          |
| justify   | `undefined` | 축 정렬을 합니다.            |
| align     | `undefined` | 아이템 정렬을 합니다.        |
| gap       | `0`         | 해당 픽셀만큼 간격을 줍니다. |

### 예제

```tsx
import { Flex } from '@bassyu/layout-component';

const App = () => (
  <Flex direction="row" justify="center" align="center" gap={5} minWidth={600} maxWidth={960}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Flex>;
);
```
