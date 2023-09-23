<h1 align="middle">React Layout Component HP</h1>
<h3 align="middle">재사용 가능한 레이아웃 컴포넌트 with React, Typescript</h3>
<br/>

## Installation

### In React App

```bash
# use npm
npm install layout-component-hp

#use yarn
yarn add layout-component-hp
```

<br>

## Container

화면의 폭에 따라 내용의 폭을 조절하고 중앙에 배치하는 레이아웃 컴포넌트

### Import

```tsx
import { Container } from 'layout-component-hp';
```

### Props

| props          | type                        | description                                               |
| -------------- | --------------------------- | --------------------------------------------------------- |
| minWidth?      | number                      | Container의 min-width값입니다.                            |
| maxWidth?      | number                      | Container의 max-width값입니다.                            |
| padding?       | number                      | Container의 padding값입니다.                              |
| centerContent? | boolean (default: false)    | Container 자식 컴포넌트의 중앙 정렬 여부입니다.           |
| css?           | CSSProperties (default: {}) | Container의 props를 제외한 기타 커스텀 스타일 속성입니다. |
| children?      | ReactNode                   | Container의 자식 컴포넌트입니다.                          |

### Usage

```tsx
<Container minWidth={300} maxWidth={900}>
  <div>Container</div>
</Container>
```

<br>

## Grid

CSS Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 레이아웃 컴포넌트

### Import

```tsx
import { Grid } from 'layout-component-hp';
```

### Anatomy

- Grid: CSS Grid를 지정한 컨테이너
- Grid.Item: Grid 내 각 아이템 컨테이너

### Grid Props

| props      | value                              | description                                          |
| ---------- | ---------------------------------- | ---------------------------------------------------- |
| areas?     | CSSProperties['gridTemplateAreas'] | Grid의 영역을 정의합니다.                            |
| rows?      | number                             | Grid의 행 수를 지정합니다.                           |
| columns?   | number                             | Grid의 열 수를 지정합니다.                           |
| gap?       | number                             | Grid 내 아이템 사이의 간격을 지정합니다.             |
| rowGap?    | number                             | Grid의 행 사이의 간격을 지정합니다.                  |
| columnGap? | number                             | Grid의 열 사이의 간격을 지정합니다.                  |
| css?       | CSSProperties (default: {})        | Grid의 props를 제외한 기타 커스텀 스타일 속성입니다. |
| children?  | ReactNode                          | Grid의 자식 컴포넌트입니다.                          |

### Grid.Item Props

| props     | value                       | description                                          |
| --------- | --------------------------- | ---------------------------------------------------- |
| area?     | CSSProperties['gridArea']   | Grid.Item의 영역을 정의합니다.                       |
| row?      | number / 'auto'             | Grid.Item의 행 수를 지정합니다.                      |
| col?      | number / 'auto'             | Grid.Item의 열 수를 지정합니다.                      |
| rowStart? | number / 'auto'             | Grid.Item의 행이 시작하는 위치를 지정합니다.         |
| rowEnd?   | number / 'auto'             | Grid.Item의 행이 끝나는 위치를 지정합니다.           |
| colStart? | number / 'auto'             | Grid.Item의 열이 시작하는 위치를 지정합니다.         |
| colEnd?   | number / 'auto'             | Grid.Item의 열이 끝나는 위치를 지정합니다.           |
| css?      | CSSProperties (default: {}) | Grid의 props를 제외한 기타 커스텀 스타일 속성입니다. |
| children? | ReactNode                   | Grid.Item의 자식 컴포넌트입니다.                     |

### Usage

```tsx
<Grid columns={5} gap={4}>
  <Grid.Item col={2}>Item1</Grid.Item>
  <Grid.Item colStart={4} colEnd={6}>
    Item2
  </Grid.Item>
</Grid>
```

<br>

## Flex

CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 레이아웃 컴포넌트

### Import

```tsx
import { Flex } from 'layout-component-hp';
```

### Anatomy

- Flex: CSS Flexbox를 지정한 컨테이너
- Flex.Item: Flex 내 각 아이템 컨테이너

### Flex Props

| props      | value                           | description                                          |
| ---------- | ------------------------------- | ---------------------------------------------------- |
| direction? | CSSProperties['flexDirection']  | Flex의 배치 방향을 설정합니다.                       |
| wrap?      | CSSProperties['flexWrap']       | Flex의 줄넘김 처리 설정합니다.                       |
| justify?   | CSSProperties['justifyContent'] | Flex의 메인축 방향 정렬을 지정합니다.                |
| align?     | CSSProperties['alignItems']     | Flex의 수직축 방향 정렬을 지정합니다.                |
| gap?       | number                          | Flex의 콘텐츠 사이 간격을 지정합니다.                |
| css?       | CSSProperties (default: {})     | Flex의 props를 제외한 기타 커스텀 스타일 속성입니다. |
| children?  | ReactNode                       | Flex의 자식 컴포넌트입니다.                          |

### Flex.Item Props

| props    | value                       | description                                               |
| -------- | --------------------------- | --------------------------------------------------------- |
| order?   | CSSProperties['order']      | Flex.Item의 배치 순서를 지정합니다.                       |
| basis?   | CSSProperties['flexBasis']  | Flex.Item의 기본 크기를 지정합니다.                       |
| grow?    | CSSProperties['flexGrow']   | basis 값보다 커질 수 있도록 지정합니다.                   |
| shrink?  | CSSProperties['flexShrink'] | basis 값보다 작아질 수 있도록 지정합니다.                 |
| align?   | CSSProperties['alignSelf']  | Flex.Item의 수직축 방향 정렬을 지정합니다.                |
| css?     | CSSProperties (default: {}) | Flex.Item의 props를 제외한 기타 커스텀 스타일 속성입니다. |
| children | ReactNode                   | Flex.Item의 자식 컴포넌트입니다.                          |

### Usage

```tsx
<Flex direction='column' gap={10}>
  <Flex.Item>Item1</Flex.Item>
  <Flex.Item>Item2</Flex.Item>
</Flex>
```
