<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/source/skype/289/straight-ruler_1f4cf.png"/>
</p>

# React Layout Component

## 설치

```sh
$ npm i rulu-layout
$ yarn add rulu-layout
```

## Container 컴포넌트

화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃 컴포넌트

```tsx
import { Container } from "rulu-layout";

<Container maxWidth={800} height={400} margin={10}>
  {/* ReactNode 형태의 children을 전달 */}
</Container>;
```

## Flex

Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트

```tsx
import { Flex } from "rulu-layout";

<Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
  {/* ReactNode 형태의 children을 전달 */}
</Flex>;
```

## Grid 컴포넌트

Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 레이아웃 컴포넌트

```tsx
import { Grid } from "rulu-layout";

<Grid rows={3} columns={3} gap={10}>
  {/* ReactNode 형태의 children을 전달 */}
</Grid>;
```

<br>

더 자세한 사용 방법은 [스토리북](https://step1--endearing-pastelito-b51c51.netlify.app/?path=/docs/layout-container--docs)에서 확인해 보세요.
