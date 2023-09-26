## 🎯 1단계 - 기본 레이아웃 컴포넌트 만들기

### 1. Container 컴포넌트

- 목적: 화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃을 구현합니다.

- 요구사항:
- [x] minWidth, maxWidth 속성을 통해 폭을 조절할 수 있어야 합니다.

```// 예시 코드
<Container minWidth={600} maxWidth={960}>
  <div>Content</div>
</Container>
```

### 2. Grid 컴포넌트

- 목적: CSS Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 컴포넌트를 만듭니다.

- 요구사항:
- [x] rows, columns 속성을 통해 격자의 형태를 지정할 수 있어야 합니다.
- [x] 자식 컴포넌트 간의 간격을 조절할 수 있는 기능을 제공해야 합니다.

```// 예시 코드
<Grid rows={3} columns={3} gap={10}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

### 3. Flex 컴포넌트

- 목적: CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트를 만듭니다.

- 요구사항:
- [x] direction, justify, align 속성을 통해 배열 방향과 정렬을 조절할 수 있어야 합니다.
- [x] 자식 컴포넌트 간의 간격을 조절할 수 있는 기능을 제공해야 합니다.

```// 예시 코드
<Flex direction="row" justify="center" align="center" gap={5}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
```

## 🎯 2단계 - 고급 레이아웃 컴포넌트 만들기

## TabLayout Components 요구사항

- [ ] 탭을 클릭하면 해당 탭의 content만을 보여준다.

  - [ ] 탭을 클릭하면 해당 탭을 선택했다는 것을 알 수 있는 UI를 제공한다.

- [ ] 탭의 순서와 이름을 설정할 수 있어야 한다.

- [ ] 탭이 화면 너비보다 길어지면 가로 스크롤이 생겨 이동할 수 있다.
