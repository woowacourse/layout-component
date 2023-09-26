# react-aaker-layout-components

`react-aaker-layout-components` 는 레이아웃을 위한 편리한 컴포넌트 라이브러리입니다.

## 설치 방법

### npm

```bash
npm i react-aaker-layout-components
```

### yarn

```bash
yarn add react-aaker-layout-components
```

## 📦 Container

**다양한 스타일을 적용할 수 있는 범용적인 `div` 컴포넌트입니다.**

### Props

`Container` 컴포넌트는 기본적으로 `div` 엘리먼트의 대부분의 속성을 지원합니다.

- `display?: 'block' | 'inline' | 'inline-block' | 'none'`

  display 속성을 설정합니다.

- `position?: CSSProperties['position']`

  position 속성을 설정합니다.

- `top?: CSSProperties['top']`

  top 속성을 설정합니다.

- `right?: CSSProperties['right']`

  right 속성을 설정합니다.

- `bottom?: CSSProperties['bottom']`

  bottom 속성을 설정합니다.

- `left?: CSSProperties['left']`

  left 속성을 설정합니다.

- `width?: CSSProperties['width']`

  width 속성을 설정합니다.

- `height?: CSSProperties['height']`

  height 속성을 설정합니다.

- `minWidth?: CSSProperties['minWidth']`

  minWidth 속성을 설정합니다.

- `maxWidth?: CSSProperties['maxWidth']`

  maxWidth 속성을 설정합니다.

- `margin?: CSSProperties['margin']`

  margin 속성을 설정합니다.

  기본값은 `0 auto` 입니다.

- `padding?: CSSProperties['padding']`

  padding 속성을 설정합니다.

- `border?: CSSProperties['border']`

  border 속성을 설정합니다.

- `borderRadius?: CSSProperties['borderRadius']`

  borderRadius 속성을 설정합니다.

- `backgroundColor?: CSSProperties['backgroundColor']`

  배경색을 설정합니다.

- `color?: CSSProperties['color']`

  글자색을 설정합니다.

- `overflow?: CSSProperties['overflow']`

  overflow 속성을 설정합니다.

- `cursor?: CSSProperties['cursor']`

  cursor 속성을 설정합니다.

- `opacity?: CSSProperties['opacity']`

  opacity 속성을 설정합니다.

- `zIndex?: CSSProperties['zIndex']`

  zIndex 속성을 설정합니다.

### 모든 스타일 속성은 선택 사항입니다.

`undefined` 값이 설정된 속성은 무시됩니다.

### 사용 예시

```tsx
import { Container } from 'react-aaker-layout-components';

function App() {
  return (
    <Container
      position='relative'
      width='100%'
      height='100vh'
      padding={20}
      backgroundColor='#f4f4f4'
    >
      <p>Hello, World!</p>
    </Container>
  );
}
```

## 🔲 Grid

**Grid 레이아웃을 쉽게 구현할 수 있는 `Grid` 컴포넌트입니다.**

### Props

💡 `Grid` 는 `Container` 컴포넌트의 `Props` 또한 사용할 수 있습니다.

- `display?: 'grid' | 'inline-grid' | 'none'`

  display 속성을 설정합니다.

  기본 값은 `grid` 입니다.

- `grid?: CSSProperties['grid']`

  grid 속성을 설정합니다.

- `gridTemplate?: CSSProperties['gridTemplate']`

  gridTemplate 속성을 설정합니다.

- `rows?: CSSProperties['gridTemplateRows']`

  gridTemplateRows 속성을 설정합니다.

- `columns?: CSSProperties['gridTemplateColumns']`

  gridTemplateColumns 속성을 설정합니다.

- `gridTemplateAreas?: CSSProperties['gridTemplateAreas']`

  gridTemplateAreas 속성을 설정합니다.

- `gridAutoRows?: CSSProperties['gridAutoRows']`

  gridAutoRows 속성을 설정합니다.

- `gridAutoColumns?: CSSProperties['gridAutoColumns']`

  gridAutoColumns 속성을 설정합니다.

- `gridAutoFlow?: CSSProperties['gridAutoFlow']`

  gridAutoFlow 속성을 설정합니다.

- `gap?: CSSProperties['gap']`

  gap 속성을 설정합니다.

- `rowGap?: CSSProperties['rowGap']`

  rowGap 속성을 설정합니다.

- `columnGap?: CSSProperties['columnGap']`

  columnGap 속성을 설정합니다.

- `placeItems?: CSSProperties['placeItems']`

  placeItems 속성을 설정합니다.

- `justifyItems?: CSSProperties['justifyItems']`

  justifyItems 속성을 설정합니다.

- `alignItems?: CSSProperties['alignItems']`

  alignItems 속성을 설정합니다.

- `placeContent?: CSSProperties['placeContent']`

  placeContent 속성을 설정합니다.

- `justifyContent?: CSSProperties['justifyContent']`

  justifyContent 속성을 설정합니다.

- `alignContent?: CSSProperties['alignContent']`

  alignContent 속성을 설정합니다.

- `gridColumnStart?: CSSProperties['gridColumnStart']`

  gridColumnStart 속성을 설정합니다.

- `gridColumnEnd?: CSSProperties['gridColumnEnd']`

  gridColumnEnd 속성을 설정합니다.

- `gridRowStart?: CSSProperties['gridRowStart']`

  gridRowStart 속성을 설정합니다.

- `gridRowEnd?: CSSProperties['gridRowEnd']`

  gridRowEnd 속성을 설정합니다.

- `gridColumn?: CSSProperties['gridColumn']`

  gridColumn 속성을 설정합니다.

- `gridRow?: CSSProperties['gridRow']`

  gridRow 속성을 설정합니다.

- `gridArea?: CSSProperties['gridArea']`

  gridArea 속성을 설정합니다.

- `placeSelf?: CSSProperties['placeSelf']`

  placeSelf 속성을 설정합니다.

- `justifySelf?: CSSProperties['justifySelf']`

  justifySelf 속성을 설정합니다.

- `alignSelf?: CSSProperties['alignSelf']`

  alignSelf 속성을 설정합니다.

### 모든 스타일 속성은 선택 사항입니다.

`undefined` 값이 설정된 속성은 무시됩니다.

### 사용 예시

```tsx
import { Grid } from 'react-aaker-layout-components';

function App() {
  return (
    <Grid rows={2} columns={2} gap={20}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </Grid>
  );
}
```

## 🧲 Flex

**자식 컴포넌트들을 유연하게 배열할 수 있는 컴포넌트입니다.**

### Props

💡 `Flex` 는 `Container` 컴포넌트의 `Props` 또한 사용할 수 있습니다.

- `display?: 'flex' | 'inline-flex' | 'none'`

  display 속성을 설정합니다.

  기본값은 `flex` 입니다.

- `flex?: CSSProperties['flex']`

  flex 속성을 설정합니다.

- `flexGrow?: CSSProperties['flexGrow']`

  flexGrow 속성을 설정합니다.

- `flexShrink?: CSSProperties['flexShrink']`

  flexShrink 속성을 설정합니다.

- `flexBasis?: CSSProperties['flexBasis']`

  flexBasis 속성을 설정합니다.

- `direction?: CSSProperties['flexDirection']`

  flexDirection 속성을 설정합니다.

- `flexWrap?: CSSProperties['flexWrap']`

  flexWrap 속성을 설정합니다.

- `flexFlow?: CSSProperties['flexFlow']`

  flexFlow 속성을 설정합니다.

- `justify?: CSSProperties['justifyContent']`

  justifyContent 속성을 설정합니다.

- `align?: CSSProperties['alignItems']`

  alignItems 속성을 설정합니다.

- `alignSelf?: CSSProperties['alignSelf']`

  alignSelf 속성을 설정합니다.

- `alignContent?: CSSProperties['alignContent']`

  alignContent 속성을 설정합니다.

- `order?: CSSProperties['order']`

  order 속성을 설정합니다.

- `gap?: CSSProperties['gap']`

  gap 속성을 설정합니다.

### 모든 스타일 속성은 선택 사항입니다.

`undefined` 값이 설정된 속성은 무시됩니다.

### 사용 예시

```tsx
import { Flex } from 'react-aaker-layout-components';

function App() {
  return (
    <Flex direction='column' justify='center' align='center' gap={20}>
      <div>Item 1</div>
      <div>Item 2</div>
    </Flex>
  );
}
```

## 🧭 TabLayout

**여러 탭과 그에 대응하는 패널을 쉽게 구성할 수 있는 컴포넌트입니다.**

### Props

💡 `TabLayout` 은 `Container` 의 일부 속성을 사용할 수 있습니다.

- `tabs: string[]`

  탭의 목록을 설정합니다.

- `tabJustify?: 'start' | 'center' | 'end'`

  탭의 정렬을 설정합니다.

  기본값은 'start'입니다.

- `tabPosition?: 'top' | 'right' | 'left' | 'bottom'`

  탭의 위치를 설정합니다.

  기본값은 'top'입니다.

- `position?: CSSProperties['position']`

- `top?: CSSProperties['top']`

- `right?: CSSProperties['right']`

- `bottom?: CSSProperties['bottom']`

- `left?: CSSProperties['left']`

- `width?: CSSProperties['width']`

  기본값은 '100%'입니다.

- `height?: CSSProperties['height']`

  기본값은 '100%'입니다.

- `minWidth?: CSSProperties['minWidth']`

- `maxWidth?: CSSProperties['maxWidth']`

  기본값은 '100%'입니다.

- `margin?: CSSProperties['margin']`

- `opacity?: CSSProperties['opacity']`

- `zIndex?: CSSProperties['zIndex']`

  모든 스타일 속성은 선택 사항입니다.
  undefined 값이 설정된 속성은 무시됩니다.

### 사용 예시

```tsx
Copy code
import TabLayout from 'your-library/TabLayout';

function App() {
  return (
    <TabLayout
      tabs={['Tab1', 'Tab2']}
      tabJustify="center"
      tabPosition="top"
      width="50%"
      height="400px"
    >
      <div>Content for Tab1</div>
      <div>Content for Tab2</div>
    </TabLayout>
  );
}
```
