# layout-component-dahyeeee

재사용 가능한 기본 레이아웃 리액트 컴포넌트를 모아놓은 라이브러리
<br>
<br>
<br>

# installing

`npm i @layout-component-dahyeeee`
<br>
<br>
<br>

# Components

## Container

해당 요소를 부모의 가로 중앙에 배치시키는 컴포넌트

### imports

```typescript
import { Container } from '@layout-component-dahyeeee';
```

### Props

| props    | value            | default | description                         |
| -------- | ---------------- | ------- | ----------------------------------- |
| maxWidth | number \| string | 100vw   | 요소의 최대 너비를 정할 수 있습니다 |
| minWidth | number \| string | 100px   | 요소의 최소 너비를 정할 수 있습니다 |
| as       | HTML Element     | div     | 요소의 HTML Tag를 정할 수 있습니다  |

## Grid

자식 컴포넌트들을 격자 형태로 배열하는 컴포넌트

### imports

```typescript
import { Grid } from '@layout-component-dahyeeee';
```

### Props

| props  | value        | default | description                                      |
| ------ | ------------ | ------- | ------------------------------------------------ |
| row    | number       | 2       | 수직축에 몇개의 요소를 나열할지 정할 수 있습니다 |
| column | number       | 2       | 수평축에 몇개의 요소를 나열할지 정할 수 있습니다 |
| gap    | string       | 10px    | 자식 요소 사이의 간격을 정할 수 있습니다         |
| as     | HTML Element | div     | 요소의 HTML Tag를 정할 수 있습니다               |

## Flex

CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트

### imports

```typescript
import { Flex } from '@layout-component-dahyeeee';
```

### Props

| props   | value                                                                                                                                                                            | default | description                                     |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ----------------------------------------------- |
| dir     | row \| column \| row-reverse \| column-reverse                                                                                                                                   | row     | 요소의 최대 너비를 정할 수 있습니다             |
| align   | normal \| stretch \| center \| start \| end \|flex-start \| flex-end \| self-start \| self-end \| baseline \| inherit \| initial \| unset                                        | center  | 모달이 화면에 나타남의 유무를 정할 수 있습니다. |
| justify | center \| start \| flex-start \| end \| flex-end \| left \| right \| normal \| space-between \| space-around \| space-evenly \| stretch \| inherit \| initial \| revert \| unset | center  | 자식요소의                                      |
| gap     | string                                                                                                                                                                           | 10px    | 자식요소들 간 간격을 정할 수 있습니다           |
| as      | HTML Element                                                                                                                                                                     | div     | 요소의 HTML Tag를 정할 수 있습니다              |

# Example Page

컴포넌트들의 사용법과 사용예시를 storybook으로 배포했습니다.
자유롭게 컴포넌트를 경험해보세요!

[링크]
