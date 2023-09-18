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
<Container minWidth="100px" maxWidth="300px">
  ...
</Container>
```

- `minWidth`, `maxWidth` 를 사용하여 너비를 조절할 수 있습니다.

- `etc`를 사용하여 추가로 CSS를 적용할 수 있습니다.

### Flex 사용하기

```js
<Flex direction="column" alignItems="center" gap="10px" etc="width: 300px; height: 400px">
  ...
</Flex>
```

- `direction`, `flexWrap`, `justifyContent`, `alignItems`, `alignContent를` 사용하여 flex 관련 설정을 할 수 있습니다.
- `gap`을 사용하여 간격을 조절할 수 있습니다.
- `etc`를 사용하여 추가로 CSS를 적용할 수 있습니다.

### Grid 사용하기

```js
<Grid rows={4} columns={4} gap="10px" etc="width: 300px; height: 400px">
  ...
</Grid>
```

- `rows`, `columns`을 사용하여 행과 열의 개수를 설정할 수 있습니다.
- `gap`을 사용하여 간격을 조절할 수 있습니다.
- `etc`를 사용하여 추가로 CSS를 적용할 수 있습니다.
