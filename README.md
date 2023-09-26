<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/source/skype/289/straight-ruler_1f4cf.png"/>
</p>
<h2 align="middle">누구나 사용할 수 있는 레이아웃 컴포넌트</h2>
<p align="middle">우아한테크코스 5기 프론트엔드 쿠마</p>
<br/>

# layout-component  &middot; [![NPM Version](https://img.shields.io/npm/v/@yogjin/layout-component)](https://www.npmjs.com/package/@yogjin/layout-component) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yogjin/layout-component/blob/main/LICENSE)
`@yogjin/layout-component` 는 `Grid`, `FlexBox`와 같이 간단한 레이아웃 컴포넌트들을 모은 라이브러리입니다.

이 라이브러리는 내부적으로 [styled-components](https://github.com/styled-components/styled-components)를 이용하기 때문에, styled-components를 이용하고 있는 프로젝트에 적합합니다.
## 설치
`@yogjin/layout-component`는 [npm](https://www.npmjs.com/package/@yogjin/layout-component)에 배포되어 있습니다.

다음 명령어를 통해 최신 버전을 설치할 수 있습니다.

```sh
npm i @yogjin/layout-component
```
[yarn](https://yarnpkg.com/getting-started/usage)을 사용하신다면:
```sh
yarn add @yogjin/layout-component
```

## 사용법

`@yogjin/layout-component`은 다음 컴포넌트들을 제공합니다.

- `Container`
- `Grid`
- `Flex`

컴포넌트의 Props은 [csstype](https://github.com/frenic/csstype/blob/master/index.d.ts)(`styled-components`의 `CSSProperties`타입)을 이용합니다.
즉 기본적으로 타입을 따로 선언하지 않은 컴포넌트의 `Props`은 [mdn](https://developer.mozilla.org/en-US/)에 각 속성별로 정의된 모든 값을 넣을 수 있습니다.

하지만 `Grid`의 `rows`와 `columns`같이 특정 타입(`number`)이 선언된 경우 해당 타입만 넣을 수 있습니다.

### Container
화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃
화면은 수평 중앙정렬(`margin: auto`)입니다. 
#### Props

| 속성 | 타입 | 기본값  |
| --- | --- | --- |
| minWidth? | https://developer.mozilla.org/en-US/docs/Web/CSS/min-width#values | - |
| maxWidth? | https://developer.mozilla.org/en-US/docs/Web/CSS/max-width#values | 100% |

```tsx
import { Container } from '@yogjin/layout-component';

function App() {
  return (
    <Container minWidth="100px" maxWidth="1000px">내용</Container>
  );
}

export default App;

```
### Grid
CSS Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 컴포넌트

`rows`와 `columns` 에 숫자를 넣어서 각 행과 열의 개수를 정할 수 있습니다.

#### Props

| 속성 | 타입 | 기본값  |
| --- | --- | --- |
| rows | number | - |
| columns | number | - |
| gap? | https://developer.mozilla.org/en-US/docs/Web/CSS/gap#values | - |

```tsx
import { Container } from '@yogjin/layout-component';

function App() {
  return (
    // 3 x 3 격자로 배열
    <Grid rows={3} columns={3} gap="10px">
      <div>item</div>
      <div>item</div>
      <div>item</div>
      <div>item</div>
      <div>item</div>
      <div>item</div>
      <div>item</div>
      <div>item</div>
      <div>item</div>
    </Grid>
  );
}

export default App;
```

### Flex
CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트

#### Props

| 속성 | 타입 | 기본값  |
| --- | --- | --- |
| direction? | https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction#values | row |
| justify? | https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content#values | center |
| align? | https://developer.mozilla.org/en-US/docs/Web/CSS/align-items#values | center |
| gap? | https://developer.mozilla.org/en-US/docs/Web/CSS/gap#values | - |


```tsx
import { Container } from '@yogjin/layout-component';

function App() {
  return (
    <Flex direction="column">
      <div>그리드</div>
      <div>그리드</div>
    </Flex>
  );
}

export default App;
```

### Drawer
사이트 내 목적지 또는 계정 전환과 같은 앱 기능에 접근하는 통로를 담는 컴포넌트

#### Props

| 속성 | 타입 | 기본값  |
| --- | --- | --- |
| anchor | `'left', 'right', 'top', 'bottom'` | 'left' |
| open | boolean | false |
| onClose | Function | undefined |


```tsx
import { Container } from '@yogjin/layout-component';

...
const [state, setState] = React.useState({
  top: false,
  left: false,
  bottom: false,
  right: false,
});

const toggleDrawer = (anchor: Anchor, open: boolean) => {
  setState({ ...state, [anchor]: open });
};

const list = (anchor: Anchor) => (
  <Flex direction="column">
    <button onClick={() => toggleDrawer(anchor, false)}>Woowacourse</button>
    <button onClick={() => toggleDrawer(anchor, false)}>Missions</button>
    <button onClick={() => toggleDrawer(anchor, false)}>Settings</button>
  </Flex>
);

return (
  <>
    {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
      <React.Fragment key={anchor}>
        <button onClick={() => toggleDrawer(anchor, true)}>{anchor}</button>
        <Drawer anchor={anchor} open={state[anchor]} onClose={() => toggleDrawer(anchor, false)}>
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    ))}
  </>
);
... 
```

### License
`react-global-state` is MIT licensed

