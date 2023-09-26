## Layout Component 라이브러리

- 공통 레이아웃을 위한 컴포넌트를 제공하는 라이브러리입니다.

### 설치 방법

```
npm i ain-layout-component
```

### Container Component

화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃 컴포넌트입니다.

- Container 컴포넌트에서 min-width: children 최소 너비 지정, max-width: children 최대 너비 지정으로 추가

```tsx
// Usage
<Container minWidth={600} maxWidth={960}>
  <div>Content</div>
</Container>
```

### Grid Component

CSS Grid의 2차원 레이아웃 시스템을 사용해 해당 자식 컴포넌트들을 격자 배열을 구현하는 컴포넌트입니다.

- rows, columns에 props 전달로 격자 배열를 지정
- 자식 컴포넌트 간의 간격을 조절할 수 있는 기능을 제공

```tsx
// Usage
<Grid rows={6} columns={6} gap={10}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</Grid>
```

### FlexBox 컴포넌트

CSS Flex를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트입니다.

- direction, justify, align 속성을 통해 배열 방향과 정렬을 조절
- 자식 컴포넌트 간의 간격을 조절할 수 있는 기능 제공

```tsx
// Usage
<FlexBox direction="row" justify="center" align="center" gap={5}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</FlexBox>
```

## TabLayout 컴포넌트 라이브러리

- TabLayout 컴포넌트는 사용자가 선택한 탭에 따라 특정 패널을 보여주는 컴포넌트입니다
- The TabLayout component is a component that displays a specific panel based on the tab selected by the user

필요한 기본 기능만 제공하고 사용자에게 스타일링에 대한 자유와 직관적이고 쉬운 개발 경험을 제공합니다.
