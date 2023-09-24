import { styled } from 'styled-components';
import { CommonStyleProps, CommonTag } from '../../style/common';
import { GridProps } from '.';

type ComponentProps = GridProps & CommonStyleProps;

const getGridTemplate = (value: string | number) => {
  if (typeof value === 'number') {
    return `repeat(${value}, 1fr)`;
  }

  return value;
};

export const Component = styled(CommonTag)<ComponentProps>`
  display: grid;
  grid-template-columns: ${({ columns = 1 }) => getGridTemplate(columns)};
  grid-template-rows: ${({ rows = 1 }) => getGridTemplate(rows)};

  gap: ${({ gap }) => gap};
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ columnGap }) => columnGap};
`;
