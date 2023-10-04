# Woody's TabLayout Component

[storybook](https://6510550a5afe400b2279aaa9-etfedzaqgg.chromatic.com/?path=/docs/tablayout--docs)

[github](https://github.com/evencoding/layout-component/tree/step2)

[npm](https://www.npmjs.com/package/woody-tab-layout-component)

## 설치

```bash
npm install tab-layout-component
```

공식문서에 따라 Tailwind를 설치합니다 - [Tailwind 공식문서](https://tailwindcss.com/docs/installation)

## 사용법

패키지에서 TabLayout 컴포넌트를 가져와서 컴포넌트에서 사용하세요

```jsx
import { TabLayout } from 'tab-layout-component';

const MyApp = () => {
  return (
    <TabLayout tabs={['탭 1', '탭 2', '탭 3']} tabPosition='left' activeButtonColor='#0067A3'>
      <div>콘텐츠1</div>
      <div>콘텐츠2</div>
      <div>콘텐츠3</div>
    </TabLayout>
  );
};

export default MyApp;
```

## API

### TabLayoutProps

- tabs (Tabs): 각 탭은 문자열 또는 숫자로 표시되는 탭 배열입니다.

  - Tabs 타입은 (number | string)[]으로 정의되어 있어 문자열 또는 숫자 또는 둘 다의 배열을 의미합니다.

- className (string, optional): 추가할 미리 정의된 CSS 클래스 이름입니다.

- tabPosition (TabPosition, optional): 탭의 위치입니다. 기본값은 'top'입니다.

  - TabPosition 타입은 다음 값 중 하나일 수 있습니다: 'top', 'bottom', 'left', 'right'.

- activeColor (string, optional): 활성 탭 버튼의 색상입니다.

```jsx
<TabLayout
  tabs={['탭 1', '탭 2', '탭 3']}
  className='border-2 border-gray-300'
  tabPosition='left'
  activeColor='#0067A3'
>
  <div>콘텐츠1</div>
  <div>콘텐츠2</div>
  <div>콘텐츠3</div>
</TabLayout>
```

## 기여

TabLayout 컴포넌트를 개선하기 위해 문제를 제기하거나 풀 리퀘스트를 열어 주시기 바랍니다. 모든 기여를 환영합니다!
