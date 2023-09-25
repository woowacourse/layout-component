# @gabrielyoon7/layout-container

## 설치 방법

```bash
// npm
npm install @gabrielyoon7/layout-component

// yarn
yarn add @gabrielyoon7/layout-component
```

## Container

### 소개

이 컴포넌트는 가로 너비 제어를 위한 컨테이너 역할을 하는 React 컴포넌트입니다. 이 컴포넌트를 사용하면 UI 디자인에서 최소 및 최대 가로 너비를 설정하고, 자식 컴포넌트를 감싸서 가로 중앙 정렬을 쉽게 구현할
수 있습니다.

```typescript jsx
import {Container} from "@gabrielyoon7/layout-component";

function MyComponent() {
  return (
    <Container maxWidth="xl">
      <div>컨테이너</div>
    </Container>
  )
}

```

[Container 스토리북 보러가기](https://65068c38c8cef469d3e5e634-otupvlrdhy.chromatic.com/?path=/docs/components-container--docs)

## Grid

### 소개

이 컴포넌트는 그리드 레이아웃을 구현하기 위한 React 컴포넌트입니다. 이 컴포넌트를 사용하면 UI 디자인에서 그리드 레이아웃을 쉽게 구현할 수 있습니다.

```typescript jsx
import {Grid} from "@gabrielyoon7/layout-component";

function MyComponent() {
  return (
    <Grid columns={3} row={3} gap={3}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </Grid>
  )
}

```

[Grid 스토리북 보러가기](https://65068c38c8cef469d3e5e634-otupvlrdhy.chromatic.com/?path=/docs/components-grid--docs)

## Flex

### 소개

이 컴포넌트는 Flex 레이아웃을 구현하기 위한 React 컴포넌트입니다. 이 컴포넌트를 사용하면 UI 디자인에서 Flex 레이아웃을 쉽게 구현할 수 있습니다.

```typescript jsx
import {Flex} from "@gabrielyoon7/layout-component";

function MyComponent() {
  return (
    <Flex direction="row" justify="center" align="center" gap={2}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Flex>
  )
}

```

[Flex 스토리북 보러가기](https://65068c38c8cef469d3e5e634-otupvlrdhy.chromatic.com/?path=/docs/components-flex--docs)

## SplitPane

### 소개

이 컴포넌트는 SplitPane 레이아웃을 구현하기 위한 React 컴포넌트입니다. 이 컴포넌트를 사용하면 UI 디자인에서 SplitPane 레이아웃을 쉽게 구현할 수 있습니다.

```typescript jsx
import {SplitPane} from "@gabrielyoon7/layout-component";

function MyComponent() {
  return (
    <SplitPane defaultSize="50%" minSize="10%" maxSize="90%">
      <div style={{backgroundColor: 'yellow', height: '100px'}}/>
      <div style={{backgroundColor: 'yellowgreen', height: '100px'}}/>
    </SplitPane>
  )
}

```

[SplitPane 스토리북 보러가기](https://65068c38c8cef469d3e5e634-otupvlrdhy.chromatic.com/?path=/docs/components-splitpane--docs)
