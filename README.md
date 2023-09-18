## 설명

React 기본 레이아웃 컴포넌트 (Container, Grid, Flex)

## version

version: 0.1.7 (updated in 2023.09.18)

## 사용법

### 설치

```Shell
npm i tkdrb15-layout-component
```

### 컴포넌트 삽입

```JavaScript
import { Container, Grid, Flex } from 'tkdrb15-layout-component';
```

## Prop

### Container

| props    | 타입           |
| -------- | -------------- |
| maxWidth | number, string |
| minWidth | number, string |

<br/>

```JavaScript
function App() {
  return (
      <Container
        maxWidth='300px'
        minWidth='200px'
      >
        <div>Item1</div>
        <div>Item2</div>
      </Container>
  );
}
```

<br/>

### Grid

CSS Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 컴포넌트

| props | 타입   |
| ----- | ------ |
| cols  | number |
| rows  | number |
| gap   | number |

<br/>

```JavaScript
function App() {
  return (
      <Grid
        cols={3}
        rows={5}
        gap="10px"
      >
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
        <div>Item4</div>
      </Grid>
  );
}
```

<br/>

### Flex

CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트

| props     | 타입   |
| --------- | ------ |
| direction | string |
| justify   | string |
| align     | string |
| gap       | string |

<br/>

```JavaScript
function App() {
  return (
      <Flex
        direction="row"
        justify="center"
        align="center"
        gap="10px"
      >
      <div>Item1</div>
      <div>Item2</div>
      <div>Item3</div>
      <div>Item4</div>
      </Flex>
  );
}
```

## 배포 링크

- [npm](https://www.npmjs.com/package/tkdrb15-layout-component)
