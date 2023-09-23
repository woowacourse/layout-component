<br/>

# 레이아웃을 위한 React 컴포넌트 소개

웹 페이지 레이아웃 구성은 종종 복잡하고 시간이 많이 소요됩니다. 이를 해결하기 위해, 우리는 React와 styled-components를 활용한 세 가지 주요 컴포넌트를 소개합니다:

- Container: 웹 페이지의 내용을 감싸는 역할을 하며, 최소 및 최대 너비를 지정하여 반응형 디자인을 지원합니다.

- Grid: CSS Grid Layout을 기반으로, 사용자 지정 행, 열 및 간격을 통해 복잡한 레이아웃을 쉽게 구성할 수 있습니다.

- Flex: Flexbox의 특징을 최대한 활용하여, 방향, 정렬, 간격 등의 주요 속성을 제공하며, 빠르고 유연한 레이아웃 조절이 가능합니다.
  이 세 가지 컴포넌트를 활용하면, 웹 페이지의 레이아웃을 효과적으로 구성하고 조절할 수 있습니다.

# 설치 방법

```
$ npm install jeremy-component
$ yarn add jeremy-component
```

## Container 컴포넌트

### 개요

React와 styled-components 라이브러리를 활용하여 개발된 Container 컴포넌트는 웹 페이지 레이아웃 구성에 유용한 도구입니다. 이 컴포넌트는 특정 minWidth와 maxWidth 속성을 받아, 해당 값에 따라 컨테이너의 최소 및 최대 너비를 설정하는 기능을 제공합니다.

### 사용법

Container 컴포넌트는 React의 Functional Component 형태로 구현되어 있으며, minWidth, maxWidth, 그리고 children 세 가지 props를 받을 수 있습니다.

```jsx
import { Container } from '@jeremy-component';

<Container minWidth='1/2' maxWidth='screen'>
  <p>이것은 Container 내부의 내용입니다.</p>
</Container>;
```

## Flex

### 개요

Flex 컴포넌트는 React와 styled-components 라이브러리를 기반으로, CSS Flexbox의 특징과 유용성을 최대한 활용하여 웹 페이지 레이아웃을 간편하게 구성하기 위한 도구입니다. 이 컴포넌트를 사용하면 Flexbox의 주요 속성들을 직관적으로 적용할 수 있습니다.

### 사용법

Flex 컴포넌트는 다양한 속성(props)를 받아들입니다:

- direction: Flexbox의 방향을 지정합니다. (row, column 등)
- justify: 주축에서 아이템들을 어떻게 정렬할지 지정합니다. (flex-start, center, flex-end 등)
- align: 교차축에서 아이템들을 어떻게 정렬할지 지정합니다. (flex-start, center, flex-end 등)
- gap: Flex 아이템 간의 간격을 지정합니다.
- children: Flex 컨테이너 내부에 배치할 컴포넌트나 요소들을 지정합니다.

```jsx
import { Flex } from '@jeremy-component';

<Flex direction='row' justify='between' align='center' gap='10px'>
  <div>첫 번째 아이템</div>
  <div>두 번째 아이템</div>
  {/* ... */}
</Flex>;
```

## Grid 컴포넌트

### 개요

우리의 새로운 Grid 컴포넌트는 React와 styled-components 라이브러리를 활용하여 웹 페이지의 레이아웃을 유연하게 구성할 수 있도록 제작되었습니다. 이 컴포넌트는 CSS Grid Layout을 기반으로 하며, 사용자가 지정한 행과 열의 수, 그리고 간격을 통해 그리드 레이아웃을 쉽게 생성할 수 있습니다.

### 사용법

Grid 컴포넌트는 여러 개의 속성(props)를 받을 수 있습니다:

- rows: 그리드의 행 수를 지정합니다.
- columns: 그리드의 열 수를 지정합니다.
- gap: 행과 열 사이의 간격을 지정합니다. string 형태로 값을 받으며 행 간격과 열 간격을 따로 지정하고 싶다면 '8px 12px'과 같은 형식으로 처리해주세요.
- children: 그리드 내부에 배치할 컴포넌트나 요소들을 지정합니다.

```jsx
import { Grid } from '@jeremy-component';

<Grid rows={3} columns={2} gap='0px 12px'>
  <div>첫 번째 아이템</div>
  <div>두 번째 아이템</div>
  <div>세 번째 아이템</div>
  {/* ... */}
</Grid>;
```

### 구조 및 스타일링

컴포넌트의 핵심은 styled.div를 활용한 Wrapper입니다. display: grid; 스타일을 적용하여 그리드 레이아웃을 생성하며, 각 속성에 따라 동적으로 그리드의 행, 열, 간격을 설정합니다.

행과 열의 수는 각각 grid-template-rows와 grid-template-columns 속성을 통해 설정됩니다. 1fr 단위를 사용하여 각 행과 열의 크기를 동일하게 유지합니다.

간격은 grid-column-gap과 grid-row-gap 속성을 통해 지정됩니다.

이러한 동적 스타일링은 styled-components의 css 함수와 JavaScript의 템플릿 리터럴을 활용하여 구현됩니다.
