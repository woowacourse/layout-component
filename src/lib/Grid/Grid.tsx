import {
  CSSProperties,
  Children,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  ReactElement,
} from 'react';

import { styled, css } from 'styled-components';

import GridItem from './GridItem';
import { ResponsiveStyleType } from '../types/type';
import {
  calculateResponsiveGridTemplateStyle,
  calculateResponsiveStyle,
  isCommonStyle,
} from '../utils/utils';

type GridProps = {
  /**
   * HTML Tag를 지정하는 속성
   *
   *  * @default 'div'
   */
  tag?: ElementType;
  /**
   *  Grid Container 열(Track)의 크기를 정의하는 속성
   *
   *  * @default 'none'
   */
  columns?: number | string | ResponsiveStyleType<number | string>;
  /**
   *  Grid Container 행(Track)의 크기를 정의하는 속성
   *
   *  * @default 'none'
   */
  rows?: number | string | ResponsiveStyleType<number | string>;
  /**
   *  행과 열 사이의 간격을 설정하는 속성
   *
   *  * @default '0px'
   */
  gap?: CSSProperties['gap'] | ResponsiveStyleType<CSSProperties['gap']>;
  /**
   *  Grid Item의 수직 방향 정렬 방식을 결정하는 속성
   *
   *  * @default 'stretch'
   */
  align?:
    | CSSProperties['alignItems']
    | ResponsiveStyleType<CSSProperties['alignItems']>;
  /**
   *  Grid Item의 수평 방향 정렬 방식을 결정하는 속성
   *
   *  * @default 'stretch'
   */
  justify?:
    | CSSProperties['justifyItems']
    | ResponsiveStyleType<CSSProperties['justifyItems']>;
} & ComponentPropsWithoutRef<ElementType>;

function Grid({
  children,
  tag,
  columns,
  rows,
  gap,
  align,
  justify,
  ...rest
}: PropsWithChildren<GridProps>) {
  const styleProps = { columns, rows, gap, align, justify };

  const gridItemChildren = Children.map(children, (child) => {
    const item = child as ReactElement;
    if (item.type !== GridItem) {
      console.warn(
        'Grid.Item 컴포넌트를 사용하면 Grid을 더욱 쉽고 편리하게 활용할 수 있습니다.'
      );
    }
    return child;
  });

  return (
    <Layout as={tag} {...rest} {...styleProps}>
      {gridItemChildren}
    </Layout>
  );
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
