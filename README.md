<br/>

# 레이아웃을 위한 React 컴포넌트 소개

웹 페이지 레이아웃 구성은 종종 복잡하고 시간이 많이 소요됩니다. 이를 해결하기 위해, 우리는 React와 styled-components를 활용한 세 가지 주요 컴포넌트를 소개합니다:

- `Container`: 웹 페이지의 내용을 감싸는 역할을 하며, 최소 및 최대 너비를 지정하여 반응형 디자인을 지원합니다.

- `Grid`: CSS Grid Layout을 기반으로, 사용자 지정 행, 열 및 간격을 통해 복잡한 레이아웃을 쉽게 구성할 수 있습니다.

- `Flex`: Flexbox의 특징을 최대한 활용하여, 방향, 정렬, 간격 등의 주요 속성을 제공하며, 빠르고 유연한 레이아웃 조절이 가능합니다.
  이 세 가지 컴포넌트를 활용하면, 웹 페이지의 레이아웃을 효과적으로 구성하고 조절할 수 있습니다.

  <br/>

# 설치 방법

```
$ npm install jeremy-component
$ yarn add jeremy-component
```

---

  <br/>

## Container 컴포넌트

### 개요

React와 `styled-components` 라이브러리를 활용하여 개발된 `Container` 컴포넌트는 웹 페이지 레이아웃 구성에 유용한 도구입니다. 이 컴포넌트는 특정 `minWidth`와 `maxWidth` 속성을 받아, 해당 값에 따라 컨테이너의 최소 및 최대 너비를 설정하는 기능을 제공합니다.

### 사용법

`Container` 컴포넌트는 React의 Functional Component 형태로 구현되어 있으며, `minWidth`, `maxWidth`, 그리고 `children` 세 가지 props를 받을 수 있습니다.

```jsx
import { Container } from '@jeremy-component';

<Container minWidth='1/2' maxWidth='screen'>
  <p>이것은 Container 내부의 내용입니다.</p>
</Container>;
```

  <br/>

## Flex 컴포넌트

### 개요

`Flex` 컴포넌트는 React와 styled-components 라이브러리를 기반으로, CSS Flexbox의 특징과 유용성을 최대한 활용하여 웹 페이지 레이아웃을 간편하게 구성하기 위한 도구입니다. 이 컴포넌트를 사용하면 Flexbox의 주요 속성들을 직관적으로 적용할 수 있습니다.

### 사용법

Flex 컴포넌트는 다양한 속성(props)를 받아들입니다:

- `direction`: Flexbox의 방향을 지정합니다. (row, column 등)
- `justify`: 주축에서 아이템들을 어떻게 정렬할지 지정합니다. (flex-start, center, flex-end 등)
- `align`: 교차축에서 아이템들을 어떻게 정렬할지 지정합니다. (flex-start, center, flex-end 등)
- `gap`: Flex 아이템 간의 간격을 지정합니다.
- `children`: Flex 컨테이너 내부에 배치할 컴포넌트나 요소들을 지정합니다.

```jsx
import { Flex } from '@jeremy-component';

<Flex direction='row' justify='between' align='center' gap='10px'>
  <div>첫 번째 아이템</div>
  <div>두 번째 아이템</div>
  {/* ... */}
</Flex>;
```

  <br/>

## Grid 컴포넌트

### 개요

우리의 새로운 Grid 컴포넌트는 React와 styled-components 라이브러리를 활용하여 웹 페이지의 레이아웃을 유연하게 구성할 수 있도록 제작되었습니다. 이 컴포넌트는 CSS Grid Layout을 기반으로 하며, 사용자가 지정한 행과 열의 수, 그리고 간격을 통해 그리드 레이아웃을 쉽게 생성할 수 있습니다.

### 사용법

Grid 컴포넌트는 여러 개의 속성(props)를 받을 수 있습니다:

- `rows`: 그리드의 행 수를 지정합니다.
- `columns`: 그리드의 열 수를 지정합니다.
- `gap`: 행과 열 사이의 간격을 지정합니다. string 형태로 값을 받으며 행 간격과 열 간격을 따로 지정하고 싶다면 '8px 12px'과 같은 형식으로 처리해주세요.
- `children`: 그리드 내부에 배치할 컴포넌트나 요소들을 지정합니다.

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

<br/>

## ParallaxScrolling 컴포넌트

### 개요

ParallaxScrolling 컴포넌트는 사용자의 스크롤 동작에 반응하여 컨텐츠가 다양한 속도와 깊이감으로 움직이는 3D 패럴랙스 스크롤링 효과를 구현하는 React 컴포넌트입니다. 이 컴포넌트는 ParallaxItem 컴포넌트와 함께 사용되어, 각 아이템에 독립적인 3D 효과와 위치 설정이 가능합니다.

### 사용법

ParallaxScrolling 컴포넌트는 다음과 같은 속성(props)을 받아들입니다:

`children`: ParallaxItem 컴포넌트를 통해 패럴랙스 효과를 적용할 이미지 요소들을 지정합니다.
`perspective`: 3D 효과의 강도를 결정하는 투시도를 설정합니다. 값이 클수록 더 강한 3D 효과가 발생합니다.

```jsx
<ParallaxScrolling perspective={500}>
  <ParallaxItem
    imgUrl='imageURL'
    translateZ={-10}
    scale={25}
    objectFit='cover'
  />
  <ParallaxItem
    imgUrl='imageURL'
    translateZ={-10}
    scale={3}
    objectFit='contain'
  />
  {/* 추가 ParallaxItem 컴포넌트 */}
</ParallaxScrolling>
```

### 구조 및 스타일링

ParallaxScrolling 컴포넌트는 Layout과 Container 두 개의 주요 styled-components로 구성됩니다.

- `Layout`: 전체 뷰포트를 차지하며, perspective 속성을 통해 3D 효과의 강도를 조절합니다.
- `Container`: 각 ParallaxItem 컴포넌트가 위치하는 부분으로, position: relative;로 설정되어 각 아이템의 절대 위치를 기준으로 합니다.

### 결론

ParallaxScrolling 컴포넌트와 ParallaxItem 컴포넌트의 조합은 웹 페이지에 생동감 있는 3D 패럴랙스 스크롤링 효과를 손쉽게 추가할 수 있게 해줍니다. 이를 통해 사용자의 참여와 몰입도를 높여, 더 풍부하고 인터랙티브한 사용자 경험을 제공할 수 있습니다.

  <br/>

## ParallaxItem 컴포넌트

### 개요

ParallaxItem 컴포넌트는 ParallaxScrolling 컴포넌트의 children으로 사용되며, 개별 이미지 요소에 대한 3D 효과와 위치를 동적으로 설정하는 역할을 합니다. 이 컴포넌트를 통해 사용자는 각 이미지의 Z축 변환, 스케일, 오브젝트 피팅 등을 손쉽게 조절할 수 있습니다.

### 사용법

ParallaxItem 컴포넌트는 다음과 같은 속성(props)을 받아들입니다:

- `translateZ`: 이미지의 Z축 변환 값을 설정합니다.
- `scale`: 이미지의 스케일 값을 설정합니다.
- `objectFit`: CSS의 object-fit 속성 값을 설정합니다.
- `imgUrl`: 이미지의 URL을 지정합니다.
- `right`, left, top, bottom: 이미지의 절대 위치를 설정합니다.

```jsx
<ParallaxItem
  imgUrl='imageURL'
  translateZ={-100}
  scale={1.5}
  objectFit='cover'
  right='20px'
/>
```

### 구조 및 스타일링

ParallaxItem 컴포넌트의 핵심은 Img라는 styled-component입니다. Img 컴포넌트는 position: absolute;로 설정되어 부모 컴포넌트인 ParallaxScrolling 내에서의 절대 위치를 가집니다.

transform 속성을 통해 translateZ와 scale 값을 동적으로 적용하여 이미지의 3D 효과를 조절합니다. 또한, right, left, top, bottom 속성을 사용하여 이미지의 위치를 정밀하게 조절할 수 있습니다.

### 결론

ParallaxItem 컴포넌트는 ParallaxScrolling 컴포넌트와 함께 사용되어, 웹 페이지에 독특한 3D 패럴랙스 스크롤링 효과를 구현하는 데 있어 핵심적인 요소입니다. 사용자 정의 속성을 통해 다양한 효과와 배치를 쉽게 설정할 수 있어, 창의적이고 인터랙티브한 사용자 경험을 제공합니다.
