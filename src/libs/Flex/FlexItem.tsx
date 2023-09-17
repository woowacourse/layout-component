import { CSSProperties, HTMLAttributes, PropsWithChildren } from 'react';

import { styled, css } from 'styled-components';

type FlexItemProps = {
  align?: CSSProperties['alignSelf'];
  justify?: CSSProperties['justifySelf'];
} & HTMLAttributes<HTMLElement>;

function FlexItem(props: PropsWithChildren<FlexItemProps>) {
  const { children, ...layoutProps } = props;

  return <Item {...layoutProps}>{children}</Item>;
}

export default FlexItem;

const Item = styled.div<FlexItemProps>`
  ${({ align, justify }) => css`
    align-self: ${align};
    justify-self: ${justify};
  `}
`;
