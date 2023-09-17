import { PropsWithChildren } from 'react';
import styled, { CSSProperties, css } from 'styled-components';

type Props = {
  rows: number;
  columns: number;
  gap?: CSSProperties['gap'];
};

const Grid = ({ children, ...rest }: PropsWithChildren<Props>) => {
  return <StyledGrid {...rest}>{children}</StyledGrid>;
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
