import type { CSSInterpolation } from '@emotion/serialize';
import type { ContentSectioningTags } from '~/types';
import * as S from './Grid.styled';

export interface GridProps {
  children: React.ReactNode;
  rows: number;
  columns: number;
  as?: ContentSectioningTags;
  gap?: React.CSSProperties['gap'];
  css?: CSSInterpolation;
}

export const Grid = (props: GridProps) => {
  const { children, rows, columns, as = 'div', gap = 0, css } = props;

  return (
    <S.GridRoot rows={rows} columns={columns} as={as} gap={gap} css={css}>
      {children}
    </S.GridRoot>
  );
};
