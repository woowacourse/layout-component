# turtle601-layout-component

## 설명

재사용 가능한 레이아웃 컴포넌트 구현

## 설치

- 리액트 환경에서 사용 가능합니다
- js 환경과 ts환경 둘 다 사용 가능합니다.

```
npm i react react-dom
npm i turtle601-layout-component
```

## 사용법

### Container

- 설명: 화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃

```tsx
import { Container } from 'turtle601-layout-component';

/*
  Container Props 설명

  - as? 원하는 html 태그를 넣을 수 있다.
  - minWidth? 화면 중앙에 위치한 Container 자식 요소의 최소 크기를 지정할 수 있다.
  - maxWidth? 화면 중앙에 위치한 Container 자식 요소의 최대 크기를 제한할 수 있다.

*/

function ContainerExample() {
  return (
    <Container minWidth="500px">
      <div style={{ border: '1px solid red' }}>
        별 하나의 동경과 별하나에 사랑과 별 하나의 어머니, 어머니, 어머님
      </div>
      <div>
        별 하나의 동경과 별하나에 사랑과 별 하나의 어머니, 어머니, 어머님
      </div>
    </Container>
  );
}
```

### Flex

```tsx
/*
  Flex Props 설명

  - as? 원하는 html 태그를 넣을 수 있다.
  - direction?: flexBox의 flex-direction'을 설정을 할 수 있다.
  - justify?: flexBox의 justify-content 설정을 할 수 있다.
  - align?: flexBox의 align-items 설정을 할 수 있다.
  - gap?: flexBox의 gap 설정을 할 수 있다.
*/

import { Flex } from 'turtle601-layout-component';

function FlexExample() {
  return (
     <Flex
        as="section"
        justify="space-between"
        style={{
          border: `1px solid red`,
        }}
        gap="4px"
      >
  )
}

```

### Grid

- 설명: CSS Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 컴포넌트

```tsx
/*
  Grid Props 설명

  - as? 원하는 html 태그를 넣을 수 있다.
  - gap?: grid의 gap을 설정을 할 수 있다.
  - placeItems?: grid의 placeItems 설정을 할 수 있다.

  Grid.Item Props 설명

  - xs?: grid의 전체 폭 12 중 차지하는 너비를 지정할 수 있다. ex) 1 | 2 | 3 | 4 | 6 | 8 | 12;
*/

import { GridLayout, GridItem } from 'turtle601-layout-component';

function GridExample() {
  return (
    <Grid gap={5} placeItems='center'>
      <Grid.Item xs={8}>Item 1</Grid.Item>
      <Grid.Item xs={4}>Item 2</Grid.Item>
      <Grid.Item xs={12}>Item 3</Grid.Item>
    </Grid>;
  )
}
```

### Tab

```tsx
/*
  TabProvider
  
  - tabIdx? tab에서 처음 보여줄 idx를 설정할 수 있다. 

  TabList

  - width? TabList의 width를 정할 수 있다. 
  - justify? TabList의 정렬 방식을 정할 수 있다. 

  TabItem

  - value: TabItem의 idx값;
  - label: TabItem에 보여줄 string값;
  - disabled?: TabItem disabled;
  - indicatorColor?: TabItem 활성화 기능;
  
  TabPanel

  - value: 선택된 TabItem과 mapping된 idx값  
*/

function TabExample() {
  const [value] = useState(1);

  return (
    <TabProvider tabIdx={value}>
      <TabList>
        <TabItem label="Item One" value={1} />
        <TabItem label="Item Two" value={2} />
        <TabItem label="Item Three" value={3} />
      </TabList>

      <TabPanel value={1}>Item One</TabPanel>
      <TabPanel value={2}>Item Two</TabPanel>
      <TabPanel value={3}>Item Three</TabPanel>
    </TabProvider>
  );
}
```
