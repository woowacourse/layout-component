<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/source/skype/289/straight-ruler_1f4cf.png"/>
</p>
<h2 align="middle">React Layout Component</h2>
<br/>

## Installation

### In React App

```bash
# use npm
npm install conan-layout-component
```

## Container

화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃을 만들기 위한 컴포넌트입니다.

### Import

```tsx
import { Container } from 'conan-layout-component';
```

### Props

| props     | type                      | description                                               |
| --------- | ------------------------- | --------------------------------------------------------- |
| as?       | ElementType               | Container 컴포넌트의 태그를 변경합니다.                   |
| minWidth? | CSSProperties['maxWidth'] | Container의 최소 넓이 값입니다.                           |
| maxWidth? | CSSProperties['minWidth'] | Container의 최대 넓이 값입니다.                           |
| style?    | CSSProperties             | 위 스타일 요소를 제외하고 추가적인 스타일링이 가능합니다. |
| children? | ReactNode                 | Container의 자식 컴포넌트입니다.                          |

### Usage

```tsx
<Container minWidth={300} maxWidth={900}>
  <div style={{ backgroundColor: '#81D4FA' }}>Item</div>
</Container>
```

<br>

## Grid

CSS Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 컴포넌트입니다.

### Import

```tsx
import { Grid } from 'conan-layout-component';
```

### Grid Props

| props      | value                      | description                                               |
| ---------- | -------------------------- | --------------------------------------------------------- |
| as?        | ElementType                | Grid 컴포넌트의 태그를 변경합니다.                        |
| rows?      | number                     | Grid row의 갯수를 지정합니다.                             |
| columns?   | number                     | Grid column의 갯수를 지정합니다.                          |
| rowGap?    | CSSProperties['rowGap']    | Grid의 row 간의 간격을 지정합니다.                        |
| columnGap? | CSSProperties['columnGap'] | Grid의 column 간의 간격을 지정합니다.                     |
| gap?       | CSSProperties['gap']       | Grid 아이템들의 간격을 지정합니다.                        |
| style?     | CSSProperties              | 위 스타일 요소를 제외하고 추가적인 스타일링이 가능합니다. |
| children?  | ReactNode                  | Grid의 자식 컴포넌트입니다.                               |

### Usage

```tsx
<Grid rows={2} columns={4} gap={20}>
  <div style={{ backgroundColor: '#81D4FA' }}>Item 1</div>
  <div style={{ backgroundColor: '#4FC3F7' }}>Item 2</div>
  <div style={{ backgroundColor: '#29B6F6' }}>Item 3</div>
  <div style={{ backgroundColor: '#03A9F4' }}>Item 4</div>
  <div style={{ backgroundColor: '#039BE5' }}>Item 5</div>
  <div style={{ backgroundColor: '#0288D1' }}>Item 6</div>
  <div style={{ backgroundColor: '#0277BD' }}>Item 7</div>
  <div style={{ backgroundColor: '#01579B' }}>Item 8</div>
</Grid>
```

<br>

## Flex

CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트입니다.

### Import

```tsx
import { Container } from 'conan-layout-component';
```

### Flex Props

| props      | value                           | description                                               |
| ---------- | ------------------------------- | --------------------------------------------------------- |
| as?        | string                          | Flex 컴포넌트의 태그를 변경합니다.                        |
| direction? | CSSProperties['flexDirection']  | Flex의 방향을 지정합니다.                                 |
| wrap?      | CSSProperties['flexWrap']       | Flex 아이템들의 묶음(줄 바꿈)을 지정합니다.               |
| justify?   | CSSProperties['justifyContent'] | Flex direction의 수평축 정렬을 지정합니다.                |
| align?     | CSSProperties['alignItems']     | Flex direction의 수직축 정렬을 지정합니다.                |
| gap?       | CSSProperties['gap']            | Flex 아이템들의 간격을 지정합니다.                        |
| style?     | CSSProperties                   | 위 스타일 요소를 제외하고 추가적인 스타일링이 가능합니다. |
| children?  | ReactNode                       | Flex의 자식 컴포넌트입니다.                               |

### Usage

```tsx
<Flex direction="column" gap={10}>
  <div style={{ backgroundColor: '#81D4FA' }}>Item 1</div>
  <div style={{ backgroundColor: '#4FC3F7' }}>Item 2</div>
  <div style={{ backgroundColor: '#29B6F6' }}>Item 3</div>
  <div style={{ backgroundColor: '#03A9F4' }}>Item 4</div>
  <div style={{ backgroundColor: '#039BE5' }}>Item 5</div>
  <div style={{ backgroundColor: '#0288D1' }}>Item 6</div>
  <div style={{ backgroundColor: '#0277BD' }}>Item 7</div>
  <div style={{ backgroundColor: '#01579B' }}>Item 8</div>
</Flex>
```

## Drawer

화면의 한쪽에서 슬라이드 형태로 나타나는 메뉴나 사이드바를 제공하는 컴포넌트입니다.

### Import

```tsx
import { Drawer, useModal } from 'conan-layout-component';
```

### useModal

| prop         | value   | description                           |
| ------------ | ------- | ------------------------------------- |
| defaultOpen? | boolean | 모달의 열림/닫힘에 대한 기본값입니다. |

| return     | value      | description                                                                    |
| ---------- | ---------- | ------------------------------------------------------------------------------ |
| isOpen     | boolean    | 모달의 열림/닫힘에 대한 값입니다. 해당 값을 이용해 모달을 조건부 렌더링합니다. |
| openModal  | () => void | 모달을 여는 함수입니다.                                                        |
| closeModal | () => void | 모달을 닫는 함수입니다.                                                        |

```ts
const { isOpen, openModal, closeModal } = useModal();
```

### Drawer Props

| props     | value                                  | description                                 |
| --------- | -------------------------------------- | ------------------------------------------- |
| placement | 'left' \| 'right' \| 'top' \| 'bottom' | Drawer 컴포넌트의 위치를 지정합니다.        |
| onClose   | () => void                             | Drawer 컴포넌트를 닫는 함수를 주입받습니다. |
| children? | ReactNode                              | Drawer의 자식 컴포넌트입니다.               |

### Usage

```tsx
const App = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button type="button" onClick={openModal}>
        Drawer 열기
      </button>
      {isOpen && (
        <Drawer placement="left" onClose={closeModal}>
          <div style={{ width: '20vw', height: '100vh', backgroundColor: '#81D4FA' }}>Contents</div>
        </Drawer>
      )}
    </>
  );
};
```
