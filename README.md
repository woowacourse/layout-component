## guridaek-layout-components

간단한 레이아웃 컴포넌트입니다.

[Storybook](https://6507e70242c4a95757b61d3a-zyyiztqalq.chromatic.com/)

## 설치 방법

```sh
npm install guridaek-layout-components
```

## 사용 방법

### Components 불러오기

```js
import { Container, Flex, Grid } from "guridaek-layout-components";
```

### Container 사용하기

```js
<Container minWidth="100px" maxWidth="300px" etc="background-color: white; border: 1px solid blue">
  ...
</Container>
```

- `minWidth`: CSSProperties["minWidth"]

  최소 너비를 설정할 수 있습니다.

- `maxWidth`: CSSProperties["maxWidth"]

  최대 너비를 설정할 수 있습니다.

- `etc`: CSSProp

  추가적인 CSS를 적용할 수 있습니다.

### Flex 사용하기

```js
<Flex
  direction="column"
  alignItems="center"
  gap="10px"
  etc="background-color: white; border: 1px solid blue"
>
  ...
</Flex>
```

- `direction`: CSSProperties["flexDirection"]

  배치 축을 설정할 수 있습니다.

- `flexWrap`: CSSProperties["flexWrap"]

  줄 넘김 설정을 할 수 있습니다.

- `justifyContent`: CSSProperties["justifyContent"]

  메인 축 정렬 방향을 설정할 수 있습니다.

- `alignItems`: CSSProperties["alignItems"]

  수직 축 정렬 방향을 설정할 수 있습니다.

- `gap`: CSSProperties["gap"]

  자식 요소간의 간격을 설정할 수 있습니다.

- `etc`: CSSProp

  추가적인 CSS를 적용할 수 있습니다.

### Grid 사용하기

```js
<Grid rows={4} columns={4} gap="10px" etc="background-color: white; border: 1px solid blue">
  ...
</Grid>
```

- `rows`: number

  행의 수를 설정할 수 있습니다.

- `rows`: number

  열의 수를 설정할 수 있습니다.

- `gap`: CSSProperties["gap"]

  자식 요소간의 간격을 설정할 수 있습니다.

- `etc`: CSSProp

  추가적인 CSS를 적용할 수 있습니다.
