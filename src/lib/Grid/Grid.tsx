import {
  CSSProperties,
  Children,
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
} from 'react';

import { styled, css } from 'styled-components';

import GridItem from './GridItem';
import { ResponsiveStyleType } from '../type';
import {
  calculateResponsiveGridTemplateStyle,
  calculateResponsiveStyle,
  isCommonStyle,
} from '../utils';

type GridProps = {
  columns?: number | string | ResponsiveStyleType<number | string>;
  rows?: number | string | ResponsiveStyleType<number | string>;
  gap?: CSSProperties['gap'] | ResponsiveStyleType<CSSProperties['gap']>;
  align?:
    | CSSProperties['alignItems']
    | ResponsiveStyleType<CSSProperties['alignItems']>;
  justify?:
    | CSSProperties['justifyItems']
    | ResponsiveStyleType<CSSProperties['justifyItems']>;
} & HTMLAttributes<HTMLElement>;

function Grid(props: PropsWithChildren<GridProps>) {
  const { children, ...layoutProps } = props;

  const gridItemChildren = Children.map(children, (child) => {
    const item = child as ReactElement;
    if (item.type !== GridItem) {
      console.error(
        'Grid.Item 컴포넌트를 사용하면 Grid을 더욱 쉽고 편리하게 활용할 수 있습니다.'
      );
    }
    return child;
  });

  return <Layout {...layoutProps}>{gridItemChildren}</Layout>;
}

Grid.Item = GridItem;

export default Grid;

const Layout = styled.div<GridProps>`
  display: grid;

  ${({ columns, rows, gap, align, justify }) => css`
    grid-template-columns: ${isCommonStyle<number | string>(columns) &&
    typeof columns === 'number'
      ? `repeat(${columns}, 1fr)`
      : typeof columns === 'string' && columns};
    grid-template-rows: ${isCommonStyle<number | string>(rows) &&
    typeof rows === 'number'
      ? `repeat(${rows}, 1fr)`
      : typeof rows === 'string' && rows};
    gap: ${isCommonStyle<CSSProperties['gap']>(gap) && gap};
    align-items: ${isCommonStyle<CSSProperties['alignItems']>(align) && align};
    justify-items: ${isCommonStyle<CSSProperties['alignItems']>(justify) &&
    justify};

    ${calculateResponsiveGridTemplateStyle('grid-template-columns', columns)}
    ${calculateResponsiveGridTemplateStyle('grid-template-rows', rows)}
    ${calculateResponsiveStyle('gap', gap)}
    ${calculateResponsiveStyle('align', align)}
    ${calculateResponsiveStyle('justify', justify)}
  `}
`;
