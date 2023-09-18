<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/source/skype/289/straight-ruler_1f4cf.png"/>
</p>
<h2 align="middle">누구나 사용할 수 있는 레이아웃 컴포넌트</h2>
<p align="middle">재사용 가능한 레이아웃 컴포넌트 제작과 배포</p>
<br/>

## 시작하기

### 설치

```bash
npm install woody-layout-component
```

## 사용 방법

### 사용 예시

```jsx
import { Container, Flex, Grid } from 'woody-layout-component';

<Container maxWidth='500px'>
  <Flex direction='row'>
    <Grid rows={3} columns={3}>
      // your content here
    </Grid>
  </Flex>
</Container>;
```

## 컴포넌트

### Container

- as: 렌더링할 HTML 요소를 지정합니다. 기본값은 "div"입니다.
- minWidth, maxWidth: 컨테이너의 최소/최대 너비를 설정합니다.
- sx: 인라인 스타일을 지정합니다.
- className: 미리 생성된 CSS 클래스를 추가합니다.

### Flex

- as: 렌더링할 HTML 요소를 지정합니다. 기본값은 "div"입니다.
- direction: Flexbox의 방향을 설정합니다.
- justify, align: Flexbox의 정렬 조건을 설정합니다.
- gap: 자식 요소 간의 간격을 설정합니다.
- sx: 인라인 스타일을 지정합니다.
- className: 미리 생성된 CSS 클래스를 추가합니다.

### Grid

- as: 렌더링할 HTML 요소를 지정합니다. 기본값은 "div"입니다.
- rows, columns: 그리드의 행과 열을 설정합니다.
- sx: 인라인 스타일을 지정합니다.
- className: 미리 생성된 CSS 클래스를 추가합니다.

## className

### 모든 컴포넌트에 공통으로 적용할 수 있습니다

- 지정된 `width`, `height` class를 사용할 수 있습니다

  - `className='h-12'`, `className='h-16'`, ...
  - `className='w-12'`, `className='w-16'`, ...

- `width`, `height`의 값을 커스텀할 수 있습니다
  - `className='w-[30px]'`
  - `className='h-[30px]'`

### Flex 컴포넌트

- center를 적용할 수 있습니다
  - `className='center'`

## 스토리북

[링크](https://650802364cf3ffbe00439014-lhxqwkzegk.chromatic.com/?path=/story/components-container--container)

스토리북을 이용하여 컴포넌트를 실시간으로 확인하고 테스트할 수 있습니다.
