# yunseong-layout-component

## 개요

react 프레임워크에서 사용할 수 있는 여러가지 layout 컴포넌트 라이브러리입니다.

## 설치

```
npm i yunseong-layout-component
```

## Container

### 설명

중앙에 배치하는 레이아웃입니다. 속성을 이용해 최대 너비와 최소 너비를 설정할 수 있습니다.

### 속성

기본적으로 너비는 `maxWidth`값을 따릅니다. 지정하지 않을 시, 뷰포트의 너비값을 가집니다.

`maxWidth?:number` : 픽셀단위의 최대 너비를 지정합니다. 지정하지 않을 시, 뷰포트의
너비로 지정됩니다.

`minWidth?` : 픽셀 단위의 최소 너비를 지정합니다. 지정하지 않으면, 최대 너비값으로 지정합니다.

### 사용 예시

```tsx
<Container minWidth={500} maxWidth={1440}>
  <div>...</div>
</Container>
```

## Flex

### 설명

요소를 선형적으로 배치하기 위한 Flex 레이아웃 입니다. 너비와 높이는 부모 요소의 값을 상속합니다.

### 속성

`direction?:'row' | 'row-reverse' | 'column' | 'column-reverse'` : flex layout의 메인 축의 정렬 방향을 지정합니다. 기본 값은 row 입니다.

`justify: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly'` : flex에 속하는 아이템의 메인 축에 따른 정렬 방식을 지정합니다. 기본값은 start 입니다.

`align: 'center' | 'start' | 'end'`: 메인 축과 교차하는 축의 정렬 방식을 지정합니다. 기본 값은 start입니다.

`gap:number`: 픽셀 단위의 간격을 지정합니다. 기본값은 0 입니다.

### 사용 예시

```tsx
<Flex direction='column' justify='center' align='center' gap={4}>
  <FlexItem>1</FlexItem>
  <FlexItem>2</FlexItem>
  <FlexItem>3</FlexItem>
</Flex>
```

## FlexItem

### 설명

Flex 레이아웃의 개별 요소를 배치시킬 수 있는 레이아웃 입니다.

### 속성

`align: 'auto' | 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'`: 개별 요소에 지정되는 정렬 기준입니다. 기본 값은 auto이며, 부모의 정렬 기준(align-items)을 상속합니다.

### 사용 예시

```tsx
<Flex direction='column' justify='center' align='center' gap={4}>
  <FlexItem align='end'>1</FlexItem>
  <FlexItem>2</FlexItem>
  <FlexItem>3</FlexItem>
</Flex>
```

## Grid

### 설명

격자형 레이아웃입니다. 행과 열을 지정할 수 있습니다. 기본 행과 열 값은 10행 10열입니다. 너비는 부모값을 상속 받습니다.

### 속성

`columns: number` : 열의 갯수를 지정합니다. 크기는 기준 너비를 동일한 비율로 가져갑니다. 기본 값은 10입니다.

`rows: number` : 행의 갯수를 지정합니다. 기본값은 10입니다.

`gap: number` : 픽셀 단위의 간격을 지정합니다. 기본값은 0입니다.

### 사용 예시

```tsx
<Grid columns={3}>
  <GridItem>A</GridItem>
  <GridItem>B</GridItem>
  <GridItem>C</GridItem>
  <GridItem>D</GridItem>
  <GridItem>E</GridItem>
</Grid>
```

## GridItem

### 설명

Grid 컴포넌트에 속하는 아이템입니다. 각 요소가 그리드에서 얼마나 차지할 지 비율을 조절할 수 있습니다.

### 속성

기본 grid-row, grid column 속성을 따릅니다. grid-direction-start, end 의 단축 속성만 사용합니다.

`gridRow: ${number}/${number} | 'auto'` : 단축 속성을 사용합니다. 숫자는 정수만 유효합니다. 기본값은 auto 입니다.

`gridCol: ${number}/${number} | 'auto'` : 단축 속성을 사용합니다. 숫자는 정수만 유효합니다. 기본값은 auto 입니다.

### 사용 예시

```tsx
<Grid columns={3}>
  <GridItem gridRow='1/3'>A</GridItem>
  <GridItem>B</GridItem>
  <GridItem>C</GridItem>
  <GridItem>D</GridItem>
  <GridItem>E</GridItem>
</Grid>
```

# TabLayout

## 설명

TabBar가 존재하는 레이아웃입니다. 상단의 Tab으로 이동할 수 있습니다.

Tab Layout의 크기는 부모의 크기를 상속받습니다.

## 속성

`tabs: string[]` : 요소를 선택해 콘텐츠를 이동할 수 있는 Tab Header에 표시될 문자열 배열 값입니다.

`children: ReactElement` : 선택된 tabs 요소에 따라 띄울 콘텐츠를 보여줍니다. 보여주는 값은 선택된 tabs의 인덱스에 의존합니다.

## 사용 예시

```tsx
<TabLayout tabs={["항목 1", "항목 2", "항목 3"]} bordercolor={"blue"}>
  <div>콘텐츠 11</div>
  <div>콘텐츠 22</div>
  <div>콘텐츠 33</div>
</TabLayout>
```