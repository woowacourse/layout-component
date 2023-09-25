import { PolymorphicElementProps } from '../../types';
import { columnGapVar, itemSizeVar, masonryBoard } from './Board.css';
import MasonryProvider, { MasonryContextProps } from '../context';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { toPixelIfNumber } from '../../utils/toPixelIfNumber';

type MasonryProps = MasonryContextProps & {
  /** Masonry.Item의 너비 */
  itemSize?: React.CSSProperties['width'];
  /** true일 경우 Masonry의 너비에 따라 Item의 너비가 유동적으로 변함 */
  fluidResize?: boolean;
  /** 열 사이의 간격 */
  columnGap?: React.CSSProperties['columnGap'];
};

const Board = <E extends 'div' | 'main' | 'section' | 'article' = 'div'>(
  props: React.PropsWithChildren<PolymorphicElementProps<E, MasonryProps>>
) => {
  const {
    as: Element = 'div',
    rowGap = 0,
    columnGap = 0,
    itemSize = '25%',
    fluidResize = false,
    children,
  } = props;

  const size = fluidResize
    ? `minmax(${toPixelIfNumber(itemSize)}, 1fr)`
    : toPixelIfNumber(itemSize);

  return (
    <MasonryProvider rowGap={rowGap}>
      <Element
        className={masonryBoard}
        style={assignInlineVars({
          [columnGapVar]: toPixelIfNumber(columnGap),
          [itemSizeVar]: size,
        })}
      >
        {children}
      </Element>
    </MasonryProvider>
  );
};

export default Board;
