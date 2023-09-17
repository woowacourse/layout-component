import { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'div'> {
  rows?: number;
  columns?: number;
  rowTrackList?: string;
  columnTrackList?: string;
  rowGap?: string;
  columnGap?: string;
}

const Grid = ({
  rows,
  columns,
  rowTrackList = '1fr',
  columnTrackList = '1fr',
  rowGap,
  columnGap,
  children,
  ...attributes
}: Props) => {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateRows: `repeat(${rows ?? 'auto-fill'}, ${rowTrackList})`,
    gridTemplateColumns: `repeat(${
      columns ?? 'auto-fill'
    }, ${columnTrackList})`,
    columnGap,
    rowGap,
  };

  return (
    <div style={gridContainerStyle} {...attributes}>
      {children}
    </div>
  );
};

export default Grid;
