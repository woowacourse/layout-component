<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/source/skype/289/straight-ruler_1f4cf.png"/>
</p>
<h2 align="middle">누구나 사용할 수 있는 bobs-layout</h2>
<br/>

## 간단한 Layout Components Library입니다.

### 설치 방법

`npm i bobs-layout`  
`yarn add bobs-layout`

### Components

- Container
- Flex
- Grid

### import style

`import { Container, Flex, Grid } from 'bobs-layout'`

---

### Container

화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 컴포넌트

| props           | Type                                     | Default | Description                                                                        |
| --------------- | ---------------------------------------- | ------- | ---------------------------------------------------------------------------------- |
| as              | `React.ElementType`                      | -       | Container 컴포넌트의 `HTML Tag`. Tag에 맞춰 `attributes`의 자동 완성이 지원됩니다. |
| maxWidth        | `React.CSSProperties['maxWidth']`        | '100%'  | Content(children)의 최대 너비                                                      |
| minWidth        | `React.CSSProperties['minWidth']`        | -       | Content(children)의 최소 너비                                                      |
| backgroundColor | `React.CSSProperties['backgroundColor']` | -       | Container 컴포넌트의 배경색                                                        |
| css             | `React.CSSProperties`                    | -       | 추가 스타일링을 위한 prop                                                          |

---

### Flex

CSS FlexBox를 활용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트

| props     | Type                                    | Default    | Description                                                                   |
| --------- | --------------------------------------- | ---------- | ----------------------------------------------------------------------------- |
| as        | `React.ElementType`                     | -          | Flex 컴포넌트의 `HTML Tag`. Tag에 맞춰 `attributes`의 자동 완성이 지원됩니다. |
| direction | `React.CSSProperties['flexDirection']`  | row        | item의 주 축                                                                  |
| justify   | `React.CSSProperties['justifyContent']` | flex-start | 주 축의 정렬 방법                                                             |
| align     | `React.CSSProperties['alignItems']`     | stretch    | 교차 축의 정렬 방법                                                           |
| gap       | `React.CSSProperties['gap']`            | -          | item 사이의 간격                                                              |
| wrap      | `React.CSSProperties['wrap']`           | nowrap     | Items의 줄 바꿈                                                               |
| css       | `React.CSSProperties`                   | -          | 추가 스타일링을 위한 prop                                                     |

---

### Grid

CSS Grid를 활용하여 자식 컴포넌트들을 격자 형태로 배열하는 컴포넌트

| props     | Type                                         | Default | Description                                                                   |
| --------- | -------------------------------------------- | ------- | ----------------------------------------------------------------------------- |
| as        | `React.ElementType`                          | -       | Grid 컴포넌트의 `HTML Tag`. Tag에 맞춰 `attributes`의 자동 완성이 지원됩니다. |
| rows      | `React.CSSProperties['gridTemplateRows']`    | -       | 트랙의 행 배치                                                                |
| columns   | `React.CSSProperties['gridTemplateColumns']` | -       | 트랙의 열 배치                                                                |
| area      | `React.CSSProperties['gridTemplateAreas']`   | -       | 영역 배치                                                                     |
| rowGap    | `React.CSSProperties['rowGap']`              | -       | 행 셀 사이의 간격                                                             |
| columnGap | `React.CSSProperties['columnGap']`           | -       | 열 셀 사이의 간격                                                             |
| gap       | `React.CSSProperties['gap']`                 | -       | 셀 사이의 간격                                                                |
| css       | `React.CSSProperties`                        | -       | 추가 스타일링을 위한 prop                                                     |

### Grid.Item

Grid 컴포넌트의 자식 컴포넌트

| props | Type                              | Default | Description                                                                        |
| ----- | --------------------------------- | ------- | ---------------------------------------------------------------------------------- |
| as    | `React.ElementType`               | -       | Container 컴포넌트의 `HTML Tag`. Tag에 맞춰 `attributes`의 자동 완성이 지원됩니다. |
| area  | `React.CSSProperties['gridArea']` | -       | `template-areas` 속성에서 정의한 영역 이름에 매칭할 `item 이름`                    |
| css   | `React.CSSProperties`             | -       | 추가 스타일링을 위한 prop                                                          |

---

### Parallax

시차를 적용한 Parallax 컴포넌트(컨테이너)

| props  | Type                            | Default | Description                        |
| ------ | ------------------------------- | ------- | ---------------------------------- |
| image  | `string`                        | -       | 컨테이너의 고정 배경의 경로입니다. |
| height | `React.CSSProperties['height']` | '100vh' | 컨테이너의 높이                    |
| css    | `React.CSSProperties`           | -       | 추가 스타일링을 위한 prop          |

### Parallax.Item

Parallax 자식 컴포넌트

| props | Type                           | Default | Description                               |
| ----- | ------------------------------ | ------- | ----------------------------------------- |
| speed | `number`                       | -       | 배경 스크롤 속도(높을 수록 빠르게 지나감) |
| image | `string`                       | -       | 겹쳐질 배경의 이미지 경로입니다.          |
| inset | `React.CSSProperties['inset']` | '0'     | Item 배경의 위치 상세조정을 위한 prop     |
| css   | `React.CSSProperties`          | -       | 추가 스타일링을 위한 prop                 |

### type reference

[1. React.CSSProperties](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1623)  
[2. csstype](https://github.com/frenic/csstype/blob/master/index.d.ts)
