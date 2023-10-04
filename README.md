## Layout 라이브러리

간단하게 레이아웃을 구현할 수 있는 라이브러리 입니다. `Container`, `Grid`, `FlexBox` 컴포넌트로 구성되어 있습니다.

설치 방법

```
npm i @kyw0716/layout
```

or

```
yarn add @kyw0716/layout
```

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

## FlexBox 컴포넌트

CSS FlexBox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트입니다.

- direction, justify, align 속성을 통해 배열 방향과 정렬을 조절할 수 있습니다.
- 자식 컴포넌트 간의 간격을 조절할 수 있는 기능을 제공합니다.

```tsx
// 사용 예시
<FlexBox direction="row" justify="center" align="center" gap={5}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</FlexBox>
```

<br>
<br>

## Drawer 컴포넌트

화면의 한쪽에서 슬라이드 형태로 나타나는 메뉴나 사이드바를 제공하는 컴포넌트입니다.

- `drawerStore.openDrawer`를 통해 drawer를 열 수 있습니다.
  - `drawerStore.openDrawer`의 첫 번째 인자는 drawer로 열기를 희망하는 컴포넌트 입니다. (type: ReactNode)
  - `drawerStore.openDrawer`의 두 번째 인자는 drawer가 열리는 위치입니다. (type: 'left' | 'right' | 'top' | 'bottom')
- `drawerStore.closeDrawer`를 통해 drawer를 닫을 수 있습니다.

```tsx
// 사용 예시

// DrawerContainer가 리액트 어플리케이션 상에 포함(렌더링)되어있어야 합니다.
<DrawerContainer />;

// drawer로 열기를 희망하는 컴포넌트를 첫 번째 인자로, 열리는 위치를 두 번째 인자로 전달합니다.
drawerStore.openDrawer(<div>안녕하세용</div>, 'left');

// drawer를 닫고 싶다면 다음 메서드를 호출합니다.
drawerStore.closeDrawer();
```
