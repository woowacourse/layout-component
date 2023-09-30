<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/source/skype/289/straight-ruler_1f4cf.png"/>
</p>
<h2 align="middle">누구나 사용할 수 있는 레이아웃 컴포넌트</h2>
<p align="middle">재사용 가능한 레이아웃 컴포넌트 제작과 배포</p>
<br/>

모든 컴포넌트는 필요에 따라 `style={{width: "10px"}}` 과 같이 inline 스타일을 추가할 수 있습니다.

# Container 컴포넌트

### minWidth, maxWidth 속성을 통해 폭을 조절할 수 있습니다.

<img width="495" alt="스크린샷 2023-09-18 오후 5 41 05" src="https://github.com/gyeongza/layout-component/assets/62369936/d169cf6f-738e-4f83-90b0-b741b3a7afb5">

```javascript
// 1. Container

<Container minWidth={600} maxWidth={960}>
  <div>Container</div>
</Container>
```

# Grid 컴포넌트

### rows, columns 속성을 통해 격자의 형태를 지정할 수 있습니다.

### gap 속성을 통해 자식 컴포넌트 간의 간격을 조절할 수 있습니다.

<img width="368" alt="스크린샷 2023-09-18 오후 5 40 31" src="https://github.com/gyeongza/layout-component/assets/62369936/9a8b5bf2-f1c0-44c4-816c-a0d7d350b343">

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

### direction, justify, align 속성을 통해 배열 방향과 정렬을 조절할 수 있습니다.

### gap 속성을 통해 자식 컴포넌트 간의 간격을 조절할 수 있습니다.

<img width="312" alt="스크린샷 2023-09-18 오후 5 40 36" src="https://github.com/gyeongza/layout-component/assets/62369936/ad9411b2-8515-44d9-bd59-64661426ccf5">

```javascript
// 1. Flex

<Flex direction="column" justify="center" align="center" gap={10}>
  <div>FlexItem 1</div>
  <div>FlexItem 2</div>
  <div>FlexItem 3</div>
</Flex>
```

# Drawer 컴포넌트

### Drawer 방향을 설정할 수 있습니다.

```javascript
// 1. Drawer

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Drawer anchor="LEFT" isOpen={isOpen} onClose={handleModalClose}>
        // 원하는 컴포넌트를 추가하세요.
      <button onClick={handleModalOpen}>오픈</button>
    </div>
  );
};

export default App;
```
