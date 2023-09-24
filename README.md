## Install

```bash
npm install tami-layout-component
yarn add tami-layout-component
```

## Container

화면의 폭에 따라 내용의 폭을 조절하고 레이아웃을 배치하는 컴포넌트입니다.

```jsx
import { Container } from 'tami-layout-component';
```

### Props

| props            | value                  | description                                                        |
| ---------------- | ---------------------- | ------------------------------------------------------------------ |
| minWidth?        | string                 | Container의 min-width값입니다.                                     |
| maxWidth?        | string                 | Container의 max-width값입니다. (default 100%)                      |
| padding?         | string number          | Container의 padding값입니다.                                       |
| centerContent?   | boolean                | Container의 자식 컴포넌트들의 중앙정렬 여부입니다. (default false) |
| backgroundColor? | CSSProperties['color'] | Container의 배경색입니다.(default white)                           |
| borderRadius?    | string number          | Container의 border-radius값입니다.                                 |
| children?        | ReactNode              | Container의 자식 컴포넌트입니다.                                   |

### Example

```jsx
<Container maxWidth='600px' backgroundColor='#CCCCCC' centerContent>
  <div>Container</div>
</Container>
```

## Flex

Flex 레이아웃(1차원 정렬)을 생성하기 위한 컴포넌트입니다.

```jsx
import { Flex } from 'tami-layout-component';
```

### Props

| props           | value                           | description                                |
| --------------- | ------------------------------- | ------------------------------------------ |
| width?          | CSSProperties['width']          | Flex의 너비값입니다.                       |
| height?         | CSSProperties['height']         | Flex의 높이값입니다.                       |
| direction?      | CSSProperties['flexDirection']  | Flex의 배치 방향을 정합니다. (default row) |
| justifyContent? | CSSProperties['justifyContent'] | Flex의 중심축 정렬 방식입니다.             |
| alignItems?     | CSSProperties['alignItems']     | Flex의 교차축 정렬 방식입니다.             |
| wrap?           | CSSProperties['flexWrap']       | Flex Item들의 줄바꿈 설정입니다.           |
| gap?            | number                          | Flex Item들 간의 간격입니다.               |
| children?       | ReactNode                       | Flex의 자식 컴포넌트입니다.                |

### Example

```tsx
<Flex direction='column' gap={12} width='300px'>
  <div>Item1</div>
  <div>Item2</div>
</Flex>
```

## Grid

Grid 레이아웃 (2차원 정렬)을 생성하기 위한 컴포넌트입니다.

```jsx
import { Grid } from 'tami-layout-component';
```

### Props

| props    | value                              | description                  |
| -------- | ---------------------------------- | ---------------------------- |
| height?  | string                             | Grid의 높이값 입니다.        |
| areas?   | CSSProperties['gridTemplateAreas'] | Grid의 영역입니다.           |
| rows?    | number                             | Grid의 row 수 입니다.        |
| columns? | number                             | Grid의 column 수 입니다.     |
| gap?     | number                             | Grid Item들 간의 간격입니다. |
| children | ReactNode                          | Grid의 자식 컴포넌트입니다.  |

### Example

```tsx
<Grid columns={4} gap={12}>
  <GridItem backgroundColor='#FFEC99'>Item 1</GridItem>
  <GridItem backgroundColor='#FFEC99'>Item 2</GridItem>
  <GridItem backgroundColor='#FFEC99'>Item 3</GridItem>
  <GridItem backgroundColor='#FFEC99'>Item 4</GridItem>
</Grid>
```

## Grid Item

Grid의 자식 컴포넌트입니다.

```jsx
import { GridItem } from 'tami-layout-component';
```

### Props

| props            | value                     | description                              |
| ---------------- | ------------------------- | ---------------------------------------- |
| width?           | string number             | GridItem의 너비값입니다.                 |
| height?          | string number             | GridItem의 높이값입니다.                 |
| area?            | CSSProperties['gridArea'] | GridItem의 영역을 정의합니다.            |
| row?             | number 'auto'             | GridItem의 row 값 입니다.                |
| col?             | number 'auto'             | GridItem의 column 값 입니다.             |
| rowStart?        | number 'auto'             | GridItem의 row가 시작하는 위치입니다.    |
| rowEnd?          | number 'auto'             | GridItem의 row가 끝나는 위치입니다.      |
| colStart?        | number 'auto'             | GridItem의 column이 시작하는 위치입니다. |
| colEnd?          | number 'auto'             | GridItem의 column이 끝나는 위치입니다.   |
| backgroundColor? | CSSProperties['color']    | GridItem의 배경색입니다.                 |
| children?        | ReactNode                 | GridItem의 자식 컴포넌트입니다.          |

### Example

```tsx
<GridItem col={2} backgroundColor='#D8EAFF' />
```

## Drawer

화면의 한 쪽에서 열고 닫을 수 있는 컴포넌트입니다.

```jsx
import { Drawer } from 'tami-layout-component';
```

### Props

| props      | value                    | description                                |
| ---------- | ------------------------ | ------------------------------------------ |
| isOpen     | booelan                  | Drawer가 열렸는지 여부입니다.              |
| width?     | ()=> void                | Drawer을 닫는 함수입니다.                  |
| direction? | left, right, top, bottom | Drawer가 열리는 방향입니다. (default left) |

### Example

```tsx
const [isOpen, setIsOpen] = useState(false);
const handleDrawerClose = () => {
  setIsOpen(!isOpen);
};

return (
  <>
    <Drawer isOpen={isOpen} handleDrawerClose={handleDrawerClose}>
      <div>children</div>
    </Drawer>
  </>
);
```
