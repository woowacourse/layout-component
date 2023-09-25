<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/source/skype/289/straight-ruler_1f4cf.png"/>
</p>
<h2 align="middle">누구나 사용할 수 있는 레이아웃 컴포넌트</h2>
<p align="middle">재사용 가능한 레이아웃 컴포넌트 제작과 배포</p>
<br/>

## 설치

```
$ npm install ks-layout
or
$ yarn add ks-layout
```

## Container

### Props

```ts
type ContainerProps = {
  children?: ReactNode;
  minWidth?: number;
  maxWidth?: number;
  padding?:
    | number
    | { top?: number; right?: number; bottom?: number; left?: number };
  margin?:
    | number
    | { top?: number; right?: number; bottom?: number; left?: number };
  ...divElementTypes
};
```

### Example

```ts
import { Container } from 'ks-layout';

const Demo = () => {
  return (
    <Container maxWidth={100} minWidth={100} padding={{ top: 200 }}>
      <div>
        <h1>Test</h1>
      </div>
    </Container>
  );
};

export default Demo;
```

## Flex

### Props

```ts
type FlexProps = {
  children?: ReactNode;
  minWidth?: number;
  maxWidth?: number;
  padding?:
    | number
    | { top?: number; right?: number; bottom?: number; left?: number };
  margin?:
    | number
    | { top?: number; right?: number; bottom?: number; left?: number };
  alignItems?: Property.AlignItems;
  alignContent?: Property.AlignContent;
  alignSelf?: Property.AlignSelf;
  justifyContent?: Property.JustifyContent;
  justifyItems?: Property.JustifyItems;
  justifySelf?: Property.JustifySelf;
  flexDirection?: Property.FlexDirection;
  flexWrap?: Property.FlexWrap;
  ...divElementTypes
};
```

### Example

```ts
import { Flex } from 'ks-layout';

const Demo = () => {
  return (
    <Flex
      maxWidth={100}
      minWidth={100}
      padding={{ top: 200 }}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <div>
        <h1>Test</h1>
      </div>
    </Flex>
  );
};

export default Demo;
```

## Grid

### Props

```ts
type GridProps = {
  children?: ReactNode;
  minWidth?: number;
  maxWidth?: number;
  padding?:
    | number
    | { top?: number; right?: number; bottom?: number; left?: number };
  margin?:
    | number
    | { top?: number; right?: number; bottom?: number; left?: number };
  row?: number;
  column?: number;
  gap?: {
    row?: number;
    column?: number;
  };
  ...divElementTypes
};
```

### Example

```ts
import { Grid } from 'ks-layout';

const Demo = () => {
  return (
    <Grid
      maxWidth={100}
      minWidth={100}
      padding={{ top: 200 }}
      row={3}
      column={2}
      gap={{ row: 30, column: 20 }}
    >
      <div>
        <h1>Test</h1>
      </div>
    </Grid>
  );
};

export default Demo;
```
