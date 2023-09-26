## SplitPane

재사용 가능한 SplitPane 컴포넌트입니다.

### Installation

```
npm install ukko-split-pane
```

혹은

```
yarn add ukko-split-pane
```

### 속성

- defaultSize (optional): primary pane의 최초 사이즈를 결정합니다. %값은 string("50%")으로, 픽셀 값은 number(300)으로 입력합니다. 기본값은 "50%"입니다.
- minSize (optional): primary pane의 최대 사이즈를 결정합니다. %값은 string("50%")으로, 픽셀 값은 number(300)으로 입력합니다. 기본값은 "20%"입니다.
- maxSize (optional): primary pane의 최소 사이즈를 결정합니다. %값은 string("50%")으로, 픽셀 값은 number(300)으로 입력합니다. 기본값은 "20%"입니다.
- children: react 노드를 입력합니다. 2개의 노드를 입력해야 합니다.

### 주의할 점

- `SplitPane`의 컴포넌트에 자식 노드는 2개여야만 합니다. 2개 이상이거나 2개 이하일 경우 예상과 다르게 작용할 수 있습니다.
- Horizontal Only 입니다. 수직 분할은 불가능합니다.
