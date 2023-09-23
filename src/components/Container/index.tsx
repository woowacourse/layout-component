import { PropsWithChildren } from 'react';
import styled, { CSSProperties, css } from 'styled-components';

type Props = {
  /**
   * Container의 min-width 속성
   *
   * @default 'auto'
   */
  minWidth?: CSSProperties['minWidth'];
  /**
   * Container의 max-width 속성
   *
   * @default 'auto'
   */
  maxWidth?: CSSProperties['maxWidth'];
};

const Container = ({ children, ...rest }: PropsWithChildren<Props>) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div<Props>`
  ${({ minWidth, maxWidth }) => css`
    min-width: ${minWidth};
    max-width: ${maxWidth};
  `};

  margin: 0 auto;
`;
