import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';

import { styled, css } from 'styled-components';
import { calculateResponsiveStyle, isCommonStyle } from '../utils';
import { ResponsiveStyleType } from '../type';

type FlexItemProps = {
  align?:
    | CSSProperties['alignSelf']
    | ResponsiveStyleType<CSSProperties['alignSelf']>;
  justify?:
    | CSSProperties['justifySelf']
    | ResponsiveStyleType<CSSProperties['justifySelf']>;
} & HTMLAttributes<HTMLElement>;

function FlexItem(props: PropsWithChildren<FlexItemProps>) {
  const { children, ...layoutProps } = props;

  return <Item {...layoutProps}>{children}</Item>;
}

export default FlexItem;

const Item = styled.div<FlexItemProps>`
  ${({ align, justify }) => css`
    align-self: ${isCommonStyle<CSSProperties['alignSelf']>(align) && align};
    justify-self: ${isCommonStyle<CSSProperties['justifySelf']>(justify) &&
    justify};

    ${calculateResponsiveStyle('align-self', align)}
    ${calculateResponsiveStyle('justify-self', justify)}
  `}
`;
