import type { HTMLAttributes, ReactNode, CSSProperties } from 'react';
import type { Size } from '../../types';
import { stringifySize } from '../../utils/stringifySize';
import styles from './Grid.module.css';
import { Gap } from '../../types';

type GridProps = HTMLAttributes<HTMLDivElement> &
  Gap & {
    rows: Size;
    columns: Size;
    verticalPadding?: Size;
    horizontalPadding?: Size;
    width?: Size;
    height?: Size;
    children: ReactNode;
  };

const Grid = (props: GridProps) => {
  const {
    rows,
    columns,
    verticalPadding = 0,
    horizontalPadding = 0,
    width = '100%',
    height = 'auto',
    children,
    ...rest
  } = props;

  const gridSizes: CSSProperties = {
    width: stringifySize(width),
    height: stringifySize(height),
  };

  const gridStyles: CSSProperties = {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    paddingTop: `${verticalPadding}px`,
    paddingBottom: `${verticalPadding}px`,
    paddingLeft: `${horizontalPadding}px`,
    paddingRight: `${horizontalPadding}px`,
    ...rest,
  };

  const gapStyles: CSSProperties =
    'gap' in props
      ? {
          gap: stringifySize(props.gap ?? 0),
        }
      : 'columnGap' in props
      ? {
          columnGap: stringifySize(props.columnGap ?? 0),
          rowGap: stringifySize(props.rowGap ?? 0),
        }
      : {};

  return (
    <div
      className={styles.grid}
      style={{ ...gridSizes, ...gridStyles, ...gapStyles }}
      role="grid"
    >
      {children}
    </div>
  );
};

export default Grid;
