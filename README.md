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

| props     | type        | description                             |
| --------- | ----------- | --------------------------------------- |
| as?       | ElementType | Container 컴포넌트의 태그를 변경합니다. |
| minWidth? | number      | Container의 최소 넓이 값입니다.         |
| maxWidth? | number      | Container의 최대 넓이 값입니다.         |
| children  | ReactNode   | Container의 자식 컴포넌트입니다.        |

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

| props      | value       | description                           |
| ---------- | ----------- | ------------------------------------- |
| as?        | ElementType | Grid 컴포넌트의 태그를 변경합니다.    |
| rows?      | number      | Grid row의 갯수를 지정합니다.         |
| columns?   | number      | Grid column의 갯수를 지정합니다.      |
| rowGap?    | number      | Grid의 row 간의 간격을 지정합니다.    |
| columnGap? | number      | Grid의 column 간의 간격을 지정합니다. |
| gap?       | number      | Grid 아이템들의 간격을 지정합니다.    |
| children   | ReactNode   | Grid의 자식 컴포넌트입니다.           |

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
import { Flex } from 'layout-component-hp';
```

### Anatomy

- Flex: CSS Flexbox를 지정한 컨테이너
- Flex.Item: Flex 내 각 아이템 컨테이너

### Flex Props

| props      | value     | description                                 |
| ---------- | --------- | ------------------------------------------- |
| as?        | string    | Flex 컴포넌트의 태그를 변경합니다.          |
| direction? | string    | Flex의 방향을 지정합니다.                   |
| wrap?      | string    | Flex 아이템들의 묶음(줄 바꿈)을 지정합니다. |
| justify?   | string    | Flex direction의 수평축 정렬을 지정합니다.  |
| align?     | string    | Flex direction의 수직축 정렬을 지정합니다.  |
| gap        | number    | Flex 아이템들의 간격을 지정합니다.          |
| children   | ReactNode | Flex의 자식 컴포넌트입니다.                 |

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
