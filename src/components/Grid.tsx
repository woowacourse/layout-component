import { ComponentPropsWithoutRef, ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

interface Props extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
  rows?: number;
  columns?: number;
  gap?: CSSProperties["gap"];
}

const Grid = ({ children, rows, columns, gap, ...rest }: Props) => {
  return (
    <S.Wrapper $rows={rows} $columns={columns} $gap={gap} {...rest}>
      {children}
    </S.Wrapper>
  );
};

export default Grid;

const S = {
  Wrapper: styled.div<{
    $rows?: number;
    $columns?: number;
    $gap?: CSSProperties["gap"];
  }>`
    display: grid;
    grid-template-rows: ${({ $rows }) => `repeat(${$rows}, 1fr)`};
    grid-template-columns: ${({ $rows }) => `repeat(${$rows}, 1fr)`};

    gap: ${({ $gap }) => $gap};
  `,
};
