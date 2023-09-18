import { PropsWithChildren } from 'react';
import styled, { CSSProperties, css } from 'styled-components';

type Props = {
  rows: number;
  columns: number;
  gap?: CSSProperties['gap'];
  style?: CSSProperties;
};

const Grid = ({ children, style, ...rest }: PropsWithChildren<Props>) => {
  return (
    <StyledGrid style={style} {...rest}>
      {children}
    </StyledGrid>
  );
};

export default Grid;

const StyledGrid = styled.div<Props>`
  ${({ rows, columns, gap }) => css`
    grid-template-rows: repeat(${rows}, 1fr);
    grid-template-columns: repeat(${columns}, 1fr);
    grid-gap: ${gap};
  `};

  display: grid;
`;
