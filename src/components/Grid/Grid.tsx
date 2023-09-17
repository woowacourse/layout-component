import type { ContentSectioningTags } from '~/types';
import * as S from './Grid.styled';

export interface GridProps {
  children: React.ReactNode;
  rows: number;
  columns: number;
  as?: ContentSectioningTags;
  gap?: React.CSSProperties['gap'];
}

const Grid = (props: GridProps) => {
  const { children, rows, columns, as = 'div', gap = 0 } = props;

  return (
    <S.GridRoot rows={rows} columns={columns} as={as} gap={gap}>
      {children}
    </S.GridRoot>
  );
};

export default Grid;
