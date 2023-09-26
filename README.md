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

## ParallaxItem

### Props

```ts
type ParallaxItemProps = {
  children?: ReactNode;
  speed?: number;
  easing?: 'ease-in-out' | 'ease-in' | 'ease-out' | 'ease';
  isHorizontal?: boolean;
  isAbsolutePosition?: boolean;
  position?: { top?: number; right?: number; bottom?: number; left?: number };
  zIndex?: number;
  ...divElementTypes
};
```

### Example

```ts
import { ParallaxItem } from 'ks-layout';

const Demo = () => {
  return (
    <section>
      <ParallaxItem speed={0.4} easing="ease-in-out">
        <div>
          <h1>Basic parallax component.</h1>
        </div>
      </ParallaxItem>
      <ParallaxItem
        speed={0.1}
        easing="ease"
        isAbsolute
        position={{ top: '300px' }}
        zIndex={10}
      >
        <div>
          <h1>This component has absolute position and z-index.</h1>
        </div>
      </ParallaxItem>
      <ParallaxItem speed={0.5} isHorizontal>
        <div>
          <h1>This component will move to horizontal direction.</h1>
        </div>
      </ParallaxItem>
    </section>
  );
};

export default Demo;
```
