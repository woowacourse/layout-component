import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';

import { styled, css } from 'styled-components';
import { ResponsiveStyleType } from '../type';
import { calculateResponsiveStyle, isCommonStyle } from '../utils';

type GridItemProps = {
  $gridColumn?:
    | CSSProperties['gridColumn']
    | ResponsiveStyleType<CSSProperties['gridColumn']>;
  $gridRow?:
    | CSSProperties['gridRow']
    | ResponsiveStyleType<CSSProperties['gridRow']>;
  align?:
    | CSSProperties['alignSelf']
    | ResponsiveStyleType<CSSProperties['alignSelf']>;
  justify?:
    | CSSProperties['justifySelf']
    | ResponsiveStyleType<CSSProperties['justifySelf']>;
} & HTMLAttributes<HTMLElement>;

function GridItem(props: PropsWithChildren<GridItemProps>) {
  const { children, ...layoutProps } = props;

  return <Item {...layoutProps}>{children}</Item>;
}

export default GridItem;

const Item = styled.div<GridItemProps>`
  ${({ $gridColumn, $gridRow, align, justify }) => css`
    grid-column: ${isCommonStyle<CSSProperties['gridColumn']>($gridColumn) &&
    $gridColumn};
    grid-row: ${isCommonStyle<CSSProperties['gridRow']>($gridRow) && $gridRow};
    align-self: ${isCommonStyle<CSSProperties['alignSelf']>(align) && align};
    justify-self: ${isCommonStyle<CSSProperties['justifySelf']>(justify) &&
    justify};

    ${calculateResponsiveStyle('grid-column', $gridColumn)}
    ${calculateResponsiveStyle('grid-row', $gridRow)}
    ${calculateResponsiveStyle('align-self', align)}
    ${calculateResponsiveStyle('justify-self', justify)}
  `}
`;
