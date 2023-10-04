# react-tiny-layout

A Tiny, zero dependency layout components.

[![npm license](https://img.shields.io/npm/l/react-tiny-modal?style=flat-square)](https://github.com/Nfinished/react-tiny-modal/blob/master/LICENSE)
![requires react >=16.8](https://img.shields.io/npm/dependency-version/react-tiny-modal/peer/react?style=flat-square)

## API:

### Flex

**Contains all the parts of a Flex.**

```tsx
{
  /** 태그(tag) 프로퍼티는 ReactHTML의 키(key) 중 하나를 가질 수 있습니다. 이 프로퍼티는 Flex 컴포넌트가 렌더링될 때 사용되는 HTML 요소의 태그를 지정하는데 사용됩니다. */
  tag?: T;
  /** direction 프로퍼티는 Flex 컴포넌트의 주축 방향을 지정합니다. */
  direction?: CSSProperties['flexDirection'];
  /** justify 프로퍼티는 Flex 컴포넌트의 자식 요소들을 주축을 따라 정렬하는 방법을 지정합니다. */
  justify?: CSSProperties['justifyContent'];
  /** align 프로퍼티는 Flex 컴포넌트의 자식 요소들을 교차 축을 따라 정렬하는 방법을 지정합니다. */
  align?: CSSProperties['alignItems'];
  /** gap 프로퍼티는 Flex 컴포넌트 내의 자식 요소들 사이의 간격을 설정합니다. */
  gap?: string | number;
  /** style 프로퍼티는 Flex 컴포넌트에 적용할 CSS 스타일을 지정합니다. */
  style?: CSSProperties;
}
```

### Usage:

```tsx
import { Flex } from 'react-tiny-**layout**';

export default function Sample() {
  return (
    <Flex direction="column">
      <div>child1</div>
      <div>child2</div>
    </Flex>
  );
}
```

---

### Grid

**Contains all the parts of a Grid.**

```tsx
{
  /** 태그(tag) 프로퍼티는 ReactHTML의 키(key) 중 하나를 가질 수 있습니다. 이 프로퍼티는 Flex 컴포넌트가 렌더링될 때 사용되는 HTML 요소의 태그를 지정하는데 사용됩니다. */
  tag?: keyof ReactHTML;
  /** row 프로퍼티는 그리드 컨테이너의 행(row) 레이아웃을 설정합니다. */
  row?: CSSProperties['gridTemplateRows'];
  /** column 프로퍼티는 그리드 컨테이너의 열(column) 레이아웃을 설정합니다. */
  column?: CSSProperties['gridTemplateColumns'];
  /** rowGap 프로퍼티는 그리드 컨테이너의 행 간격을 설정합니다. */
  rowGap?: CSSProperties['rowGap'];
  /** rowGap 프로퍼티는 그리드 컨테이너의 열 간격을 설정합니다. */
  columnGap?: CSSProperties['columnGap'];
  /** style 프로퍼티는 Flex 컴포넌트에 적용할 CSS 스타일을 지정합니다. */
  style?: CSSProperties;
}
```

### Usage:

```tsx
import { Grid } from 'react-tiny-layout';

export default function Sample() {
  return (
    <Grid column="1fr 1fr 1fr">
      {Array(9)
        .fill('')
        .map((_, i) => (
          <div>child {i + 1}</div>
        ))}
    </Grid>
  );
}
```

---

### Container

**Contains all the parts of a Container.**

```tsx
{
  /** 태그(tag) 프로퍼티는 ReactHTML의 키(key) 중 하나를 가질 수 있습니다. */
  tag?: keyof ReactHTML;
  /** maxWidth 프로퍼티는 Flex 컴포넌트 내용물의 최대 너비를 제한합니다. */
  maxWidth?: CSSProperties['maxWidth'];
  /** minWidth 프로퍼티는 Flex 컴포넌트 내용물의 최소 너비를 지정합니다. */
  minWidth?: CSSProperties['minWidth'];
  /** style 프로퍼티는 Flex 컴포넌트에 적용할 CSS 스타일을 지정합니다. */
  style?: CSSProperties;
}
```

### Usage:

```tsx
import { Container } from 'react-tiny-layout';

export default function Sample() {
  return (
    <Container minWidth=300>
      <div>child1</div>
    </Container>
  );
}
```

---

### Tabs

**Contains all the parts of a Container.**

```tsx
{
  /** defaultValue 프로퍼티는 기본적으로 활성화 할 탭을 설정합니다. */
  defaultValue: string;
  /** onValueChange 프로퍼티는 탭이 변경될 때 실행됩니다. */
  onValueChange?: (value: string) => void;
  /** asChild 프로퍼티가 true인 경우 현재 엘리먼트를 자식 엘리먼트로 대체합니다. */
  asChild?: boolean;
}
```

### Usage:

```tsx
import { Tabs } from 'react-tiny-layout';

export default function Sample() {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">tab1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">tab2</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">panel1</Tabs.Content>
      <Tabs.Content value="tab2">panel2</Tabs.Content>
    </Tabs>
  );
}
```
