# React Layout Component

Container, Flex, Grid 레이아웃 컴포넌트를 사용할 수 있는 React 라이브러리입니다.

# 설치 방법

```
$ npm install @se-een/layout-component
$ yarn add @se-een/layout-component
```

## Container 컴포넌트

자식 컴포넌트, 내용물을 담을 수 있는 컨테이너 박스 역할의 레이아웃 컴포넌트입니다.

```jsx
import { Container } from '@se-een/layout-component';

<Container
  as="section"
  width={400}
  height={400}
  responsive
  $backgroundColor="blue"
>
  {/* children */}
</Container>;
```

## Flex

Flexbox 를 만들 수 있는 컨테이너 박스 역할의 레이아웃 컴포넌트입니다.

```jsx
import { Flex } from '@se-een/layout-component';

<Flex as="section" $flexDirection="row" gap={20}>
  {/* children */}
</Flex>;
```

## Grid 컴포넌트

Grid 를 만들 수 있는 컨테이너 박스 역할의 레이아웃 컴포넌트입니다.

```jsx
import { Grid } from '@se-een/layout-component';

<Grid tag="article" rows="auto" columns={3} gap={16}>
  {/* children */}
</Grid>;
```

더 자세한 사용 방법은 스토리북에서 확인해 보세요.
