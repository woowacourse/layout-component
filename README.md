<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/source/skype/289/straight-ruler_1f4cf.png"/>
</p>
<h2 align="middle">누구나 사용할 수 있는 레이아웃 컴포넌트</h2>
<p align="middle">재사용 가능한 레이아웃 컴포넌트 제작과 배포</p>
<br/>

```sh
$ npm install slinky-layout-component
$ yarn add slinky-layout-component
```

## Container 컴포넌트

```tsx
import { Container } from "slinky-layout-component";

<Container tag="div" width={800} height={400}>
  {/* ReactNode 형태의 children을 전달 */}
</Container>;
```

## Flex 컴포넌트

```tsx
import { Flex } from "slinky-layout-component";

<Flex tag="section" direction="row" justify="space-between" gap={8}>
  {/* ReactNode 형태의 children을 전달 */}
</Flex>;
```

## Grid 컴포넌트

```tsx
import { Grid } from "slinky-layout-component";

<Grid tag="div" rows="auto" columns={3} gap={16}>
  {/* ReactNode 형태의 children을 전달 */}
</Grid>;
```

## Parallax Scroll 컴포넌트

```tsx
import { ParallaxContainer, ParallaxItem } from "slinky-layout-component";

<ParallaxContainer bodyHeight={args.bodyHeight}>
  <ParallaxItem
    imageUrl={
      "https://images.pexels.com/photos/3081487/pexels-photo-3081487.jpeg?cs=srgb&dl=pexels-stein-egil-liland-3081487.jpg&fm=jpg"
    }
  >
    hahaha
  </ParallaxItem>
  <ParallaxItem imageUrl="https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80">
    hahaha
  </ParallaxItem>
  <ParallaxItem
    imageUrl={
      "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg"
    }
  >
    hahaha
  </ParallaxItem>
</ParallaxContainer>;
```

## Parallax Zoom 컴포넌트

```tsx
<ParallaxZoom
  speed={0.05}
  imageURL={
    "https://img.freepik.com/free-photo/landscape-with-a-tree_1048-4891.jpg"
  }
>
  <p>text</p>
  <p>text</p>
  <p>text</p>
  <p>text</p>
  <p>text</p>
  <p>text</p>
  <p>text</p>
  <p>text</p>
</ParallaxZoom>
```

상세 사용 방법 : [storybook](https://6507cb7518135e2a3b920fdd-ansvyqyegr.chromatic.com/?path=/docs/flex--docs)
