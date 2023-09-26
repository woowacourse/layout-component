# 🙆‍♂️ seeen-tab-layout 🙆‍♂️

간단하게 레이아웃(Container, Flex, Grid, Drawer)를 구현할 수 있는 라이브러리 입니다.

## 설치 방법

    # npm
    $ npm install seeen-tab-layout

    # yarn
    $ yarn add seeen-tab-layout

## 사용 방법

### Tabs

- 여러 개의 Tab을 담는 Container 역할의 컴포넌트입니다. 이 컴포넌트에 아래와 같은 옵션을 설정할 수 있습니다. Tabs 컴포넌트만 사용하여 Tab Index 기능을 구현할 수 있지만, Tab Index Box에 숫자 대신 이름을 넣고자 한다면 Tab 컴포넌트를 사용하여 label 속성에 이름을 명시해주어야 합니다.

```tsx
import { Tabs } from 'seeen-tab-layout';

const App = () => {
  return (
    <Tabs width={600} responsive>
      <div>content1</div>
      <div>content2</div>
      <div>content3</div>
    </Tabs>
  );
};
```

#### Props

| props         | value     | essential | default     | description                                                              |
| ------------- | --------- | --------- | ----------- | ------------------------------------------------------------------------ |
| width         | number    | optional  | 400         | Tab Layout 가로 크기를 설정합니다.                                       |
| height        | number    | optional  | 400         | Tab Layout 세로 크기를 설정합니다.                                       |
| $tabBoxHeight | number    | optional  | height / 10 | Tab index box 세로 크기를 설정합니다. 가로 크기는 Tab Layout과 같습니다. |
| $simpleTab    | boolean   | optional  | false       | Tab index box 를 간단하게 표현할 지 설정합니다.                          |
| responsive    | boolean   | optional  | false       | 반응형에 대응할 여부를 설정합니다.                                       |
| swiper        | boolean   | optional  | false       | 좌, 우로 넘길 수 있는 화살표 버튼을 표시할 지 설정합니다.                |
| children      | ReactNode | essential | null        | Tab Layout 콘텐츠를 설정합니다.                                          |

## Tab

- 개별 Tab의 역할을 하는 컴포넌트입니다. 이 컴포넌트에 label을 통해 tab index box에 숫자 대신 이름을 명시할 수 있습니다. 이 컴포넌트 내부에 Tab Index에 사용할 실질적인 구현부를 작성하면 됩니다.

```tsx
import { Tabs, Tab } from 'seeen-tab-layout';

const App = () => {
  return (
    <Tabs width={1200} responsive>
      <Tab label="main page">
        <MainPage />
      </Tab>
      <Tab label="my page">
        <MyPage />
      </Tab>
    </Tabs>
  );
};
```

### Props

| props | value  | essential | default | description                                          |
| ----- | ------ | --------- | ------- | ---------------------------------------------------- |
| label | string | essential |         | Tab Index Box에 숫자 (index) 대신 이름을 명시합니다. |

## 스토리북 배포 링크

[seeen-tab-layout-storybook](https://65127eae0e98643d69097dab-tvjifvtvsk.chromatic.com/)

## 참고 사항(고려한 부분 및 사용자 사용팁)

쉽게 사용하면서 필요할 법한 기능을 고려하였습니다. 보통의 Tab Layout이 갖춰야할 기능을 갖추면서 좌, 우 스와이프 버튼 등 사용자가 커스터마이징을 할 수 있는 요소를 추가하였습니다.

Tab Layout 부모 컴포넌트 (Tabs) 에 자식 컴포넌트 (Tab) 이 몇 개인지 명시하지 않아도 children 개수를 자동으로 파악하여 정렬할 수 있도록 하였습니다.

## 개발 환경

- React(vite)
- TypeScript
- styled-components
