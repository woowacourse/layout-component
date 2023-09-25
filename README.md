# React-layout-component

This modal is simple react-layout-component.

- Typescript support

## Components

Includes the following components:

- Container
- Flex
- Grid

## Installation

To install, you can use `npm` or `yarn`:

```
$ npm install @fine1012/react-layout-component
$ yarn add @fine1012/react-layout-component
```

## Container

The Container component implements a layout that limits the maximum width of the content and places it in the center according to the width of the screen.

#### props

[optional]

- `width: string`: Width of Container
- `height: string`: Height of Container
- `maxWidth: string`: Max width of Container
- `maxHeight: string`: Max height of Container
- `minWidth: string`: Min width of Container
- `minHeight: string`: Min height of Container
- `bgColor: string`: Background color of Container
- `color: string`: Font color of Container
- `border: string`: Border of Container(width | style | color)
- `borderRadius: string`: Border radius of Container
- `padding: string`: Padding of Container
- `margin: string`: Margin of Container

#### Usage

```javascript
import { Container } from '@fine1012/react-modal';

const Example = () => {
  return (
    <Container maxWidth='400px' bgColor='pink' padding='10rem'>
      <div>hi</div>
    </Container>
  );
};

export default Example;
```

## Grid

The Grid component implements a layout that arranges child components in a grid.

#### props

[optional]

- `rows: number`, `rowTrackList: string`: grid-template-rows: repeat(rows, rowTrackList)
- `columns: number`, `columnTrackList: string`: grid-template-rows: repeat(column, columnTrackList)
- `rowGap: string`: Row gap of Grid
- `columnGap: string`: Column gap of Grid

#### Usage

```javascript
import { Grid } from '@fine1012/react-modal';

const Example = () => {
  return (
    <Grid
      rows={2}
      column={2}
      columnTrackList='60px'
      rowGap='2rem'
      columnGap='1rem'
    >
      <div>hi 1</div>
      <div>hi 2</div>
      <div>hi 3</div>
    </Grid>
  );
};

export default Example;
```

## Flex

Flex components implement a layout that flexibly arranges child components.

#### props

[optional]

- `direction: 'row' | 'column'`: Direction of Flex
- `justify: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'`: justify-content
- `align: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'self-start' | 'self-end' | 'baseline'`: align-items
- `wrap: 'no-wrap' | 'wrap' | 'wrap-reverse'`: flex-wrap
- `gap: string`: Gap of Flex

#### Usage

```javascript
import { Flex } from '@fine1012/react-modal';

const Example = () => {
  return (
    <Flex direction='column' justify='space-between' align='center' gap='8px'>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
    </Flex>
  );
};

export default Example;
```
