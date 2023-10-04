# @suyoungj/react-layout-component

- React에서 사용할 수 있는 레이아웃 컴포넌트를 제공하는 라이브러리입니다.
- [npm](https://www.npmjs.com/package/@suyoungj/react-layout-component?activeTab=code)
- [Docs](https://react-layout-component-documentation.vercel.app/)

## 설치

```bash
# npm
npm i @suyoungj/react-layout-component

#yarn
yarn add @suyoungj/react-layout-component
```

# Layout

## Container

- 화면의 폭에 따라 컨텐츠의 최대 폭을 제한하고, 중앙에 배치합니다.
- `minWidth, maxWidth` 프로퍼티로 너비를 조절할 수 있습니다.

```tsx
<Container minWidth={300} maxWidth={960}>
  <div>Content</div>
</Container>
```

## Flex

- CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트입니다.
- direction, justify, align 프로퍼티로 통해 배열 방향과 정렬을 조절할 수 있습니다.
- `gap` 속성을 통해 자식 컴포넌트 간의 간격을 조절할 수 있습니다.

```tsx
<Flex direction="row" justify="center" align="center" gap={5}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Flex>
```

## Grid

- `rows, columns` 속성을 통해 격자의 형태를 지정할 수 있습니다.
- `gap` 속성을 통해 자식 컴포넌트 간의 간격을 조절할 수 있습니다.

```tsx
<Grid rows={3} columns={3} gap={10}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
  <div>Content 4</div>
  <div>Content 5</div>
  <div>Content 6</div>
  <div>Content 7</div>
  <div>Content 8</div>
  <div>Content 9</div>
</Grid>
```

# Overlay

## Drawer

- Drawer는 화면 가장자리에서 슬라이드되는 패널입니다.
- 사용자가 현재 페이지를 벗어나지 않고 작업하거나 세부 정보를 확인해야 할 때 유용합니다.

```tsx
() => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(() => false);
  };

  return (
    <Drawer isOpen={isOpen} onClose={handleClose}>
      <h1>Drawer</h1>
    </Drawer>
  );
};
```
