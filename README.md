# Woody's Layout Components

[storybook](https://650802364cf3ffbe00439014-lhxqwkzegk.chromatic.com/?path=/story/components-container--container)

[github](https://github.com/evencoding/layout-component/tree/step1)

[npm](https://www.npmjs.com/package/woody-layout-component)

## 설치

```bash
npm install woody-layout-component
```

## 공통

모든 레이아웃 컴포넌트들(Container, Grid, Flex)은 다음과 같은 공통 속성을 사용할 수 있습니다.

`sx`: 인라인 스타일을 적용할 수 있습니다. 객체 형태로 스타일을 작성합니다.

```tsx
<Container sx={{ backgroundColor: 'lightgray' }}>Hello, World!</Container>
```

`as`: 시맨틱 태그를 지정할 수 있습니다. `Default` 값은 `div`입니다.

```tsx
<Container as='article'>Hello, World!</Container>
```

`className`: 미리 정의된 CSS 클래스 이름을 추가할 수 있습니다.

```tsx
<Container className='w-12 h-screen'>Hello, World!</Container>
```

`className`: w-[]과 h-[]와 같이 작성하는 것으로 custom할 수 있습니다.

```tsx
<Container className='w-[21px] h-[33px]'>Hello, World!</Container>
```

## Container

Container는 너비와 스타일 등을 쉽게 설정할 수 있는 레이아웃 컴포넌트입니다.

```tsx
<Container minWidth={100} maxWidth={200} sx={{ color: 'red' }} className='h-48'>
  <div>Hello, World!</div>
</Container>
```

### Option

`minWidth`: 컨테이너의 최소 너비를 설정합니다. 숫자(픽셀) 또는 문자열(퍼센트)를 입력할 수 있습니다.

```tsx
<Container minWidth={100}>Hello, World!</Container>
```

```tsx
<Container minWidth={'100%'}>Hello, World!</Container>
```

`maxWidth`: 컨테이너의 최대 너비를 설정합니다. 숫자(픽셀) 또는 문자열(퍼센트)를 입력할 수 있습니다.

```tsx
<Container maxWidth={500}>Hello, World!</Container>
```

## Grid

Grid는 그리드 레이아웃을 쉽게 구현할 수 있는 컴포넌트입니다. 열과 행의 개수, 간격 등을 설정할 수 있습니다.

```tsx
<Grid rows={3} columns={3}>
  <div>첫 번째</div>
  <div>두 번째</div>
  <div>세 번째</div>
</Grid>
```

### 옵션

`rows`: 행의 개수를 설정합니다. 숫자를 입력하면 됩니다.

```tsx
<Grid rows={2}>...</Grid>
```

`columns`: 열의 개수를 설정합니다. 숫자를 입력하면 됩니다.

```tsx
<Grid columns={4}>...</Grid>
```

`gap`: 행과 열 사이의 간격을 설정합니다. 숫자(픽셀)를 입력하면 됩니다.

```tsx
<Grid gap={10}>...</Grid>
```

## Flex

Flex는 유연한 레이아웃을 구현할 수 있는 컴포넌트입니다. 방향, 정렬 등을 설정할 수 있습니다.

```tsx
<Flex direction='row' justify='center' align='center'>
  <div>Hello</div>
  <div>World</div>
</Flex>
```

### 옵션

`direction`: 아이템의 방향을 설정합니다. 'row', 'row-reverse', 'col', 'col-reverse' 중 하나를 선택할 수 있습니다.

```tsx
<Flex direction='row'>...</Flex>
```

`justify`: 아이템을 가로축으로 어떻게 정렬할지 설정합니다. 'start', 'end', 'center', 'between', 'around' 중 하나를 선택할 수 있습니다.

```tsx
<Flex justify='center'>...</Flex>
```

`align`: 아이템을 세로축으로 어떻게 정렬할지 설정합니다. 'start', 'end', 'center', 'baseline', 'stretch' 중 하나를 선택할 수 있습니다.

```tsx
<Flex align='center'>...</Flex>
```

`gap`: 아이템 사이의 간격을 설정합니다. 숫자(픽셀)를 입력하면 됩니다.

```tsx
<Flex gap={10}>...</Flex>
```

`className`: center 클래스를 사용할 수 있습니다 justify-content, align-items center가 적용되어 있습니다.

```tsx
<Flex className='center'>...</Flex>
```
