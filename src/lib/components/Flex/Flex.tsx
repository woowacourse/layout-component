import type { HTMLAttributes, ReactNode, CSSProperties } from 'react';
import type {
  FlexDirection,
  JustifyContent,
  AlignItems,
  FlexWrap,
} from './types';
import styles from './Flex.module.css';
import { elementSizes } from '../utils/elementSizes';

type FlexProps = HTMLAttributes<HTMLDivElement> & {
  direction?: FlexDirection;
  justify?: JustifyContent;
  align?: AlignItems;
  wrap?: FlexWrap;
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  width?: number | string;
  height?: number | string;
  children: ReactNode;
};

const Flex = (props: FlexProps) => {
  const {
    gap,
    rowGap,
    columnGap,
    verticalPadding,
    horizontalPadding,
    direction,
    justify,
    align,
    wrap,
    width,
    height,
    children,
    ...rest
  } = props;

  const flexSizes: CSSProperties = {
    width: elementSizes.getWidth(width),
    height: elementSizes.getHeight(height),
  };

  const flexStyles: CSSProperties = {
    gap: `${gap ?? 0}px`,
    rowGap: `${rowGap ? rowGap : gap ? gap : 0}px`,
    columnGap: `${columnGap ? columnGap : gap ? gap : 0}px`,
    paddingTop: `${verticalPadding}px`,
    paddingBottom: `${verticalPadding}px`,
    paddingLeft: `${horizontalPadding}px`,
    paddingRight: `${horizontalPadding}px`,
    flexDirection: direction ?? 'row',
    justifyContent: justify ?? 'normal',
    alignItems: align ?? 'stretch',
    flexWrap: wrap ?? 'nowrap',
    ...rest,
  };

  return (
    <div
      className={styles.flex}
      style={{ ...flexSizes, ...flexStyles }}
      role="list"
    >
      {children}
    </div>
  );
};

export default Flex;
