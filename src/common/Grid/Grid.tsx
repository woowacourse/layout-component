import styled from '@emotion/styled';

import Container from '../Container';
import type { BasicLayoutProps } from '../FlexContainer/FlexContainer';
import { gapStyle } from '../FlexContainer/style';
import { gridItemRepeatStyle } from './style';

export interface GridProps extends BasicLayoutProps {
  rows?: number | string;
  columns?: number | string;
  columnSize?: number | string;
  rowSize?: number | string;
  item?: boolean;
  areaName?: string;
  templateAreas?: string;
}

const StyledGridContainer = styled(Container)`
  display: grid;
`;

const Grid = ({
  gap,
  rowGap,
  columnGap,
  rows,
  columns,
  columnSize,
  rowSize,
  item = false,
  areaName = '',
  templateAreas,
  ...attributes
}: GridProps) => {
  return (
    <StyledGridContainer
      css={[
        { gridTemplateAreas: templateAreas },
        gapStyle({ gap, rowGap, columnGap }),
        gridItemRepeatStyle({ rows, columns, rowSize, columnSize }),
        item && {
          display: 'initial',
          gridArea: areaName,
        },
      ]}
      {...attributes}
    />
  );
};

export default Grid;
