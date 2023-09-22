# 🙆‍♂️ react-layout-component-pat 🙆‍♂️

간단하게 레이아웃(Container, Flex, Grid)를 구현할 수 있는 라이브러리 입니다.

## 설치 방법

    # using npm
    $ npm install react-layout-component-pat

    # using yarn
    $ yarn add react-layout-component-pat

## 중요 컴포넌트

```typescript
import { Container, Flex, Grid } from 'react-layout-component-pat'
```

## 사용 방법

## Container

```typescript
import { Container } from 'react-layout-component-pat'

const App = () => {
  return (
    <Container minWidth={600} maxWidth={960}>
      ...
    </Container>
  )
}
```

### number값이 들어가는 속성
- width, height 관련 속성
- padding, margin 개별 값 관련 속성(ex. paddingRight, marginLeft)
- 위치 관련 속성
- opacity, zIndex
```typescript
    // 속성값이 number인 경우 단위는 px로 통일되고 사용 방식은 {}안에 값을 넣어주면 된다.
    <Container paddingRight={10} paddingLeft={20}>
      ...
    </Container>

```

### string값이 들어가는 속성
- display, position
- color, backgroundColor, backdropFilter
- overflow, cursor
- padding, margin


## Flex

```typescript
import { Flex } from 'react-layout-component-pat'

const App = () => {
  return (
    <Flex direction="column" justify="center" align="center" gap={4}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
      <div>Item 6</div>
    </Flex>
  )
}
```
### number값이 들어가는 속성
- flexBasis, flexGrow, flexShrink, gap 관련 속성
```typescript
    // 속성값이 number인 경우 {}안에 값을 넣어주면 된다.
    <Flex flexBasis={2} gap={3}>
      ...
    </Flex>
```
### string값이 들어가는 속성
- direction, flexWrap, justify, align


## Grid

```typescript
import { Grid } from 'react-layout-component-pat'

const App = () => {
  return (
    <Grid rows={2} columns={3} gap={4}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
      <div>Item 6</div>
    </Grid>
  )
}
```

### number값이 들어가는 속성
- gridTemplateAreas, rows, columns, gap 관련 속성

### string값이 들어가는 속성
- justifyItems, alignContent, justifySelf, alignSelf



## 참고 배포 링크
https://650793db3827905a5d403040-rlioqyjnii.chromatic.com


## 참고 사항(고려한 부분 및 사용자 사용팁)
범용성을 고려하였습니다. Container에는 최대한 사용자에게 선택권을 주기 위해 있으면 편하겠다 싶은 속성들(cursor, opacity, padding-right, margin-top 등)도 넣어주었습니다.

통일성을 고려하였습니다. css에는 다양한 단위(px, em 등)이 있지만 사용자에게 혼란을 주지 않기 위해서 단위를 px로 통일 하였습니다. 또한 속성 이름을 단어가 '-'로 구분될 경우 두 번째 단어의 첫 글자를 대문자로 바꾸고 합치는 규칙(ex. border-top -> borderTop)을 이용해 지었습니다.

각각 속성의 특징을 고려해 뺄건 뺐습니다. 하나의 예로 justify-items나 align-content는 grid에서 주로 쓰이는 정렬 방식으로 flex에서는 뺐습니다. 이를 통해 조금 더 일관된 작업을 수행할 수 있도록 만들었습니다.

## 개발 환경
- React(vite)
- TypeScript
- styled-components

### Thank you. Have a good day! 😄
