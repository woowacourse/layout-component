import { PropsWithChildren } from 'react';
import styled, { CSSProperties, css } from 'styled-components';

type Props = {
  direction: CSSProperties['flexDirection'];
  justify: CSSProperties['justifyContent'];
  align: CSSProperties['alignItems'];
  gap: CSSProperties['gap'];
};

const Flex = ({ children, ...rest }: PropsWithChildren<Props>) => {
  return <StyledFlex {...rest}>{children}</StyledFlex>;
};

export default Flex;

const StyledFlex = styled.div<Props>`
  ${({ direction, justify, align, gap }) => css`
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
  `};

  display: flex;
`;
