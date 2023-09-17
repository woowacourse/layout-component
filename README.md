# Yeopto's React Layout Component

This library provides components that make it easy to implement various layouts using React. The library is written in TypeScript, and each component is helpful when creating screen layouts.

## Installation

### npm

```
npm install yeopto-react-layout-component
```

### yarn

```
yarn add yeopto-react-layout-component
```

## Container Component

The `Container` component implements a layout that restricts the maximum width of the content based on the screen's width and centers it.

### Props

- `minWidth`: type is number. Specifies the minimum width.
- `maxWidth`: type is number. Specifies the maximum width.
- `children`: type is React.ReactNode. A child component of the Container component.

### User Guide

**Import Library**

```tsx
import { Container } from 'yeopto-react-layout-component';
```

**Using Example Code**

```tsx
import React from 'react';
import { Container } from 'yeopto-react-layout-component';

const App = () => {
  return (
    <Container minWidth={600} maxWidth={960}>
      <div>Content</div>
    </Container>
  );
};

export default App;
```

## Grid Component

The `Grid` component implements a layout that arranges child components in a grid pattern using CSS Grid.

### Props

- `rows`: type is number. Specifies the number of rows in the grid.
- `columns`: type is number. Specifies the number of columns in the grid.
- `gap(optional)`: type is number. Adjusts the spacing between child components.
- `rowGap(optional)`: type is number. Adjusts the row gap between child components.
- `colGap(optional)`: type is number. Adjusts the column gap between child components.
- `justifyItems(optional)`: type is `flex-start` | `flex-end` | `center`. default is `flex-start`
- `children`: type is React.ReactNode. A child component of the Container component.

### User Guide

**Import Library**

```tsx
import { Grid } from 'yeopto-react-layout-component';
```

**Using Example Code**

```tsx
import React from 'react';
import { Grid } from 'yeopto-react-layout-component';

const App = () => {
  return (
    <Grid rows={2} columns={2} gap={10} justifyItems="center">
      <div>Content 1</div>
      <div>Content 2</div>
      <div>Content 3</div>
      <div>Content 4</div>
    </Grid>
  );
};

export default App;
```

## Flex Component

The `Flex` component implements a layout that flexibly arranges child components using CSS Flexbox.

### Props

- `direction`: type is `row` | `column`. Sets the flex direction.
- `justify`: type is `flex-start` | `flex-end` | `center` | `space-between` | `space-around`. aligns items along the main axis.
- `align`: type is `flex-start` | `flex-end` | `center` | `stretch`. aligns items along the cross-axis.
- `gap(optional)`: type is number. Adjusts the spacing between child components.
- `children`: type is React.ReactNode. A child component of the Container component.

### User Guide

**Import Library**

```tsx
import { Flex } from 'yeopto-react-layout-component';
```

**Using Example Code**

```tsx
import React from 'react';
import { Flex } from 'yeopto-react-layout-component';

const App = () => {
  return (
    <Flex direction="column" justify="center" align="center" gap={10}>
      <div>item 1</div>
      <div>item 2</div>
      <div>item 3</div>
      <div>item 4</div>
    </Flex>
  );
};

export default App;
```

## Development Environment

- React + TypeScript (Vite)
- Styled-Components

## Version

- 0.0.4 (latest)
