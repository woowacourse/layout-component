## Container 컴포넌트

화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃 컴포넌트 입니다.

- minWidth, maxWidth 속성을 통해 폭을 조절할 수 있습니다.

```tsx
// 사용 예시
<Container minWidth={600} maxWidth={960}>
  <div>Content</div>
</Container>
```

<br>
<br>

## Grid 컴포넌트

CSS Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 컴포넌트입니다.

- rows, columns 속성을 통해 격자의 형태를 지정할 수 있습니다.
- 자식 컴포넌트 간의 간격을 조절할 수 있는 기능을 제공합니다.

```tsx
// 사용 예시
<Grid rows={3} columns={3} gap={10}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

<br>
<br>

## Flex 컴포넌트

CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트입니다.

- direction, justify, align 속성을 통해 배열 방향과 정렬을 조절할 수 있습니다.
- 자식 컴포넌트 간의 간격을 조절할 수 있는 기능을 제공합니다.

```tsx
// 사용 예시
<Flex direction="row" justify="center" align="center" gap={5}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
```
