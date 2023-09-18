import {
  CSSProperties,
  HTMLProps,
  PropsWithChildren,
  ReactHTML,
  createElement,
} from 'react';

interface GridProps<T extends keyof ReactHTML> extends HTMLProps<T> {
  /** 태그(tag) 프로퍼티는 ReactHTML의 키(key) 중 하나를 가질 수 있습니다. 이 프로퍼티는 Flex 컴포넌트가 렌더링될 때 사용되는 HTML 요소의 태그를 지정하는데 사용됩니다. */
  tag?: T;
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

const Grid = <T extends keyof ReactHTML>(
  props: PropsWithChildren<GridProps<T>>
) => {
  const {
    children,
    tag = 'div',
    row,
    column,
    rowGap,
    columnGap,
    style,
    ...restProps
  } = props;

  const resolvedProps: Pick<GridProps<T>, 'style'> = {
    style: {
      display: 'grid',
      gridTemplateRows: row,
      gridTemplateColumns: column,
      rowGap,
      columnGap,
      ...style,
    },
    ...restProps,
  };

  return createElement(tag, resolvedProps, children);
};

export default Grid;
