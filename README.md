<img src="https://github.com/wzrabbit/layout-component/assets/87642422/a93f4c66-9a76-4362-beb0-768689e7d97a" width="100%" />

<div align="center">
  <h1>🌙 Amethyst-Layout 🌙</h1>
  <p>
    <strong>Amethyst-Layout is a simple layout library, used in React project with TypeScript.</strong>
  </p>
</div>

## How to install 🛠

Open your terminal, navigate to your project, and enter the following command.

```
npm install amethyst-layout
```

## How to use ✨

You can see the description and example components in our [Storybook page](https://wzrabbit.github.io/layout-component).

## Samples 📦

### Container

> `Container` component is designed to center-align its inner elements, making it particularly useful when placing text content inside this component.

```tsx
import { Container } from 'amethyst-layout';

const App = () => {
  return (
    <Container maxWidth={720} verticalPadding={30} horizontalPadding={10}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      vulputate arcu, nec semper est.
    </Container>
  );
};

export default App;
```

### Flex

> `Flex` component is designed for effortless flex element implementation, typically used in complex and responsive layouts. We recommend using Grid if you want to use fixed layouts.

```tsx
import { Container } from 'amethyst-layout';

const App = () => {
  return (
    <Flex gap={5} justify="center" align="center" wrap="wrap">
      <Item /> {/* Your item components */}
      <Item />
      <Item />
      <Item />
      {/* ...more items */}
    </Flex>
  );
};

export default App;
```

### Grid

> `Grid` component is designed for effortless grid element implementation, typically used in fixed layouts.

```tsx
import { Grid } from 'amethyst-layout';

const App = () => {
  return (
    <Grid rows={3} columns={4} gap={5}>
      <Item /> {/* Your item components */}
      <Item />
      <Item />
      <Item />
      {/* ...more items */}
    </Grid>
  );
};

export default App;
```

### SplitPane

> `SplitPane` component is a component that allows users to adjust the sizes of two or more child components. Use the resize bar to change these sizes. <br />`SplitPane` 컴포넌트는 두 개 이상의 자식 컴포넌트를 사용자가 자유로이 조절할 수 있는 컴포넌트입니다.

<img src="https://github.com/wzrabbit/layout-component/assets/87642422/a5fb57fd-54f1-4da2-a700-8621c23afd8b" width="500px" />

#### Properties

If the property is optional, a `?` will be appended after the name.  
속성이 필수값이 아닌 경우 이름 뒤에 `?` 가 붙습니다.
| Name | Type | Description | Default |
|:-:|:-:|---|:-:|
|defaultRatios|`number[]`|Ratios of the child on first render. The unit of the ratio is %. **Note that sum of the ratios must be 100, and the length of the number array must same with children count**. otherwise it will not work as you expected.<br><br>처음으로 자식 요소들을 랜더링할 때 각 자식 요소가 차지하게 될 비율입니다. 비율의 단위는 %입니다. **반드시 비율의 합은 100이 되어야 하며, 비율의 값의 개수는 자식 요소의 개수와 일치해야 합니다**. 그렇지 않을 경우 컴포넌트가 오작동할 수 있습니다.|-|
|direction?|`'row' \| 'column'`|Alignment direction of children.<br><br>자식 컴포넌트들이 배치되는 방향입니다.|`row`|
|resizerThickness?|`number`| Thickness of the resizers for resizing child components. You can use only `number` type, which means the pixels of thickness.<br/><br/>자식 컴포넌트의 크기를 조절할 수 있는 손잡이의 굵기입니다. `px` 단위만 사용할 수 있습니다.|`15`|
|borderThickness?|`number`|Thickness of the border of the component. You can use only `number` type, which means the pixels of thickness.<br/><br/>윤곽선의 굵기입니다. `px` 단위만 사용할 수 있습니다.|`2`|
|minimumRatio?|`number`|The minimum ratio of the child components. Child components will not shrink below this value.<br/><br/>각 자식 컴포넌트가 가지게 될 최소 크기(비율)입니다. 손잡이를 조절하더라도 최소 크기 미만으로는 줄어들지 않습니다.|`0`|
|maximumRatio?|`number`|The maximum ratio of the child components. Child components will not expand above this value.<br/><br/>각 자식 컴포넌트가 가지게 될 최대 크기(비율)입니다. 손잡이를 조절하더라도 최대 크기보다 늘어나지 않습니다.|`100`|
horizontalMargin?|`${number}px \| ${number}% \| number`|The margins for the left and right sides. Useful when you want to align multiple `SplitPane` components in a horizontal arrangement. You can use the unit of `%`, `px`, or numeric values.<br/><br/>컴포넌트의 좌우 margin을 의미합니다. 여러 개의 `SplitPane` 컴포넌트를 가로로 배치할 때 특히 유용합니다. `%`, `px` 단위의 값을 사용하거나 정수 값을 사용할 수 있습니다.|`0`|
verticalMargin?|`${number}px \| ${number}% \| number`|The margins for the top and bottom sides. Useful when you want to align multiple `SplitPane` components in a vertical arrangement. You can use the unit of `%`, `px`, or numeric values.<br/><br/>컴포넌트의 상하 margin을 의미합니다. 여러 개의 `SplitPane` 컴포넌트를 세로로 배치할 때 특히 유용합니다. `%`, `px` 단위의 값을 사용하거나 정수 값을 사용할 수 있습니다.|`0`|
width?|`${number}px \| ${number}% \| number`|The width of the component. You can use the unit of `%`, `px`, or numeric values.<br/><br/>컴포넌트의 가로 길이입니다. `%`, `px` 단위의 값을 사용하거나 정수 값을 사용할 수 있습니다.|`100%`|
height?|`${number}px \| ${number}% \| number`|The height of the component. You can use the unit of `%`, `px`, or numeric values.<br/><br/>컴포넌트의 세로 길이입니다. `%`, `px` 단위의 값을 사용하거나 정수 값을 사용할 수 있습니다.|`100%`|
themeColor?|`$#{string}`|The theme color of the component. While the `SplitPane`component doesn't directly provide color-related properties, you can use the theme color to define the overall design of the component. If you specify the theme color, the appropriate design will be automatically applied. You can use Hex format to apply theme using a color.<br/><br/>컴포넌트의 테마 색입니다.`SplitPane`컴포넌트는`color` 관련 프로퍼티를 직접적으로 제공하지는 않지만, 테마 색을 이용하여 컴포넌트의 전체적인 디자인을 정할 수 있습니다. 테마 색만 여러분이 정해주신다면 그에 걸맞는 디자인이 알아서 적용됩니다. Hex 단위의 값을 사용해 주세요.|`#be33ff`|

#### Examples

`<Item />` component is not included in this library, use your own children.  
`<Item />` 컴포넌트는 이 라이브러리에 포함되어 있지 않습니다. 여러분의 용도에 맞게 이 자리에 여러분의 자식 컴포넌트를 사용해 주세요.

- A Simple way to use the `SplitPane` component
- 가장 간단한 방식의 `SplitPane` 컴포넌트 사용 방법 예시입니다.

```tsx
import { SplitPane } from 'amethyst-layout';
import { Item } from 'your-awesome-component';

const App = () => {
  return (
    <SplitPane defaultRatios={[50, 50]}>
      <Item />
      <Item />
    </SplitPane>
  );
};

export default App;
```

- `SplitPane` component with various props
- 다양한 props가 포함되어 있는 `SplitPane` 컴포넌트 예시입니다.

```tsx
import { SplitPane } from 'amethyst-layout';
import { Item } from 'your-awesome-component';

const App = () => {
  return (
    <SplitPane
      defaultRatios={[20, 30, 50]}
      direction="column"
      resizerThickness={30}
      borderThickness={4}
      minimumRatio={10}
      maximumRatio={90}
      horizontalMargin={5}
      verticalMargin={20}
      width={400}
      height={300}
      themeColor="#0004ff"
    >
      <Item />
      <Item />
      <Item />
    </SplitPane>
  );
};

export default App;
```

- Nested `SplitPane` components
- 중첩된 `SplitPane` 컴포넌트의 사용도 가능합니다. 이를 활용해 더 복잡한 레이아웃을 만들 수 있습니다.

<img src="https://github.com/wzrabbit/layout-component/assets/87642422/242f9096-169f-44c7-a1f4-832fb6520e13" width="350px" />

```tsx
import { SplitPane } from 'amethyst-layout';
import { Item } from 'your-awesome-component';

const App = () => {
  return (
    <SplitPane defaultRatios={[30, 70]}>
      <Item />
      <SplitPane defaultRatios={[50, 50]} direction="column">
        <Item />
        <Item />
      </SplitPane>
    </SplitPane>
  );
};
```
