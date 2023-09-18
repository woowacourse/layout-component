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

```tsx
import { Grid } from "slinky-layout-component";

<Grid tag="div" rows="auto" columns={3} gap={16}>
  {/* ReactNode 형태의 children을 전달 */}
</Grid>;
```

상세 사용 방법 : [storybook](https://6507cb7518135e2a3b920fdd-ansvyqyegr.chromatic.com/?path=/docs/flex--docs)
