import { CSSProperties, ElementType, createElement } from 'react';
import { Props } from '../types/props';

type GridProps = {
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
};

const Grid = <T extends ElementType = 'div'>(props: Props<T, GridProps>) => {
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

  const resolvedStyle: GridProps['style'] = {
    display: 'grid',
    gridTemplateRows: row,
    gridTemplateColumns: column,
    rowGap,
    columnGap,
    ...style,
  };

  return createElement(tag, { style: resolvedStyle, ...restProps }, children);
};

export default Grid;
