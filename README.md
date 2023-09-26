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

| props    | 타입           | 설명                             |
| -------- | -------------- | -------------------------------- |
| maxWidth | number, string | max-width of Container component |
| minWidth | number, string | min-width of Container component |

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

| props | 타입           | 설명              |
| ----- | -------------- | ----------------- |
| cols  | number         | number of columns |
| rows  | number         | number of rows    |
| gap   | string, number | gap of children   |

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

| props     | 타입   | 설명                      |
| --------- | ------ | ------------------------- |
| direction | string | direction of flex display |
| justify   | string | justify of flex display   |
| align     | string | align of flex display     |
| gap       | string | gap of children           |

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

<br/>

### Masonry Layout

여러 크기의 아이템을 격자 형태로 정렬하되, 각 행과 열의 높이가 동일하지 않아 빈 공간이 최소화되는 레이아웃 컴포넌트

| props        | 타입                      | 설명                                                                 |
| ------------ | ------------------------- | -------------------------------------------------------------------- |
| column       | number ,'auto-fit'        | Number of columns, if auto-fit, fill the columns as much as possible |
| width        | number ,string, undefined | width of layout                                                      |
| itemWidth    | number ,string, undefined | width of layout item                                                 |
| columnGap    | number ,string, undefined | column-gap of layout                                                 |
| rowGap       | number ,string, undefined | row-gap of layout item                                               |
| borderRadius | number ,string, undefined | border-radius of layout                                              |

<br/>

```JavaScript
function App() {
  return (
    <MasonryLayout
     column={column}
     width={width}
     itemWidth={itemWidth}
     columnGap={columnGap}
     rowGap={rowGap}
     borderRadius={borderRadius}>
      <img/>
      <img/>
      <img/>
      <img/>
    </MasonryLayout>
  );
}
```

## 배포 링크

- [npm](https://www.npmjs.com/package/tkdrb15-layout-component)

- [사용설명서](https://tkdrb12.github.io/layout-component/)
