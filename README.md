# Layout Component From @hozzijeong

## 설치

```cmd
  npm install @hozzijeong/layout-component
```

## 컴포넌트

@hozzijeong/layout-component에 있는 컴포넌트 설명입니다.

### Container

목적: 화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃입니다. `maxWidth`, `minWidth`를 통해 길이 설정을 할 수 있습니다.
그 외에도 `tag`를 통해 시맨틱 태그 설정(div, header, section, main 중 택 1)과 `customCss`을 통해 추가적인 CSS 작업이 가능합니다.

```tsx
<Container
	tag='div'
	minWidth='600px'
	maxWidth='960px'
	customCss={{
		background: 'black',
	}}
>
	{children}
</Container>
```

## Flex

CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트입니다. `direction`, `justify`, `align`, `wrap` 등의 타입을 통해 Flex Layout의 방향 정렬 등의 속성을 설정할 수 있습니다.
그 외에도 `tag`를 통해 시맨틱 태그 설정(div, header, section, main 중 택 1)과 `customCss`을 통해 추가적인 CSS 작업이 가능합니다.

```tsx
<Flex
	direction='row'
	justify='center'
	align='center'
	gap='5px'
	wrap='nowrap'
	customCss={{ width: '500px', height: '500px' }}
>
	<div> 1</div>
	<div> 2</div>
	<div> 3</div>
</Flex>
```

## Grid

CSS Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 컴포넌트를 제공합니다. `rows`, `cols`를 통해서 행과 열 개수 조절이 가능하고, `gap`을 통해 각 아이템 마다 위치 조정이 가능합니다.
또한 `rowLength`, `colLength`를 통해서 반복되는 행과 열의 길이 지정이 가능합니다.
그 외에도 `tag`를 통해 시맨틱 태그 설정(div, header, section, main 중 택 1)과 `customCss`을 통해 추가적인 CSS 작업이 가능합니다. \*현재 grid의 아이템들이 일정 크기로 반환되는 기능만을 제공하고 있습니다.

```tsx
<Grid
	tag='section'
	rows={3}
	cols={3}
	gap='10px'
	rowLength='200px'
	colLength='200px'
	customCss={{
		background: 'black',
	}}
>
	<div>1</div>
	<div>2</div>
	<div>3</div>
</Grid>
```

## Tab

여러 개의 컴포넌트 중 하나만 화면에 보여주고, 사용자가 선택한 탭에 따라 보여주는 컴포넌트를 변경합니다. 탭을 클릭하면 해당 탭의 내용만 볼 수 있고 탭의 순서와 이름을 조절할 수 있습니다.

### Tabs

`Tab Component`를 사용할 때 최상위에 선언해야 하는 컴포넌트 입니다.

- customCss: 개인적으로 디자인을 추가할 수 있습니다.
- direction: `vertical` | `horizon`으로 탭을 수직으로 볼 것인지, 수평으로 볼 것인지 설정할 수 있습니다 (optional, default: `horizon`)

### Tabs.List

`Tabs Component`안에서 선언되는 컴포넌트 입니다. 콘텐츠의 title을 저장하는 역할을 합니다.

- items: 각각의 `Tab`을 나타내는 prop입니다. 아래 특성들을 가진 배열을 받습니다.
  - id: 해당 탭을 나타내는 고유 id입니다.
  - title: 해당 탭의 이름을 나타냅니다.
  - disable: 사용하지 않을 탭을 설정합니다. (optional)
- justify: 탭 버튼의 위치를 조절할 수 있습니다.
- moveButton: 탭이 width를 초과할 때 좌,우로 스크롤 하는 버튼을 추가할지 여부를 결정합니다.
- customCss: 이외에 개인적으로 디자인을 추가할 수 있습니다.
- color: 선택된 탭의 색을 변경할 수 있습니다 (optional, default `green`)

### Tabs.Contents

`Tabs.List`에 맞춰서 보여줄 content입니다.

- items: 각각의 `Tab`의 `content`를 나타내는 prop입니다. 아래 특성들을 가진 배열을 받습니다.

```tsx
const tabs = Array.from({ length: 20 }).map((_, index) => ({
	id: `${index}`,
	title: `${index + 1}번 탭`,
	content: `${index + 1}번 탭`,
}));

const contents = tabs.map(({ id, content }) => ({ id, content }));

return (
	<Tabs customCss={{ width: 520 }}>
		<Tabs.Lists items={tabs} color='blue' moveButton />
		<Tabs.Contents items={contents} />
	</Tabs>
);
```

## 사용 방법

```tsx
import { Grid, Flex, Container, Tabs } from '@hozzijeong/layout-component';
```

위와 같이 import 한 다음에 각각의 사용 안내에 따라 사용하시면 됩니다.

### 에러나 버그는 [issue](https://github.com/hozzijeong/layout-component/issues)에 등록해주세요!
