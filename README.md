# 우코 레이아웃 컴포넌트

Container, Flex, Grid와 같은 레이아웃을 담당하는 컴포넌트가 포함되어 있습니다.

## 설치

```
yarn add ukko-layout-component
```

혹은

```bash
npm install ukko-layout-component
```

### 사용

#### 레이아웃 컴포넌트 공통 속성

다음은 아래 공통적으로 포함된 선택 속성입니다.

- width: (선택사항) 레이아웃 컨테이너의 폭. number와 string 타입을 받습니다. number의 경우 px단위로 적용되며 string의 경우 그대로 스타일 적용이 됩니다.
- height: (선택사항) 레이아웃 컨테이너의 높이. number와 string 타입을 받습니다. number의 경우 px단위로 적용되며 string의 경우 그대로 스타일 적용이 됩니다.
- padding: (선택사항) 레이아웃 컨테이너의 패딩값
- margin: (선택사항) 레이아웃 컨테이너의 마진값
- bccolor: (선택사항) 레이아웃 컨테이너의 배경 색. 기본값은 투명입니다.

#### 1. Container

- $minWidth: (선택사항) 컨테이너의 최소 폭.
- $maxWidth: (선택사항) 컨테이너의 최대 폭.

```jsx
import Container from './컴포넌트-경로';

function MyComponent() {
  return <Container backgroundColor="red">내용입니다</Container>;
}
```

#### 2. Flex

- direction: (선택사항) flex 컨테이너 내 아이템의 방향. 가능한 값: 'row', 'row-reverse', 'column', 'column-reverse'.
- justify: (선택사항) 자식 아이템을 수평으로 정렬하는 방법. 가능한 값: 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'.
- align: (선택사항) 자식 아이템을 수직으로 정렬하는 방법. 가능한 값: 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'.
- gap: (선택사항) flex 아이템 사이의 간격(픽셀).

```jsx
function MyComponent() {
  return (
    <Flex direction="row" justify="center">
      <div>아이템 1</div>
      <div>아이템 2</div>
    </Flex>
  );
}
```

#### 3. Grid

- rows: 그리드의 행 수.
- columns: 그리드의 열 수.
- gap: (선택사항) 그리드 아이템 사이의 간격(픽셀).

```jsx
function MyComponent() {
  return (
    <Grid rows={2} columns={2} gap={10}>
      <div>아이템 1</div>
      <div>아이템 2</div>
      <div>아이템 3</div>
      <div>아이템 4</div>
    </Grid>
  );
}
```

#### 4. Split pane

- defaultSize (optional): primary pane의 최초 사이즈를 결정합니다. %값은 string("50%")으로, 픽셀 값은 number(300)으로 입력합니다. 기본값은 "50%"입니다.
- minSize (optional): primary pane의 최대 사이즈를 결정합니다. %값은 string("50%")으로, 픽셀 값은 number(300)으로 입력합니다. 기본값은 "20%"입니다.
- maxSize (optional): primary pane의 최소 사이즈를 결정합니다. %값은 string("50%")으로, 픽셀 값은 number(300)으로 입력합니다. 기본값은 "20%"입니다.
- children: react 노드를 입력합니다. 2개의 노드를 입력해야 합니다.

##### 주의할 점

- `SplitPane`의 컴포넌트에 자식 노드는 2개여야만 합니다. 2개 이상이거나 2개 이하일 경우 예상과 다르게 작용할 수 있습니다.
- Horizontal Only 입니다. 수직 분할은 불가능합니다.
