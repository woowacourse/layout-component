import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';

import { styled, css } from 'styled-components';

type GridItemProps = {
  $gridColumn?: CSSProperties['gridColumn'];
  $gridRow?: CSSProperties['gridRow'];
  align?: CSSProperties['alignSelf'];
  justify?: CSSProperties['justifySelf'];
} & HTMLAttributes<HTMLElement>;

function GridItem(props: PropsWithChildren<GridItemProps>) {
  const { children, ...layoutProps } = props;

  return <Item {...layoutProps}>{children}</Item>;
}

export default GridItem;

const Item = styled.div<GridItemProps>`
  ${({ $gridColumn, $gridRow, align, justify }) => css`
    grid-column: ${$gridColumn};
    grid-row: ${$gridRow};
    align-self: ${align};
    justify-self: ${justify};
  `}
`;
