import { styled } from 'styled-components';
import { CommonStyleProps, CommonTag } from '../style/common';
import { _MasonryLayoutProps } from '.';

type ComponentProps = _MasonryLayoutProps & CommonStyleProps;

const getGridTemplate = (repeatValue: number, size: string) => {
  return `repeat(${repeatValue}, ${size})`;
};

export const Component = styled(CommonTag)<ComponentProps>`
  display: grid;
  grid-template-columns: ${({ columns = 1, columnSize = '1fr' }) =>
    getGridTemplate(columns, columnSize)};
  grid-template-rows: ${({ rows = 1, rowSize = '1fr' }) =>
    getGridTemplate(rows, rowSize)};

  gap: ${({ gap }) => gap};
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ columnGap }) => columnGap};
`;
