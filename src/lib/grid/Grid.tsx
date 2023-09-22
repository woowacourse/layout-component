import { GridProps } from './types.ts';
import * as S from './Grid.styles.tsx';
import useBrowserGapSupport from '../hooks/useBrowserGapSupport.ts';

const Grid = (props: GridProps) => {
  const { gap, rows, columns, children } = props;
  const { doesBrowserSupportGap } = useBrowserGapSupport();

  return (
    <S.Grid
      rows={rows}
      columns={columns}
      gap={gap}
      doesBrowserSupportGap={doesBrowserSupportGap}
    >
      {children}
    </S.Grid>
  );
};

export default Grid;
