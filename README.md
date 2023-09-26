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

### TabList

`TabButton`을 감싸는 컴포넌트 입니다. 해당 컴포넌트를 부모 컴포넌트로 설정하고 자식으로 `TabButton`을 설정할 수 있습니다.

- justify: 탭 버튼의 위치를 조절할 수 있습니다.
- onClick: 탭 버튼 클릭에 대한 click handler입니다.
- moveButton: 탭이 width를 초과할 때 좌,우로 스크롤 하는 버튼을 추가할지 여부를 결정합니다.
- customCss: 이외에 개인적으로 디자인을 추가할 수 있습니다.

### TabButton

사용자가 직접 지정한 탭 버튼입니다. `TabList`안에서 사용할 수 있습니다.

- label: 탭의 이름을 나타냅니다.;
- order: 탭의 고유 값을 나타냅니다.;
- value: 현재 활성화 된 탭의 값을 나타냅니다.;
- disabled: 사용하지 않을 탭을 설정합니다.;

### TabPanels

`TabPanel`이 들어갈 부모 컴포넌트 입니다. 굳이 사용하지 않아도 됩니다.

### TabPanel

`TabButton`과 1:1로 매핑되는 컴포넌트 입니다.
order: `TabButton`에 작용된 고유 값입니다.
value: 현재 활성화 된 `TabButton`을 나타냅니다.

### useChangeTab

`TabButton`에 들어갈 고유 값과 click handler를 반환하는 custom hook입니다.

#### input

- tabs: tab에 들어갈 문자열들을 배열로 받습니다.
- changeCallback?: 탭을 클릭하고 난 다음에 실행할 callback 입니다.

#### output

- ids: `TabButton`과 `TabPanel`의 `order`에 들어갈 고유한 값입니다. 매칭하고 싶은 `button`과 `panel`에 같은 값을 할당하면 됩니다.
- handleClick: 탭 버튼을 클릭했을 때 실행되는 handler입니다. `TabList`에 onClick으로 할당하면 됩니다.
- current: 현재 실행되고 있는 값을 의미합니다. `TabButton`과 `TabPanel`의 `value`에 할당하면 됩니다.

```tsx
	const tabs = [
		'active',
		'active',
		'active'
	]
	const { ids, current, handleClick } = useChangeTab({ tabs });

	const tabMenu = tabs.map((content, index) => (

	));

	return (
		<div style={{ width: 520 }}>
			<TabList onClick={handleClick}>
				<TabButton label='active' order={ids[0]} value={current} />
				<TabButton label='active' order={ids[1]} value={current} />
				<TabButton label='active' order={ids[2]} value={current} />
			</TabList>
			<TabPanels>
					<TabPanel value={current} order={ids[0]}>1번 탭</TabPanel>
					<TabPanel value={current} order={ids[1]}>2번 탭</TabPanel>
					<TabPanel value={current} order={ids[2]}>3번 탭</TabPanel>
			</TabPanels>
		</div>
	)

```

## 사용 방법

```tsx
import {
	Grid,
	Flex,
	Container,
	TabList,
	TabButton,
	TabPanels,
	TabPanel,
	useChangeTab,
} from '@hozzijeong/layout-component';
```

위와 같이 import 한 다음에 각각의 사용 안내에 따라 사용하시면 됩니다.

### 에러나 버그는 [issue](https://github.com/hozzijeong/layout-component/issues)에 등록해주세요!
