# jero-design-system

> A library to design common components built in React & TypeScript

## Overview

- You can use this library when designing common components, especially for layout.
- Just Install, Import and Then Use it!

## Version

> Latest version: 0.1.3 (updated in 2023.09.26)

- Major package version
  - "react": "^18.2.0"
  - "react-dom": "^18.2.0"
  - "@emotion/react": "^11.11.1"
  - "@emotion/styled": "^11.11.0"
  - "typescript": "^5.2.2"

## How to Use

### Installation

```Shell
npm i jero-design-system
```

### Import Package

- If you wanna use all components, import all components from this package.

```
import { Button, Container, Grid, Flex } from 'jero-design-system';
```

- If you wanna use specific components, import them from this package.

```JavaScript
import { Button, Flex } from 'jero-design-system';
```

## Package Structure

```
📦jero-design-system
 ┣ 📂dist
 ┃ ┣ 📂Button
 ┃ ┃ ┣ 📜index.d.ts
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Container
 ┃ ┃ ┣ 📜index.d.ts
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Flex
 ┃ ┃ ┣ 📜index.d.ts
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂Grid
 ┃ ┃ ┣ 📜index.d.ts
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂SplitPane
 ┃ ┃ ┣ 📜index.d.ts
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📜index.d.ts
 ┃ ┗ 📜index.js
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜tsconfig.node.json
```

## Component & Props

### Container

![jero-container](https://github.com/inyeong-kang/layout-component/assets/81199414/87f1e985-65b5-4840-b0a7-0adf5d7c7443)

```JavaScript
import { Container } from 'jero-design-system';

function App() {
  return (
    <div className='App'>
      <h1>Container</h1>
      <Container
        maxWidth='900px'
        minWidth='300px'
        height='30vh'
        backgroundColor='#E7E7E7'
      >
        This is Container
        <p>Hello Nice to Meet U</p>
        <h3>How are you?</h3>
        <h4>I'm fine, thanks!</h4>
      </Container>
    </div>
  );
}
```

| props name      | props type        | props description                                        |
| --------------- | ----------------- | -------------------------------------------------------- |
| maxWidth        | `string`          | Max-width of Container (ex. '600px'), **required props** |
| minWidth        | `string`          | Min-width of Container (ex. '300px')                     |
| height          | `string`          | Height of Container (ex '90vh')                          |
| backgroundColor | `string`          | background-color of Container (ex 'gray')                |
| children        | `React.ReactNode` | Element or Node of Container                             |

### Grid

![jero-grid](https://github.com/inyeong-kang/layout-component/assets/81199414/b162c756-2a68-4be0-ae40-0ec08e937b56)

```JavaScript
import { Grid } from 'jero-design-system';

function App() {
  return (
    <div className='App'>
      <h1>Grid</h1>
      <Grid rows={2} columns={2} gap='5px' backgroundColor='#E7E7E7'>
        <div className='item'>Item 1</div>
        <div className='item'>Item 2</div>
        <div className='item'>Item 3</div>
        <div className='item'>Item 4</div>
      </Grid>
    </div>
  );
}
```

| props name      | props type        | props description                                   |
| --------------- | ----------------- | --------------------------------------------------- |
| rows            | `number`          | justify-content of Grid (ex. 4), **required props** |
| columns         | `nubmer`          | align-items of Grid (ex. 3), **required props**     |
| gap             | `string`          | gap of Grid (ex '10px')                             |
| backgroundColor | `string`          | background-color of Grid (ex 'gray')                |
| children        | `React.ReactNode` | Element or Node of Grid                             |

### Flex

![jero-flex](https://github.com/inyeong-kang/layout-component/assets/81199414/f449a5ba-1f9a-4638-8554-b24f960fb895)

```JavaScript
import { Flex } from 'jero-design-system';

function App() {
  return (
    <div className='App'>
      <h1>Flex</h1>
      <Flex direction='column' justify='space-between' align='center' gap='5px'>
        <div className='item'>Item 1</div>
        <div className='item'>Item 2</div>
        <div className='item'>Item 3</div>
        <div className='item'>Item 4</div>
      </Flex>
    </div>
  );
}
```

| props name      | props type        | props description                                          |
| --------------- | ----------------- | ---------------------------------------------------------- |
| direction       | `row, column`     | flex-direction of Flex (ex. '600px'), **required props**   |
| justify         | `string`          | justify-content of Flex (ex. 'center'), **required props** |
| align           | `string`          | align-items of Flex (ex '90vh'), **required props**        |
| gap             | `string`          | gap of Flex (ex '90vh')                                    |
| backgroundColor | `string`          | background-color of Flex (ex '90vh')                       |
| children        | `React.ReactNode` | Element or Node of Flex                                    |

### SplitPane

![jero-splitPane](https://github.com/inyeong-kang/layout-component/assets/81199414/2afd097c-3177-49e7-91d1-3a55b195ac0a)

```JavaScript
import { SplitPane } from 'jero-design-system';

function App() {
  return (
    <div className='App'>
      <h1>SplitPane</h1>
      <SplitPane width={1000} defaultSize='50%' minSize='10%' maxSize='90%' firstPane={<FirstPane/>} secondPane={<SecondPane/>}/>
    </div>
  );
}

function FirstPane() {
  return (
    <div
        style={{
          height: '100vh',
          padding: '20px',
          backgroundColor: 'skyblue',
          color: 'white',
        }}
      >
        First Pane
    </div>
  );
}

function SecondPane() {
  return (
    <div
        style={{
          height: '100vh',
          padding: '20px',
          backgroundColor: 'blue',
          color: 'white',
        }}
      >
        Second Pane
    </div>
  );
}
```

| props name  | props type        | props description                                                                                |
| ----------- | ----------------- | ------------------------------------------------------------------------------------------------ |
| width       | `number`          | width(only pixel) of `SplitPane` (ex. if `width={600}`, this means `600px` ), **required props** |
| defaultSize | `string`          | default width of each pane                                                                       |
| minSize     | `string`          | min-width of each pane                                                                           |
| maxSize     | `string`          | max-width of each pane                                                                           |
| firstPane   | `React.ReactNode` | children element of first pane, **required props**                                               |
| children    | `React.ReactNode` | children element of second pane, **required props**                                              |

### Button

![jero-button](https://github.com/inyeong-kang/layout-component/assets/81199414/53a2b7ef-316b-41e6-ab06-3849cc1af00f)

```JavaScript

import { Button, Flex } from 'jero-design-system';

function App() {
  return (
    <div className='App'>
      <h1>Button</h1>
      <Flex direction='row' gap='10px' justify='start' align='start'>
        <Button label='Primary' primary />
        <Button label='Secondary' />
        <Button label='Small' size='sm'></Button>
        <Button label='Medium' size='md'></Button>
        <Button label='Large' size='lg'></Button>
      </Flex>
    </div>
  );
}
```

| props name | props type         | props description                                            |
| ---------- | ------------------ | ------------------------------------------------------------ |
| primary    | `boolean`          | If a button is used in primary tasks, add `primary` props.   |
| size       | `'sm', 'md', 'lg'` | Adjust the size of Button, including font-size inside Button |
| label      | `string`           | Text of Button                                               |

## Source

- [Github Code](https://github.com/inyeong-kang/layout-component)
- [npm.js](https://www.npmjs.com/package/jero-design-system)

## Developer

- [jero-kang](https://github.com/inyeong-kang)
