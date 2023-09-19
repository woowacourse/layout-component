<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/source/skype/289/straight-ruler_1f4cf.png"/>
</p>
<h2 align="middle">누구나 사용할 수 있는 레이아웃 컴포넌트</h2>
<p align="middle">재사용 가능한 레이아웃 컴포넌트 제작과 배포</p>
<br/>

# installation

```
npm install @gyeongza/components
```

> 모든 컴포넌트는 필요에 따라 `style={{width: "10px"}}` 과 같이 inline 스타일을 추가할 수 있습니다.

# Container 컴포넌트

### minWidth, maxWidth 속성을 통해 폭을 조절할 수 있습니다.

```javascript
// 1. Container

<Container minWidth={600} maxWidth={960}>
  <div>Container</div>
</Container>
```

# Grid 컴포넌트

### rows, columns 속성을 통해 격자의 형태를 지정할 수 있습니다.

### gap 속성을 통해 자식 컴포넌트 간의 간격을 조절할 수 있습니다.

```javascript
// 1. Grid

<Grid rows={3} cols={2} gap={10}>
  <div>GridItem 1</div>
  <div>GridItem 2</div>
  <div>GridItem 3</div>
  <div>GridItem 4</div>
  <div>GridItem 5</div>
  <div>GridItem 6</div>
</Grid>
```

# Flex 컴포넌트

### direction, justify, align 속성을 통해 배열 방향과 정렬을 조절할 수 있다.

### gap 속성을 통해 자식 컴포넌트 간의 간격을 조절할 수 있다.

```javascript
// 1. Flex

<Flex direction="column" justify="center" align="center" gap={10}>
  <div>FlexItem 1</div>
  <div>FlexItem 2</div>
  <div>FlexItem 3</div>
</Flex>
```
