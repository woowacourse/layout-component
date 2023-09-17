# React Components Documentation

- **Live Storybook**: [Storybook](https://step1--tiny-madeleine-f22f65.netlify.app/)
- **NPM Package**: [react-layout-box](https://www.npmjs.com/package/react-layout-box)

# Installation

```bash
npm install react-layout-box
```

---



# React Container Component

A highly customizable and responsive `Container` component designed to handle the minimum and maximum width of its child elements. Particularly useful for readability and maintaining layout constraints.

## Installation



## Usage

```tsx
import Container from 'react-layout-box';

<Container minWidth="200px" maxWidth="800px">
  <p>Your content here</p>
</Container>
```

## API

### Props

| Prop     | Type            | Description                      |
|----------|-----------------|----------------------------------|
| minWidth | number \| string| Minimum width of the container   |
| maxWidth | number \| string| Maximum width of the container   |
| children | ReactNode       | The content inside the container |

---

# React Flex Component

A flexible and easy-to-use `Flex` component for building modern layouts with flexbox.


## Usage

Here is a simple usage example:

```tsx
import Flex from 'react-layout-box';

<Flex direction="row" justify="center" align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

## API

### Props

| Prop     | Type                 | Description                          |
|----------|----------------------|--------------------------------------|
| direction| 'row' \| 'row-reverse' \| 'column' \| 'column-reverse' \| 'inherit' \| 'initial' \| 'unset' | Flex direction |
| justify  | 'start' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly' | Justify content |
| align    | 'stretch' \| 'center' \| 'start' \| 'end' | Align items    |
| gap      | number \| string     | Gap between items                    |
| children | ReactNode            | The content inside the flex container|

---

# React Grid Component

An intuitive `Grid` component that simplifies the creation of grid layouts in React.

## Usage

Here is a simple usage example:

```tsx
import Grid from 'react-layout-box';

<Grid rows={3} columns={3}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

## API

### Props

| Prop     | Type           | Description                          |
|----------|----------------|--------------------------------------|
| rows     | number \| string | Number of rows                       |
| columns  | number \| string | Number of columns                    |
| gap      | number \| string | Gap between items                    |
| children | ReactNode       | The content inside the grid container|
