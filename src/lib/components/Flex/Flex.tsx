import type { HTMLAttributes, ReactNode, CSSProperties } from 'react';
import type { Gap } from '../../types';
import styles from './Flex.module.css';
import { stringifySize } from '../../utils/stringifySize';
import { Size } from '../../types';

type FlexProps = HTMLAttributes<HTMLDivElement> &
  Gap & {
    direction?: CSSProperties['flexDirection'];
    justify?: CSSProperties['justifyContent'];
    align?: CSSProperties['alignItems'];
    wrap?: CSSProperties['flexWrap'];
    verticalPadding?: Size;
    horizontalPadding?: Size;
    width?: Size;
    height?: Size;
    children: ReactNode;
  };

const Flex = (props: FlexProps) => {
  const {
    verticalPadding = 0,
    horizontalPadding = 0,
    direction = 'row',
    justify = 'flex-start',
    align = 'row',
    wrap = 'nowrap',
    width = '100%',
    height = 'auto',
    children,
    ...rest
  } = props;

  const flexSizes: CSSProperties = {
    width: stringifySize(width),
    height: stringifySize(height),
  };

  const flexStyles: CSSProperties = {
    paddingTop: `${verticalPadding}px`,
    paddingBottom: `${verticalPadding}px`,
    paddingLeft: `${horizontalPadding}px`,
    paddingRight: `${horizontalPadding}px`,
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
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
      className={styles.flex}
      style={{ ...flexSizes, ...flexStyles, ...gapStyles }}
      role="list"
    >
      {children}
    </div>
  );
};

export default Flex;
