import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

import { styled, css } from 'styled-components';
import { ResponsiveStyleType } from '../types/type';
import { calculateResponsiveStyle, isCommonStyle } from '../utils/utils';

type GridItemProps = {
  /**
   * HTML Tag를 지정하는 속성
   *
   *  * @default 'div'
   */
  tag?: ElementType;
  /**
   * Grid Item의 열의 시작과 끝 위치를 지정하는 속성
   *
   *  * @default undefined
   */
  column?:
    | CSSProperties['gridColumn']
    | ResponsiveStyleType<CSSProperties['gridColumn']>;
  /**
   * Grid Item의 행의 시작과 끝 위치를 지정하는 속성
   *
   *  * @default undefined
   */
  row?:
    | CSSProperties['gridRow']
    | ResponsiveStyleType<CSSProperties['gridRow']>;
  /**
   * 단일 그리드 아이템을 수직 정렬하는 속성
   *
   *  * @default 'stretch'
   */
  align?:
    | CSSProperties['alignSelf']
    | ResponsiveStyleType<CSSProperties['alignSelf']>;
  /**
   * 단일 그리드 아이템을 수평 정렬하는 속성
   *
   *  * @default 'stretch'
   */
  justify?:
    | CSSProperties['justifySelf']
    | ResponsiveStyleType<CSSProperties['justifySelf']>;
} & ComponentPropsWithoutRef<ElementType>;

function GridItem({
  children,
  tag,
  column,
  row,
  align,
  justify,
  ...rest
}: PropsWithChildren<GridItemProps>) {
  const styleProps = { column, row, justify, align };

  return (
    <Item as={tag} {...rest} {...styleProps}>
      {children}
    </Item>
  );
}

export default GridItem;

const Item = styled.div<GridItemProps>`
  ${({ column, row, align, justify }) => css`
    grid-column: ${isCommonStyle<CSSProperties['gridColumn']>(column) &&
    column};
    grid-row: ${isCommonStyle<CSSProperties['gridRow']>(row) && row};
    align-self: ${isCommonStyle<CSSProperties['alignSelf']>(align) && align};
    justify-self: ${isCommonStyle<CSSProperties['justifySelf']>(justify) &&
    justify};

    ${calculateResponsiveStyle('grid-column', column)}
    ${calculateResponsiveStyle('grid-row', row)}
    ${calculateResponsiveStyle('align-self', align)}
    ${calculateResponsiveStyle('justify-self', justify)}
  `}
`;
