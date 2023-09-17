import { HTMLProps } from 'react';
import type { CommonProps } from '../../types';
import { Gap } from '../../types/components/common';
import { Align, Direction, Justify } from '../../types/components/flex';
import { generateFlexInlineStyle } from '../../utils/generateFlexInlineStyle';
import { parseClassName } from '../../utils/parseClassName';
import styles from './Flex.module.css';

interface FlexProps extends CommonProps, HTMLProps<HTMLDivElement> {
  direction?: Direction;
  justify?: Justify;
  align?: Align;
  gap?: Gap;
}

const Flex = ({
  direction,
  justify,
  align,
  gap,
  sx,
  children,
  className = '',
  ...rest
}: FlexProps) => {
  const { dynamicStyle, staticClassName } = parseClassName(className, styles);
  const flexInlineStyle = generateFlexInlineStyle(direction, justify, align, gap);

  return (
    <div
      style={{ ...flexInlineStyle, ...dynamicStyle, ...sx }}
      className={`${styles.Flex} ${staticClassName}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Flex;
