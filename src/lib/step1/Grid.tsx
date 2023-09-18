import React from 'react';
import styled from 'styled-components';

interface Props {
  rows?: number;
  cols?: number;
  gap?: string | number;
}

const Grid = ({
  rows,
  cols,
  gap,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <Style.Grid $rows={rows} $cols={cols} $gap={gap}>
      {children}
    </Style.Grid>
  );
};

export default Grid;

const Style = {
  Grid: styled.div<{
    $cols?: number;
    $rows?: number;
    $gap?: string | number;
  }>`
    display: grid;
    grid-template-rows: repeat(${(props) => props.$rows}, 1fr);
    grid-template-columns: repeat(${(props) => props.$cols}, 1fr);
    gap: ${(props) => props.$gap};

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  `,
};
