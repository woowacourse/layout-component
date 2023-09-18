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

- display: 컨테이너의 표시 방식을 설정합니다. 'display' 옵션에 해당하는 값만 전달할 수 있습니다.

- width: 컨테이너의 너비 값을 설정합니다. 문자열 값을 전달할 수 있습니다.

- height: 컨테이너의 높이 값을 설정합니다. 문자열 값을 전달할 수 있습니다.

- $minWidth: 컨테이너의 최소 너비 값을 설정합니다. 문자열 값을 전달할 수 있습니다.

- $minHeight: 컨테이너의 최소 높이 값을 설정합니다. 문자열 값을 전달할 수 있습니다.

- $maxWidth: 컨테이너의 최대 너비 값을 설정합니다. 문자열 값을 전달할 수 있습니다.

- $maxHeight: 컨테이너의 최대 높이 값을 설정합니다. 문자열 값을 전달할 수 있습니다.

- margin: 컨테이너의 여백 값을 설정합니다. 문자열 값을 전달할 수 있습니다.

- padding: 컨테이너의 안쪽 여백 값을 설정합니다. 문자열 값을 전달할 수 있습니다.

- position: 컨테이너의 위치 값을 설정합니다. 'position' 옵션에 해당하는 값만 전달할 수 있습니다.

- left: 컨테이너의 왼쪽 위치 값을 설정합니다. 숫자 또는 문자열을 전달할 수 있습니다.

- right: 컨테이너의 오른쪽 위치 값을 설정합니다. 숫자 또는 문자열을 전달할 수 있습니다.

- top: 컨테이너의 위쪽 위치 값을 설정합니다. 숫자 또는 문자열을 전달할 수 있습니다.

- bottom: 컨테이너의 아래쪽 위치 값을 설정합니다. 숫자 또는 문자열을 전달할 수 있습니다.

- overflow: 컨테이너의 오버플로우 값을 설정합니다. 'overflow' 옵션에 해당하는 값만 전달할 수 있습니다.

- cursor: 컨테이너의 커서 값을 설정합니다. 'cursor' 옵션에 해당하는 값만 전달할 수 있습니다.

- opacity: 컨테이너의 투명도 값을 설정합니다. 문자열 값을 전달할 수 있습니다.

- $zIndex: 컨테이너의 Z-인덱스 값을 설정합니다. 숫자를 전달할 수 있습니다.

- $backgroundColor: 컨테이너의 배경 색상 값을 설정합니다. 문자열 값을 전달할 수 있습니다.

- responsive: 컨테이너는 최소 너비, 너비, 최대 너비 순으로 반응성을 적용합니다. 불리언 값을 전달할 수 있습니다.

## Flex

Flexbox 를 만들 수 있는 컨테이너 박스 역할의 레이아웃 컴포넌트입니다.

```jsx
import { Flex } from '@se-een/layout-component';

<Flex as="section" $flexDirection="row" gap={20}>
  {/* children */}
</Flex>;
```

- Container 인터페이스를 상속 받습니다.

- $flexDirection: flex 컨테이너 내에서 아이템들이 배치되는 방향을 설정합니다. (ex: "row", "column", "row-reverse", "column-reverse")

- $flexWrap: flex 아이템들이 여러 줄에 걸쳐 배치되는지 여부를 설정합니다. (ex: "nowrap", "wrap", "wrap-reverse")

- $flexBasis: flex 컨테이너 내 아이템의 기본 크기를 지정합니다. 문자열 또는 숫자로 표현됩니다.

- $flexGrow: flex 컨테이너 내 아이템의 크기를 확장할 때, 각 아이템에 대한 확장 비율을 설정합니다. 숫자 값입니다.

- $flexShrink: flex 컨테이너 내 아이템의 크기를 축소할 때, 각 아이템에 대한 축소 비율을 설정합니다. 숫자 값입니다.

- $alignItems: flex 컨테이너 내 아이템의 수직 정렬을 설정합니다. (ex: "flex-start", "center", "flex-end", "stretch")

- $alignContent: 여러 줄로 나눠진 flex 컨테이너 내 아이템들의 수직 정렬을 설정합니다. (ex: "flex-start", "center", "stretch")

- $justifyContent: flex 컨테이너 내 아이템의 수평 정렬을 설정합니다. (ex: "flex-start", "center", "flex-end", "space-between", "space-around")

- $justifyItems: flex 컨테이너 내 아이템의 수평 정렬을 설정합니다. (ex: "start", "center", "end", "stretch")

- flex: flex 속성을 직접 설정하여 아이템에 대한 flex-grow, flex-shrink, 그리고 flex-basis 값을 동시에 지정할 수 있습니다. (ex: "1 1 50%")

- $gap: 그리드나 플렉스 컨테이너 내 아이템들 사이의 간격을 설정합니다. 문자열 값으로 지정됩니다.

## Grid 컴포넌트

Grid 를 만들 수 있는 컨테이너 박스 역할의 레이아웃 컴포넌트입니다.

```jsx
import { Grid } from '@se-een/layout-component';

<Grid as="section" rows="auto" columns={4} gap={20}>
  {/* children */}
</Grid>;
```

- row: 그리드 아이템의 행 위치를 설정합니다. 숫자 또는 문자열로 표현됩니다.

- column: 그리드 아이템의 열 위치를 설정합니다. 숫자 또는 문자열로 표현됩니다.

- $justifyItems: 그리드 아이템 내에서의 수평 정렬을 설정합니다. (ex: "start", "center", "end", "stretch")

- $justifyContent: 그리드 컨테이너 내 그리드 아이템들의 수평 정렬을 설정합니다. (ex: "start", "center", "end", "space-between", "space-around")

- $alignItems: 그리드 컨테이너 내 그리드 아이템들의 수직 정렬을 설정합니다. (ex: "start", "center", "end", "stretch")

- $alignContent: 그리드 컨테이너 내 여러 그리드 라인들의 수직 정렬을 설정합니다. (ex: "start", "center", "end", "space-between", "space-around")

- $justifySelf: 개별 그리드 아이템의 수평 정렬을 설정합니다. (ex: "start", "center", "end", "stretch")

- $alignSelf: 개별 그리드 아이템의 수직 정렬을 설정합니다. (ex: "start", "center", "end", "stretch")

- $gridTemplateAreas: 그리드 템플릿 영역을 설정합니다. 문자열로 표현됩니다.

- $gridTemplateColumns: 그리드 템플릿 열을 설정합니다. 문자열로 표현됩니다.

- $gridTemplateRows: 그리드 템플릿 행을 설정합니다. 문자열로 표현됩니다.

- gap: 그리드 컨테이너 내 그리드 아이템들 사이의 간격을 설정합니다. 문자열로 표현됩니다.

더 자세한 사용 방법은 [스토리북](https://650806462077bdd1feb62ede-yphfqsmeox.chromatic.com/)에서 확인해 보세요.
