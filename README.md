# Chex's Layout Component 👀

재사용 가능한 기본 레이아웃 컴포넌트를 모아놓은 라이브러리입니다.

> - Container
> - Grid
> - Flex

## Installation

### npm

```
npm install chex-layout-component
```

### yarn

```
yarn add chex-layout-component
```

## Container

내용의 최소, 최대 폭을 제한하고 중앙에 배치할 수 있는 컴포넌트

### Import

```typescript
import { Container } from 'chex-layout-component';
```

### Props

| Props           | Type                             | Default       | Description                                         |
| --------------- | -------------------------------- | ------------- | --------------------------------------------------- |
| tag             | keyof JSX.IntrinsicElements      | 'div'         | 컴포넌트의 HTML 태그를 지정하는 속성입니다.         |
| minWidth        | string                           | 'auto'        | 컴포넌트의 최소 너비를 지정하는 속성입니다.         |
| maxWidth        | string                           | 'none'        | 컴포넌트의 최대 너비를 지정하는 속성입니다.         |
| minHeight       | string                           | 'auto'        | 컴포넌트의 최소 높이를 지정하는 속성입니다.         |
| maxHeight       | string                           | 'none'        | 컴포넌트의 최대 높이를 지정하는 속성입니다.         |
| backgroundColor | CSSProperties['backgroundColor'] | 'transparent' | 컴포넌트의 배경색상을 지정하는 속성입니다.          |
| css             | CSSProp                          | ''            | 컨테이너에 적용할 CSS 스타일을 설정하는 속성입니다. |

## Grid

자식 컴포넌트들을 격자 형태로 배열하는 컴포넌트

### Import

```typescript
import { Grid } from 'chex-layout-component';
```

### Props

| Props       | Type                        | Default | Description                                         |
| ----------- | --------------------------- | ------- | --------------------------------------------------- |
| tag         | keyof JSX.IntrinsicElements | 'div'   | 컴포넌트의 HTML 태그를 지정하는 속성입니다.         |
| rows        | number                      | ''      | 행 개수를 지정하는 속성입니다.                      |
| columns     | number                      | ''      | 열 개수를 지정하는 속성입니다.                      |
| autoRows    | string                      | ''      | 자동으로 생성되는 행의 크기를 지정하는 속성입니다.  |
| autoColumns | string                      | ''      | 자동으로 생성되는 열의 크기를 지정하는 속성입니다.  |
| areas       | string                      | ''      | 그리드 아이템의 배치를 지정하는 속성입니다.         |
| gap         | string                      | '0'     | 그리드 아이템 사이의 간격을 지정하는 속성입니다.    |
| rowGap      | string                      | '0'     | 그리드 아이템의 행 간격을 지정하는 속성입니다.      |
| columnGap   | string                      | '0'     | 그리드 아이템의 열 간격을 지정하는 속성입니다.      |
| css         | CSSProp                     | ''      | 컨테이너에 적용할 CSS 스타일을 설정하는 속성입니다. |

## Flex

CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트

### Import

```typescript
import { Flex } from 'chex-layout-component';
```

### Props

| Props     | Type                                                                                          | Default      | Description                                                                                             |
| --------- | --------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------- |
| tag       | keyof JSX.IntrinsicElements                                                                   | 'div'        | 컴포넌트의 HTML 태그를 지정하는 속성입니다.                                                             |
| display   | 'flex' \| 'inline-flex'                                                                       | 'flex'       | 컨테이너의 표시 방식을 지정하는 속성입니다. 'flex'는 블록요소, 'inline-flex'는 인라인요소로 설정합니다. |
| direction | 'row' \| 'column' \| 'row-reverse' \| 'column-reverse'                                        | 'row'        | 컨테이너의 주축(main axis)을 설정하는 속성입니다.                                                       |
| justify   | 'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly' | 'flex-start' | 주축(main axis)의 정렬 방법을 설정하는 속성입니다.                                                      |
| align     | 'flex-start' \| 'flex-end' \| 'center' \| 'stretch'                                           | 'none'       | 교차축(cross axis)의 정렬 방법을 설정하는 속성입니다.                                                   |
| gap       | string                                                                                        | '0'          | Flex 아이템 사이의 간격을 지정하는 속성입니다.                                                          |
| wrap      | 'nowrap' \| 'wrap' \| 'wrap-reverse'                                                          | 'nowrap'     | Flex 아이템이 한 줄에 나타날지 여러 줄로 나타날지를 결정하는 속성입니다.                                |
| css       | CSSProp                                                                                       | ''           | 컨테이너에 적용할 CSS 스타일을 설정하는 속성입니다.                                                     |

## Development Environment

- React
- TypeScript
- Styled-components
- Vite

## [Storybook](https://6505550eb343f2286f179ae2-huchuaarep.chromatic.com/)

Storybook에서 자유롭게 컴포넌트를 경험해보세요!
