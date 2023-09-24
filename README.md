<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/source/skype/289/straight-ruler_1f4cf.png"/>
</p>
<h2 align="middle">누구나 사용할 수 있는 레이아웃 컴포넌트</h2>
<p align="middle">재사용 가능한 레이아웃 컴포넌트 제작과 배포</p>
<br/>

# Install

```bash
# use npm
npm install hae_on-layout-component

#use yarn
yarn add hae_on-layout-component

```

# Components

## Container

화면의 폭에 따라 내용의 폭을 조절하고 레이아웃을 배치하는 Container 컴포넌트입니다.

```jsx
import { Container } from 'hae_on-layout-component';
```

### Props

| props            | value                            | description                                        |
| ---------------- | -------------------------------- | -------------------------------------------------- |
| minWidth?        | string                           | Container의 최소 너비입니다.                       |
| maxWidth?        | string <br />(default = 100%)    | Container의 최대 너비입니다.                       |
| padding?         | string                           | Container의 padding값입니다.                       |
| backgroundColor? | string                           | Container의 배경 색상입니다.                       |
| borderRadius?    | string                           | Container의 border-radius값입니다.                 |
| centerContent?   | boolean <br /> (default = false) | Container의 자식 컴포넌트들의 중앙정렬 여부입니다. |
| children         | ReactNode                        | Container의 자식 컴포넌트입니다.                   |

### Example

```jsx
<Container maxWidth='600px' backgroundColor='#D8EAFF' centerContent>
  <div>Container</div>
</Container>
```

<br/>

## Grid

웹 페이지의 레이아웃을 구성하는 2차원(행과 열)의 시스템 Grid 컴포넌트입니다.

```jsx
import { Grid } from 'hae_on-layout-component';
```

### Props

| props    | value       | description                         |
| -------- | ----------- | ----------------------------------- |
| areas?   | string      | Grid의 영역을 정의합니다.           |
| rows?    | number      | Grid의 행 수를 지정합니다.          |
| columns? | number      | Grid의 열 수를 지정합니다.          |
| gap?     | number      | Grid Item 사이의 간격을 지정합니다. |
| height?  | string      | Grid의 높이를 지정합니다.           |
| children | ReactNode[] | Grid의 자식 컴포넌트입니다.         |

### Example

```jsx
<Grid columns={5} gap={4}>
  <GridItem col={2} height='30px' backgroundColor='#D8EAFF' />
  <GridItem colStart={4} colEnd={6} height='30px' backgroundColor='#FFEC99' />
</Grid>
```

<br/>

## Grid Item

Grid 컴포넌트 내부에 들어가는 하나의 컴포넌트입니다.

```jsx
import { GridItem } from 'hae_on-layout-component';
```

### Props

| props            | value           | description                                 |
| ---------------- | --------------- | ------------------------------------------- |
| area?            | string          | GridItem의 영역을 정의합니다.               |
| row?             | number / 'auto' | GridItem의 행 수를 지정합니다.              |
| col?             | number / 'auto' | GridItem의 열 수를 지정합니다.              |
| rowStart?        | number / 'auto' | GridItem의 행이 시작하는 위치를 지정합니다. |
| rowEnd?          | number / 'auto' | GridItem의 행이 끝나는 위치를 지정합니다.   |
| colStart?        | number / 'auto' | GridItem의 열이 시작하는 위치를 지정합니다. |
| colEnd?          | number / 'auto' | GridItem의 열이 끝나는 위치를 지정합니다.   |
| width?           | string          | GridItem의 너비를 지정합니다.               |
| height?          | string          | GridItem의 높이를 지정합니다.               |
| backgroundColor? | string          | GridItem의 배경 색상입니다.                 |
| children?        | ReactNode       | GridItem의 자식 컴포넌트입니다.             |

### Example

```jsx
<GridItem col={2} height='30px' backgroundColor='#D8EAFF' />
```

<br/>

## Flex

Flex 레이아웃을 생성하기 위한 컴포넌트입니다.

```jsx
import { Flex } from 'hae_on-layout-component';
```

### Props

| props      | value                           | description                           |
| ---------- | ------------------------------- | ------------------------------------- |
| direction? | CSSProperties['flexDirection']  | Flex의 배치 방향을 설정합니다.        |
| wrap?      | CSSProperties['flexWrap']       | Flex의 줄넘김 처리 설정합니다.        |
| justify?   | CSSProperties['justifyContent'] | Flex의 메인축 방향 정렬을 지정합니다. |
| align?     | CSSProperties['alignItems']     | Flex의 수직축 방향 정렬을 지정합니다. |
| gap?       | number                          | Flex의 콘텐츠 사이 간격을 지정합니다. |
| width?     | CSSProperties['width']          | Flex의 너비를 지정합니다.             |
| height?    | CSSProperties['height']         | Flex의 높이를 지정합니다.             |
| children?  | ReactNode                       | Flex의 자식 컴포넌트입니다.           |

### Example

```jsx
<Flex align='center' gap={20}>
  <FlexItem>Item1</div>
  <FlexItem>Item2</div>
  <FlexItem>Item3</div>
  <FlexItem>Item4</div>
</Flex>
```

<br/>

## Flex Item

Flex 컴포넌트 내부에 들어가는 하나의 컴포넌트입니다.

```jsx
import { FlexItem } from 'hae_on-layout-component';
```

### Props

| props      | value                       | description                               |
| ---------- | --------------------------- | ----------------------------------------- |
| order?     | number                      | FlexItem의 배치 순서를 지정합니다.        |
| grow?      | CSSProperties['flexGrow']   | basis 값보다 커질 수 있도록 지정합니다.   |
| shrink?    | CSSProperties['flexShrink'] | basis 값보다 작아질 수 있도록 지정합니다. |
| basis?     | CSSProperties['flexBasis']  | FlexItem의 기본 크기를 지정합니다.        |
| alignSelf? | CSSProperties['alignSelf']  | FlexItem의 수직축 방향 정렬을 지정합니다. |
| children?  | ReactNode                   | FlexItem의 자식 컴포넌트입니다.           |

### Example

```jsx
<FlexItem>Item1</div>
```

<br/>

## Tab Layout

Tab 버튼을 통해 관련된 콘텐츠를 화면에 표시할 수 있는 컴포넌트입니다.

```jsx
import { TabLayout } from 'hae_on-layout-component';
```

### Props

| props            | value                                                  | description                                                                |
| ---------------- | ------------------------------------------------------ | -------------------------------------------------------------------------- |
| tabs             | string[]                                               | Tab 버튼에 들어갈 목록입니다. <br /> Tab 버튼 이름을 지정할 수 있습니다.   |
| width?           | string                                                 | Tab 버튼 리스트의 길이를 조절할 수 있습니다.                               |
| tabListStyles?   | activeStyle? / inactiveStyle? / padding? / fontSize?   | Tab 버튼 리스트 내부에 들어갈 스타일을 지정할 수 있습니다.                 |
| activeStyle?     | color? / backgroundColor? / borderColor? / fontWeight? | 버튼이 활성화 되었을 때 스타일입니다.                                      |
| inactiveStyle?   | color? / backgroundColor? / borderColor? / fontWeight? | 버튼이 비활성화 되었을 때 스타일입니다.                                    |
| color?           | string                                                 | (비)활성화 되었을 때 글자색입니다.                                         |
| backgroundColor? | string                                                 | (비)활성화 되었을 때 배경색입니다.                                         |
| borderColor?     | string                                                 | (비)활성화 되었을 때 테두리색입니다.                                       |
| fontWeight?      | string                                                 | (비)활성화 되었을 때 글자의 굵기입니다.                                    |
| padding?         | string                                                 | 버튼의 padding 값을 조절할 수 있습니다.                                    |
| fontSize?        | string                                                 | 버튼의 글자 크기를 조절할 수 있습니다.                                     |
| children         | ReactNode[]                                            | TabLayout의 자식 컴포넌트입니다. <br /> Tab의 콘텐츠를 지정할 수 있습니다. |

### Example

```jsx
<TabLayout
  tabs={['Tab 1', 'Tab 2', 'Tab 3']}
  tabListStyles={{
    activeStyle: {
      color: 'blue',
    },
    fontSize: '100px',
  }}
>
  <Container>Content 1</Container>
  <Container>Content 2</Container>
  <Container>Content 3</Container>
</TabLayout>
```

\*해당 예시에서 Container는 `hae_on-layout-component`의 내부 컴포넌트입니다.
