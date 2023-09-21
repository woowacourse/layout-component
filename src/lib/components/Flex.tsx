import { generateFlexInlineStyle } from '../utils/generateFlexInlineStyle';
import { parseClassName } from '../utils/parseClassName';
import styles from '../styles/Flex.module.css';

import type { CommonProps } from '../types';
import type { Gap } from '../types/common';
import type { Align, Direction, Justify } from '../types/flex';

interface FlexProps<C extends React.ElementType> extends CommonProps {
  as?: C;
  direction?: Direction;
  justify?: Justify;
  align?: Align;
  gap?: Gap;
}

const Flex = <C extends React.ElementType = 'div'>({
  as,
  direction,
  justify,
  align,
  gap,
  sx,
  children,
  className = '',
  ...attributes
}: FlexProps<C>) => {
  const { dynamicStyle, staticClassName } = parseClassName(className, styles);
  const flexInlineStyle = generateFlexInlineStyle(direction, justify, align, gap);

  const Component = as || 'div';

  return (
    <Component
      style={{ ...flexInlineStyle, ...dynamicStyle, ...sx }}
      className={`${staticClassName}`}
      {...attributes}
    >
      {children}
    </Component>
  );
};

export default Flex;
