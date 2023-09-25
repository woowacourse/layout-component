/** @jsxImportSource @emotion/react */

import { CSSProperties, ComponentPropsWithoutRef } from 'react';
import { css } from '@emotion/react';

const GRID_BREAK_POINTS = {
  xs: '0px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
};

type GridBreakPoints = keyof typeof GRID_BREAK_POINTS;

type ResponsiveColumns = Partial<{
  [key in GridBreakPoints]: number;
}>;

interface Props extends ComponentPropsWithoutRef<'div'> {
  rows?: number;
  columns?: number | ResponsiveColumns;
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
  const responsiveColumnStyle = (columns: Props['columns']) => {
    const responsiveStyle: Record<string, CSSProperties> = {};

    if (typeof columns === 'object') {
      const sizes = Object.keys(columns) as GridBreakPoints[];

      sizes.forEach((size, index) => {
        const mediaQuery = `@media screen and (min-width: ${GRID_BREAK_POINTS[size]})`;
        responsiveStyle[mediaQuery] = {
          gridTemplateColumns: `repeat(${columns[size]}, ${columnTrackList})`,
        };

        if (index === sizes.length - 1) {
          responsiveStyle['default'] = {
            gridTemplateColumns: `repeat(${columns[size]}, ${columnTrackList})`,
          };
        }
      });
    }

    if (typeof columns === 'number') {
      responsiveStyle['default'] = {
        gridTemplateColumns: `repeat(${
          columns ?? 'auto-fill'
        }, ${columnTrackList})`,
      };
    }

    return responsiveStyle;
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateRows: `repeat(${rows ?? 'auto-fill'}, ${rowTrackList})`,
    columnGap,
    rowGap,
  };

  return (
    <div
      css={css({
        ...gridContainerStyle,
        ...responsiveColumnStyle(columns)['default'],
        ...responsiveColumnStyle(columns),
      })}
      {...attributes}
    >
      {children}
    </div>
  );
};

export default Grid;
