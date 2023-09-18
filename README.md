# 우코 레이아웃 컴포넌트

Container, Flex, Grid와 같은 레이아웃을 담당하는 컴포넌트가 포함되어 있습니다. 해단 라이브러리는 styled-component에 의존하고 있습니다. styled-component를 함께 설치해주세요.

## 설치

```bash
npm install styled-components
npm install ukko-layout-component
```

혹은

```bash
yarn add styled-components
yarn add ukko-layout-component
```

### 사용

#### 레이아웃 컴포넌트 공통 속성

다음은 아래 공통적으로 포함된 선택 속성입니다.

- width: (선택사항) 레이아웃 컨테이너의 폭
- height: (선택사항) 레이아웃 컨테이너의 높이
- padding: (선택사항) 레이아웃 컨테이너의 패딩값
- margin: (선택사항) 레이아웃 컨테이너의 마진값
- background-color: (선택사항) 레이아웃 컨테이너의 배경 색. 기본값은 투명입니다.

#### 1. Container

- backgroundColor: (선택사항) 컨테이너의 배경 색상.
- minWidth: (선택사항) 컨테이너의 최소 폭.
- maxWidth: (선택사항) 컨테이너의 최대 폭.

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
