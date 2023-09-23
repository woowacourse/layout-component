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

const defaultStyle = css<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledFlex = styled.div<Props>`
  ${defaultStyle}
  ${({ direction, justify, align, gap }) => css`
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
  `};

  display: flex;
`;
