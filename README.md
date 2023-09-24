# react-component-layout

The `react-component-layout` library provides reusable layout components in React. This allows you to easily configure the screen.

## Storybook

[Storybook](https://65072b692164c6766d60a0ef-bzlfmhkzvp.chromatic.com/)

<br/>

## Install

```bash
$ npm i react-component-layout
# or
$ yarn add react-component-layout
```

<br/>

## Container Component

The `Container` component is a layout component that limits the maximum width of content and places it in the center according to the width of the screen.

### Props

- `maxWidth` (string | ResponsiveStyleType<T>): Maximum width of container
- `minWidth` (string | ResponsiveStyleType<T>): Minimum width of container
- `background` (string | ResponsiveStyleType<T>): Container background

### Example of use

```tsx
function App() {
  return (
    <Container
      maxWidth="600px"
      minWidth="600px"
      background="rgba(250,250,250)"
    ></Container>
  );
}
```

<br/>

## Grid Component

The `Grid` component is a component that arranges child components in a grid.

`Grid.Item` is an item element component that is influenced by the `Grid` component.

### Grid Component Props

- `columns` (number | string | ResponsiveStyleType<T>): number of columns
- `rows` (number | string | ResponsiveStyleType<T>): number of rows
- `align` (string | ResponsiveStyleType<T>): Determine how to vertically align children
- `justify` (string | ResponsiveStyleType<T>): Decide how to horizontally align children
- `gap` (string | ResponsiveStyleType<T>): Spacing between child components

### Grid Item Component Props

- `$gridColumn` (string | ResponsiveStyleType<T>): Size (position) of the area occupied by the column
- `$gridRow` (string | ResponsiveStyleType<T>): Size (position) of the area occupied by the row
- `align` (string | ResponsiveStyleType<T>): Determine how to vertically align
- `justify` (string | ResponsiveStyleType<T>): Decide how to horizontally align

### Example of use

```tsx
function App() {
  return (
    <Grid columns={4} rows={2} gap="10px">
      <Grid.Item $gridColumn={'1/3'} justify="center">
        Item1
      </Grid.Item>
      <Grid.Item>Item2</Grid.Item>
      {/* ... */}
    </Grid>
  );
}
```

<br/>

## Flex Component

A `Flex` component is a component that flexibly arranges child components.

`Flex.Item` is an item element component that is influenced by the `Flex` component.

### Flex Component Props

- `direction` (string | ResponsiveStyleType<T>): Direction of flex
- `wrap` (string | ResponsiveStyleType<T>): Decide whether to force `flex-item` elements to be placed on a single line, or to express them in multiple parts outside of their containing scope.
- `align` (string | ResponsiveStyleType<T>): Determine how to vertically align children
- `justify` (string | ResponsiveStyleType<T>): Decide how to horizontally align children
- `gap` (string | ResponsiveStyleType<T>): Spacing between child components

### Flex Item Component Props

- `align` (string | ResponsiveStyleType<T>): Determine how to vertically align
- `justify` (string | ResponsiveStyleType<T>): Decide how to horizontally align

### Example of use

```tsx
function App() {
  return (
    <Flex direction="column" align="center">
      <Flex.Item>Item1</Flex.Item>
      <Flex.Item>Item2</Flex.Item>
      {/* ... */}
    </Flex>
  );
}
```

<br/>

## ResponsiveStyle

If you want to create a responsive layout, you can pass the value corresponding to ResponsiveStyleType as an argument.

```tsx
function App() {
  return (
    <Container
      $minWidth={{ desktop: '900px', tablet: '600px', mobile: '450px' }}
      $maxWidth={{ desktop: '900px', tablet: '600px', mobile: '450px' }}
      background={{ desktop: 'blue', tablet: 'yellow', mobile: 'red' }}
    >
      Children
    </Container>
  );
}
```

|   size    |       width       |
| :-------: | :---------------: |
| `desktop` |         -         |
| `tablet`  | max-width: 1024px |
| `mobile`  | max-width: 768px  |

Also, if you want to specify tablet and mobile sizes, pass the values ​​as an array as follows.

```tsx
function App() {
  return (
    <Container
      background={{
        desktop: 'blue',
        tablet: [900, 'yellow'],
        mobile: [600, 'red'],
      }}
    >
      Children
    </Container>
  );
}
```

If the width is greater than 900, you will see a blue background, if the width is between 600 and 900, you will see a yellow background, and if the width is less than 600, you will see a red background.

<br/>

## ETC

To apply other CSS properties to the layout component, write style inline as follows.

```tsx
function App() {
  return (
    <Container
      // ...
      style={{ padding: '20px' }}
    ></Container>
  );
}
```

<br/>

## Tabs Component

Tabs Component is a component that shows a specific panel depending on the tab selected by the user. Tabs Component is not responsive.

### Tabs Component Props

- `scrollButtons` (boolean): A property that specifies the existence of a button (scrollButton) that can move the position when the width of the Tabs Navigation becomes longer than the screen width.
- `direction` (horizontal | vertical): Property that specifies the sorting direction of tabs
- `centered` (boolean): Property to center Tabs Navigation
- `accentColor` (string): Property that specifies the color of the selected tab

### Tabs Panel Component Props

- `label` (string): Property indicating the name of the tab, its value is a unique value
- `disabled` (boolean): Property that determines whether Tab is inactive

### Example of use

```tsx
function App() {
  return (
    <Tabs>
      <Tabs.Panel label="Panel1">Contents1</Tabs.Panel>
      <Tabs.Panel label="Panel2">Contents2</Tabs.Panel>
      <Tabs.Panel label="Panel3">Contents3</Tabs.Panel>
    </Tabs>
  );
}
```
