import { PropsWithChildren } from 'react';
import styled, { CSSProperties, css } from 'styled-components';

type Props = {
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  gap?: CSSProperties['gap'];
  style?: CSSProperties;
};

const Flex = ({ children, style, ...rest }: PropsWithChildren<Props>) => {
  return (
    <StyledFlex style={style} {...rest}>
      {children}
    </StyledFlex>
  );
};

export default Flex;

const StyledFlex = styled.div<Props>`
  ${({ direction = 'row', justify = 'center', align = 'center', gap }) => css`
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
  `};

  display: flex;
`;
