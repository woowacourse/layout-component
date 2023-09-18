import { ComponentPropsWithoutRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface GridProps extends ComponentPropsWithoutRef<'div'> {
  rows?: number;
  columns?: number;
  gap?: { row: string; column: string };
  children?: ReactNode;
}

const Grid = ({ rows, columns, gap, children }: GridProps) => {
  return (
    <Wrapper rows={rows} columns={columns} gap={gap}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<GridProps>`
  display: grid;

  ${({ columns }) =>
    columns &&
    css`
      grid-template-columns: ${'1fr '.repeat(columns).trim()};
    `}

  ${({ rows }) =>
    rows &&
    css`
      grid-template-rows: ${'1fr '.repeat(rows).trim()};
    `}

    ${({ gap }) =>
    gap &&
    css`
      grid-column-gap: ${gap.column};
      grid-row-gap: ${gap.row};
    `}
`;

export default Grid;
