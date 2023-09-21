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

- `maxWidth` ('xs'| 'sm' | 'md' | 'lg' | 'xl'): Maximum width of container
- `minWidth` ('xs'| 'sm' | 'md' | 'lg' | 'xl'): Minimum width of container
- `background` (string): Container background

> The types of maxWidth and minWidth follow `Container Width Type`.

### Container Width Type

| size | width  |
| :--: | :----: |
| `xs` | 450px  |
| `sm` | 600px  |
| `md` | 900px  |
| `lg` | 1200px |
| `xl` | 1500px |

### Example of use

```tsx
function App() {
  return (
    <Container
      maxWidth="md"
      minWidth="sm"
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

- `columns` (number): number of columns
- `rows` (number): number of rows
- `align` (string): Determine how to vertically align children
- `justify` (string): Decide how to horizontally align children
- `gap` (string): Spacing between child components

### Grid Item Component Props

- `$gridColumn` (string): Size (position) of the area occupied by the column
- `$gridRow` (string): Size (position) of the area occupied by the row
- `align` (string): Determine how to vertically align
- `justify` (string): Decide how to horizontally align

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

- `direction` (string): Direction of flex
- `wrap` (string): Decide whether to force `flex-item` elements to be placed on a single line, or to express them in multiple parts outside of their containing scope.
- `align` (string): Determine how to vertically align children
- `justify` (string): Decide how to horizontally align children
- `gap` (string): Spacing between child components

### Flex Item Component Props

- `align` (string): Determine how to vertically align
- `justify` (string): Decide how to horizontally align

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
