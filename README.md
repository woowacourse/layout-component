# react-component-layout

`react-comComponent-layout` 라이브러리는 React에서 재사용 가능한 레이아웃 구성요소를 제공합니다. 이를 통해 화면을 쉽게 구성할 수 있습니다.

## Storybook

[Storybook](https://65072b692164c6766d60a0ef-bzlfmhkzvp.chromatic.com/)

<br/>

## Install

```bash
$ npm i react-component-layout
# or
$ yarn add react-component-layout
```

<br/>

## Container Component

`Container` 컴포넌트는 콘텐츠의 최대 너비를 제한하고 화면 너비에 맞춰 중앙에 배치하는 레이아웃 컴포넌트입니다.

### Props

|   props    |               type               |              description              | default |
| :--------: | :------------------------------: | :-----------------------------------: | :-----: |
|    tag     |           ElementType            |       HTML Tag를 지정하는 속성        |   div   |
|  maxWidth  | string \| ResponsiveStyleType<T> | Container의 최대 너비를 지정하는 속성 |   div   |
|  minWidth  | string \| ResponsiveStyleType<T> | Container의 최소 너비를 지정하는 속성 |   div   |
| background | string \| ResponsiveStyleType<T> |   Container의 배경을 지정하는 속성    |   div   |

### 사용 예시

```tsx
function App() {
  return (
    <Container
      maxWidth="600px"
      minWidth="600px"
      background="rgba(250,250,250)"
    ></Container>
  );
}
```

<br/>

## Grid Component

`Grid` 구성요소는 하위 구성요소를 그리드로 배열하는 구성요소입니다.

`Grid.Item`은 `Grid` 컴포넌트의 영향을 받는 아이템 요소 컴포넌트입니다.

### Grid Component Props

|  props  |                    type                    |                   description                   | default |
| :-----: | :----------------------------------------: | :---------------------------------------------: | :-----: |
|   tag   |                ElementType                 |            HTML Tag를 지정하는 속성             |   div   |
| columns | number \| string \| ResponsiveStyleType<T> | Grid Container 열(Track)의 크기를 정의하는 속성 |  none   |
|  rows   | number \| string \| ResponsiveStyleType<T> | Grid Container 행(Track)의 크기를 정의하는 속성 |  none   |
|   gap   |      string \| ResponsiveStyleType<T>      |       행과 열 사이의 간격을 설정하는 속성       |   0px   |
|  align  |      string \| ResponsiveStyleType<T>      | Grid Item의 수직 방향 정렬 방식을 결정하는 속성 | stretch |
| justify |      string \| ResponsiveStyleType<T>      | Grid Item의 수평 방향 정렬 방식을 결정하는 속성 | stretch |

### Grid Item Component Props

|  props  |               type               |                   description                   | default |
| :-----: | :------------------------------: | :---------------------------------------------: | :-----: |
|   tag   |           ElementType            |            HTML Tag를 지정하는 속성             |   div   |
| column  | string \| ResponsiveStyleType<T> | Grid Item의 열의 시작과 끝 위치를 지정하는 속성 |    -    |
|   row   | string \| ResponsiveStyleType<T> | Grid Item의 행의 시작과 끝 위치를 지정하는 속성 |    -    |
|  align  | string \| ResponsiveStyleType<T> |     단일 그리드 아이템을 수직 정렬하는 속성     | stretch |
| justify | string \| ResponsiveStyleType<T> |     단일 그리드 아이템을 수평 정렬하는 속성     | stretch |

### 사용 예시

```tsx
function App() {
  return (
    <Grid columns={4} rows={2} gap="10px">
      <Grid.Item $gridColumn={'1/3'} justify="center">
        Item1
      </Grid.Item>
      <Grid.Item>Item2</Grid.Item>
      {/* ... */}
    </Grid>
  );
}
```

<br/>

## Flex Component

'Flex' 구성 요소는 하위 구성 요소를 유연하게 배열하는 구성 요소입니다.

`Flex.Item`은 `Flex` 컴포넌트의 영향을 받는 아이템 요소 컴포넌트입니다.

### Flex Component Props

|   props   |               type               |                                                                description                                                                | default |
| :-------: | :------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
|    tag    |           ElementType            |                                                         HTML Tag를 지정하는 속성                                                          |   div   |
| direction | string \| ResponsiveStyleType<T> |                                Flex Container 내의 아이템을 배치할 때 사용할 주축 및 방향을 지정하는 속성                                 |   row   |
|   wrap    | string \| ResponsiveStyleType<T> | Flex Item 요소들이 강제로 한줄에 배치되게 할 것인지, 또는 가능한 영역 내에서 벗어나지 않고 여러행으로 나누어 표현 할 것인지 결정하는 속성 | nowrap  |
|  justify  | string \| ResponsiveStyleType<T> |                    브라우저가 콘텐츠 항목 사시의 주변과 공간을 main-axis을 기준으로 어떻게 정렬할 것인지 결정하는 속성                    |  start  |
|   align   | string \| ResponsiveStyleType<T> |                                              Flex Item의 수직 방향 정렬 방식을 결정하는 속성                                              | stretch |
|    gap    | string \| ResponsiveStyleType<T> |                                                    행과 열 사이의 간격을 설정하는 속성                                                    |   0px   |

### Flex Item Component Props

- `align` (string | ResponsiveStyleType<T>): Determine how to vertically align
- `justify` (string | ResponsiveStyleType<T>): Decide how to horizontally align

| props |               type               |              description              | default |
| :---: | :------------------------------: | :-----------------------------------: | :-----: |
|  tag  |           ElementType            |       HTML Tag를 지정하는 속성        |   div   |
| align | string \| ResponsiveStyleType<T> | 자기 자신의 수직 정렬을 지정하는 속성 | stretch |

| justify?:
| string \| ResponsiveStyleType<T> | 자기 자신의 수평 정렬을 지정하는 속성 | stretch |

### 사용 예시

```tsx
function App() {
  return (
    <Flex direction="column" align="center">
      <Flex.Item>Item1</Flex.Item>
      <Flex.Item>Item2</Flex.Item>
      {/* ... */}
    </Flex>
  );
}
```

<br/>

## ResponsiveStyle

반응형 레이아웃을 생성하려면 ResponsiveStyleType에 해당하는 값을 인수로 전달하면 됩니다.

```tsx
function App() {
  return (
    <Container
      $minWidth={{ desktop: '900px', tablet: '600px', mobile: '450px' }}
      $maxWidth={{ desktop: '900px', tablet: '600px', mobile: '450px' }}
      background={{ desktop: 'blue', tablet: 'yellow', mobile: 'red' }}
    >
      Children
    </Container>
  );
}
```

|   size    |       width       |
| :-------: | :---------------: |
| `desktop` |         -         |
| `tablet`  | max-width: 1024px |
| `mobile`  | max-width: 768px  |

또한, 태블릿과 모바일 크기를 지정하고 싶다면 다음과 같이 값을 배열로 전달하면 됩니다.

```tsx
function App() {
  return (
    <Container
      background={{
        desktop: 'blue',
        tablet: [900, 'yellow'],
        mobile: [600, 'red'],
      }}
    >
      Children
    </Container>
  );
}
```

너비가 900보다 크면 파란색 배경이 표시되고, 너비가 600에서 900 사이이면 노란색 배경이 표시되며, 너비가 600보다 작으면 빨간색 배경이 표시됩니다.

<br/>

## ETC

레이아웃 구성 요소에 다른 CSS 속성을 적용하려면 다음과 같이 스타일 인라인을 작성합니다.

```tsx
function App() {
  return (
    <Container
      // ...
      style={{ padding: '20px' }}
    ></Container>
  );
}
```

<br/>

## Tabs Component

Tabs 컴포넌트는 사용자가 선택한 탭에 따라 특정 패널을 보여주는 컴포넌트입니다. Tabs 컴포넌트는 반응형이 지원되지 않습니다.

### Tabs Component Props

|     props     |          type          |                                                description                                                |  default   |
| :-----------: | :--------------------: | :-------------------------------------------------------------------------------------------------------: | :--------: |
| scrollButtons |        boolean         | Tabs의 Navigation의 가로폭이 화면 폭보다 길어졌을 때, 위치를 이동시킬 수 있는 버튼의 유무를 지정하는 속성 |    true    |
|   direction   | horizontal \| vertical |                                     Tabs의 정렬 방향을 지정하는 속성                                      | horizontal |
|   centered    |        boolean         |                                Tabs의 Navigation을 가운데로 정렬하는 속성                                 |   false    |
|  accentColor  |         string         |                                     선택된 탭의 색깔을 지정하는 속성                                      |  #3b82f6   |

### Tabs Panel Component Props

|  props   |  type   |                       description                        | default |
| :------: | :-----: | :------------------------------------------------------: | :-----: |
|  label   | string  | Tab의 이름을 나타내는 속성, 해당 값은 고유한 값. 필수 값 |    -    |
| disabled | boolean |             Tab의 비활성 여부를 정하는 속성              |  false  |

### 사용 예시

```tsx
function App() {
  return (
    <Tabs>
      <Tabs.Panel label="Panel1">Contents1</Tabs.Panel>
      <Tabs.Panel label="Panel2">Contents2</Tabs.Panel>
      <Tabs.Panel label="Panel3">Contents3</Tabs.Panel>
    </Tabs>
  );
}
```
