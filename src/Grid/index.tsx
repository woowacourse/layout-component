import { assignInlineVars } from '@vanilla-extract/dynamic';
import { grid, rowCount, columnCount, gridGap } from './Grid.css';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  rows: number;
  columns: number;
  gap?: string;
}

const Grid = (props: React.PropsWithChildren<GridProps>) => {
  const { rows, columns, gap = '', children, className, style, ...rest } = props;
  return (
    <div
      className={`${className} ${grid}`}
      style={{
        ...style,
        ...assignInlineVars({
          [rowCount]: rows.toString(),
          [columnCount]: columns.toString(),
          [gridGap]: gap.toString(),
        }),
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Grid;
