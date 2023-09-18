# turtle601-layout-component

## 설명

재사용 가능한 레이아웃 컴포넌트 구현

## 설치

- 리액트 환경에서 사용 가능합니다
- js 환경과 ts환경 둘 다 사용 가능합니다.

```
npm i react react-dom
npm i turtle601-layout-component
```

## 사용법

### Container

- 설명: 화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃

```tsx
import { Container } from 'turtle601-layout-component';

function ContainerExample() {
  return (
    <Container maxWidth="400px">
      <img src="https://naver.me" alt="예시 사진">
    </Container>;
  )
}

```

- maxWidth: Container 자식요소에게 아무리 커저도 maxWidth보다는 커지지 않게 하는 속성
- minWidth: Container 자식요소에게 아무리 작아져도 minWidth보다는 작아지지 않게 하는 속성

### Flex

- 설명: CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트

```tsx
import { Flex } from 'turtle601-layout-component';

function FlexExample() {
  return (
    <Flex direction="row" justify="center" align="center" gap={5}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Flex>;
  )
}

```

- direction: flex-direction 방향을 의미
- justify: 메인 축 방향 정렬 방법 의미
- align: 메인 축의 수직 축 방향 정렬 방법 의미
- gap: Flexbox 자식요소들끼리의 간격

### Grid

- 설명: CSS Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 컴포넌트

```tsx
import { GridLayout, GridItem } from 'turtle601-layout-component';

function GridExample() {
  return (
    <GridLayout gap={5}>
      <GridItem xs={8}>Item 1</GridItem>
      <GridItem xs={4}>Item 2</GridItem>
      <GridItem xs={12}>Item 3</GridItem>
    </GridLayout>;
  )
}
```
