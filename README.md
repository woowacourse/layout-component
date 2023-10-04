### Storybook와 NPM 패키지 정보
- **라이브 스토리북**: [Storybook](https://step2--incredible-selkie-3c034a.netlify.app/)
- **NPM 패키지**: [react-tabs-booung](https://www.npmjs.com/package/react-tabs-booung)

# 설치

```bash
npm install react-tabs-booung
```

# Tabs 컴포넌트

Tabs는 탭 기반의 콘텐츠 레이아웃을 쉽게 구성할 수 있게 도와주는 컴포넌트입니다.

## 사용법

다음과 같이 사용할 수 있습니다.

```tsx
import { Tab, TabList, TabPanel, Tabs, TabPanelList } from 'react-tabs-booung';

const App = () => {
return (
<Tabs>
<TabList>
<Tab name={'first'}>
<h3>first</h3>
</Tab>
<Tab name={'second'}>
<h3>second</h3>
</Tab>
</TabList>

      <TabPanelList>
        <TabPanel name={'first'}>
          <div>first Panel</div>
        </TabPanel>
        <TabPanel name={'second'}>
          <div>second Panel</div>
        </TabPanel>
      </TabPanelList>
    </Tabs>
);
};
```

## API

### Props

| Prop         | Type            | Description                                        | Default Value |
|--------------|-----------------|----------------------------------------------------|---------------|
| className    | string          | 컴포넌트에 적용할 클래스명입니다.                    | `''`          |
| defaultFocus | boolean         | 초기 렌더링 시 탭에 포커스를 줄지 여부입니다.          | `false`       |
| defaultIdx   | string| 초기 렌더링 시 어떤 탭이 활성화될지를 결정합니다.        | `0`           |
