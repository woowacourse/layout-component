# Layout Components for React

레이아웃 용도로 사용할 수 있는 리액트 컴포넌트 모음집이에요.    
`.js`, `.cjs`, 타입스크립트를 위한 `.d.ts` 파일을 제공합니다.

- [npm](https://www.npmjs.com/package/@wainaat/react-layout-component)
- [demo: Storybook](https://wainaat.github.io/layout-component/)
- [demo (Container, Grid, Flex): CodeSandbox](https://codesandbox.io/s/example-wainaat-react-layout-component-57vgc7?file=/src/App.js)
- [demo (Masonry): CodeSandbox](https://codesandbox.io/s/masonry-wainaat-react-layout-component-kp7sz2)

## 설치하기

```bash
npm install @wainaat/react-layout-component
```

번들러를 사용할 경우 해당 번들러가 css 파일을 읽을 수 있어야 합니다.

## 컴포넌트 소개

## Container

### 설명

Container는 본인을 부모의 수평 축 기준으로 중앙에 위치하도록 정렬해요. 수직 축으로는 정렬하지 않습니다.    
Container 내부 요소들에 대한 중앙 정렬과 overflow 처리는 보장하지 않습니다.

|props 이름|설명|기본값|
|:-:|:-:|:-:|
|`as`|HTML tag 이름|`div`|
|`minWidth`| Container의 최소 너비 <br /> CSS의 min-width에 들어갈 수 있는 값 |`min-content`|
|`maxWidth`| Container의 최대 너비 <br /> CSS의 max-width에 들어갈 수 있는 값 |`max-content`|

표에 나와 있는 것 외에도 `<div>`태그에 들어갈 수 있는 모든 props를 사용 가능합니다.

### 사용 예시

```jsx
<Container as="h1" maxWidth="max-content" minWidth="min-content">
  <p>안녕하세요?</p>
</Container>
```

## Grid

### 설명

Grid는 자식 요소들을 격자 형태로 배치합니다.

만약 자식 요소들의 크기가 일정하지 않은 경우, 각 칸의 크기는 아래 식에 따라 계산됩니다.

- 가로: 해당 열에서 가장 가로 길이가 긴 요소의 크기
- 세로: 해당 행에서 가장 세로 길이가 긴 요소의 크기

|props 이름|설명|기본값|
|:-:|:-:|:-:|
|`as`|HTML tag 이름|`div`|
|`rows`*| 행의 개수 ||
|`columns`*| 열의 개수 ||
|`gap`|각 행과 열 사이의 간격 <br /> CSS에서 길이를 표현할 수 있는 문자열|`''`|

### 사용 예시

```jsx
<Grid as="section" rows={2} columns={2} gap="10px">
  <div>짧다고</div>
  <div>말하지 마라</div>
  <div>눈물이 적다고</div>
  <div>눈물샘이 작으랴</div>
</Grid>
```

## Flex

### 설명

Flex는 자식 컴포넌트들을 감싸는 Flexbox를 제공합니다.

|props 이름|설명|기본값|
|:-:|:-:|:-:|
|`as`|HTML tag 이름|`div`|
|`inline`| `true`로 설정하면 inline-flex를 적용합니다 |`false`|
|`direction`| CSS의 flex-direction에 들어갈 수 있는 값 |`row`|
|`align`| CSS의 align-items에 들어갈 수 있는 값 |`normal`|
|`justify`|CSS의 justify-content에 들어갈 수 있는 값|`normal`|
|`gap`|내부 요소들 사이의 간격을 나타낼 수 있는 값|`''`|
|`wrap`| CSS의 flex-wrap에 들어갈 수 있는 값|`nowrap`|

### 사용 예시

```jsx
<Flex
  as="main"
  direction="column"
  align="center"
  justify="center"
  gap="10px"
>
  <p>그리운 날은 그림을 그리고</p>
  <p>쓸쓸한 날은 음악을 들었다</p>
  <p>그러고도 남는 날은</p>
  <p>너를 생각해야만 했다</p>
</Flex>
```

## Masonry

### 설명

Masonry는 세로 방향의 Masonry layout을 제공합니다.

컴파운드 컴포넌트 패턴으로 구현되었습니다.

#### Masonry

|props 이름|설명|기본값|
|:-:|:-:|:-:|
|`as`|`div`, `section`, `main`, `article`|`div`|
|`itemSize`|각 열의 폭을 나타냅니다. <br /> CSS의 width에 들어갈 수 있는 값|`25%`|
|`fluidResize`|`true`로 설정하면 각 열이 Masonry의 전체 폭에 따라 최소 `itemSize`, 최대 `1fr` 사이에서 자유롭게 움직입니다.|`false`|
|`rowGap`|각 행 사이의 간격|`0`|
|`columnGap`|각 열 사이의 간격|`0`|

#### Masonry.Item

이 컴포넌트는 props를 받지 않습니다.

#### 주의사항

- Masonry를 이용해 정리할 요소는 `<Masonry.Item>`으로 감싸야 합니다.
- DOM 상에서 `<Masonry.Item>`은 `<Masonry>`의 바로 하위 요소여야 합니다. 그렇지 않은 `<Masonry.Item>`의 정렬은 보장하지 않습니다.
- `<Masonry.Item>`을 제외한 모든 `<Masonry>`의 하위 요소에 대한 올바른 렌더링은 보장하지 않습니다.
- `<Masonry.Item>`은 `<Masonry>` 밖에서 사용할 수 없습니다.

### 사용 예시

```jsx
import { Masonry } from '@wainaat/react-layout-component';

<Masonry>
  {Array.from({ length: 20 }).map((_, index) => (
    <Masonry.Item key={index}>
      <MyRandomImage />
    </Masonry.Item>
  ))}
</Masonry>
```
