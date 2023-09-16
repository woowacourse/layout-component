# @d0dam/react-ui

## 1. Container 컴포넌트

- 화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃을 구현합니다.
- minWidth, maxWidth 속성을 통해 폭을 조절할 수 있습니다.
- tag 속성을 통해 tag를 변경 할 수 있습니다.
  - default tag는 div입니다.

```html
<Container minWidth="{600}" maxWidth="{960}" tag="main">
  <div>Content</div>
</Container>
```

## 2. Grid 컴포넌트

- CSS Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 컴포넌트를 만듭니다.
- rows, columns 속성을 통해 격자의 형태를 지정할 수 있습니다.
- gap 속성을 통해 자식 컴포넌트 간의 간격을 조절할 수 있습니다.
  - `number` 혹은 `{ row: number, column: number }` 타입 형태로 속성을 설정 할 수 있습니다.

```html
<Grid rows="{3}" columns="{3}" gap="{10}">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

## 3. Flex 컴포넌트

- CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트를 만듭니다.
- direction, justify, align 속성을 통해 배열 방향과 정렬을 조절할 수 있습니다.
- gap 속성을 통해 자식 컴포넌트 간의 간격을 조절할 수 있습니다.

```html
<Flex direction="row" justify="center" align="center" gap="{5}">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
```
