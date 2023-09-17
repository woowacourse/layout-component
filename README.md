# React Components Documentation

- **Live Storybook**: [Storybook](https://step1--tiny-madeleine-f22f65.netlify.app/)
- **NPM Package**: [react-layout-box](https://www.npmjs.com/package/react-layout-box)

# Installation

```bash
npm install your-container-package
```

---



# React Container Component

A highly customizable and responsive `Container` component designed to handle the minimum and maximum width of its child elements. Particularly useful for readability and maintaining layout constraints.

## Installation



## Usage

Here is a simple usage example:

```jsx
import Container from 'your-container-package';

<Container minWidth="200px" maxWidth="800px">
  <p>Your content here</p>
</Container>
```

## API

### Props

- `minWidth`: Minimum width of the container
- `maxWidth`: Maximum width of the container

---

# React Flex Component

A flexible and easy-to-use `Flex` component for building modern layouts with flexbox.


## Usage

Here is a simple usage example:

```jsx
import Flex from 'your-flex-package';

<Flex direction="row" justify="center" align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

## API

### Props

- `direction`: Flex direction
- `justify`: Justify content
- `align`: Align items

---

# React Grid Component

An intuitive `Grid` component that simplifies the creation of grid layouts in React.

## Usage

Here is a simple usage example:

```jsx
import Grid from 'your-grid-package';

<Grid rows={3} columns={3}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

## API

### Props

- `rows`: Number of rows
- `columns`: Number of columns
