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
