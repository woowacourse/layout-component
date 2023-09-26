# Yeopto's React Layout Component

This library provides components that make it easy to implement various layouts using React and offers several useful UI components. This library is built using TypeScript and Styled-Components.

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
- `unit`: type is `'%'` | `'px'` | `'rem'` | `'vh'` | `'vw'` | `'vmin'` | `'vmax'` | `'ex'` | `'ch'`
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
    <Container minWidth={600} maxWidth={960} unit="px">
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
- `children`: type is React.ReactNode. A child component of the Grid component.

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

- `direction(optional)`: type is `row` | `column`. Sets the flex direction. default value is `row`
- `justify(optional)`: type is `flex-start` | `flex-end` | `center` | `space-between` | `space-around`. aligns items along the main axis. default value is `flex-start`
- `align(optional)`: type is `flex-start` | `flex-end` | `center` | `stretch`. aligns items along the cross-axis. default value is `stretch`
- `gap(optional)`: type is number. Adjusts the spacing between child components.
- `children`: type is React.ReactNode. A child component of the Flex component.

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

## Drawer Component

The `Drawer` component is a component that allows you to open and close a sidebar, like a drawer, from one side of the screen.

### Props

- `anchor(optional)`: type is `top` | `bottom` | `left` | `right`. Determines the direction from which it opens. default value is `left`.
- `isOpen`: type is `boolean`. Determines whether the Drawer is open or closed.
- `toggleDrawer`: type is `() => void`. This is a function that allows opening and closing.
- `children(optional)`: type is `React.ReactNode` or `undefined`. this type originated from `PropsWithChildren`.

### User Guide

**Import Library**

```tsx
import { Drawer } from 'yeopto-react-layout-component';
```

**Using Example Code**

```tsx
import React, { useState } from 'react';
import { Drawer } from 'yeopto-react-layout-component';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleOnClick}>Open Drawer</button>
      <Drawer isOpen={isOpen} toggleDrawer={handleOnClick}>
        <h2>Drawer Content</h2>
        <p>This is the content of the drawer.</p>
      </Drawer>
    </>
  );
};

export default App;
```

## Development Environment

- React + TypeScript (Vite)
- Styled-Components

## Version

- 0.1.0 (latest)
