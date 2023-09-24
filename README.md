<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/source/skype/289/straight-ruler_1f4cf.png"/>
</p>

# React Layout Component

다양한 레이아웃 컴포넌트를 사용할 수 있는 리액트 라이브러리입니다.

## 설치

```sh
$ npm install @ashleysyheo/layout-component
$ yarn add @ashleysyheo/layout-component
```

## Container 컴포넌트

화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃을 만들기 위한 컴포넌트입니다.

```tsx
import { Container } from '@ashleysyheo/layout-component';

<Container tag="div" width={800} height={400} backgroundColor="aliceblue">
  {/* ReactNode 형태의 children을 전달 */}
</Container>;
```

## Flex 컴포넌트

Flex 레이아웃을 만들기 위한 컴포넌트입니다.

```tsx
import { Flex } from '@ashleysyheo/layout-component';

<Flex tag="section" direction="row" justify="space-between" gap={16}>
  {/* ReactNode 형태의 children을 전달 */}
</Flex>;
```

## Grid 컴포넌트

Grid 레이아웃을 만들기 위한 컴포넌트입니다.

```tsx
import { Grid } from '@ashleysyheo/layout-component';

<Grid tag="article" rows="auto" columns={3} gap={16}>
  {/* ReactNode 형태의 children을 전달 */}
</Grid>;
```

## Masonry 컴포넌트

Masonry 레이아웃을 만들기 위한 컴포넌트입니다.

```tsx
import { Masonry } from '@ashleysyheo/layout-component';

<Masonry tag="ul" columns={5} spacing={16}>
  {/* ReactNode 형태의 children을 전달 */}
</Masonry>;
```

<br>

더 자세한 사용 방법은 [스토리북](https://6502b9dcc6bfd98bc2197bb9-qdtwbtmkbo.chromatic.com)에서 확인해 보세요.
