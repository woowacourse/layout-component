import { PropsWithChildren } from 'react';
import styled, { CSSProperties, css } from 'styled-components';

type Props = {
  minWidth?: CSSProperties['minWidth'];
  maxWidth?: CSSProperties['maxWidth'];
  style?: CSSProperties;
};

const Container = ({ children, style, ...rest }: PropsWithChildren<Props>) => {
  return (
    <StyledContainer style={style} {...rest}>
      {children}
    </StyledContainer>
  );
};

export default Container;

const StyledContainer = styled.div<Props>`
  ${({ minWidth, maxWidth = '100%' }) => css`
    min-width: ${minWidth};
    max-width: ${maxWidth};
  `};
  margin: auto;
`;
