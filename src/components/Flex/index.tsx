import { CSSProperties, HTMLProps } from 'react';
import { flexCssPropMappings } from '../../constants/components/flex';
import type { CommonProps } from '../../types';
import { Gap } from '../../types/components/common';
import { Align, Direction, Justify } from '../../types/components/flex';
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

  const flexInlineStyle: CSSProperties = {
    display: 'flex',
    ...(direction && { flexDirection: flexCssPropMappings.direction[direction] }),
    ...(justify && { justifyContent: flexCssPropMappings.justify[justify] }),
    ...(align && { alignItems: flexCssPropMappings.align[align] }),
    ...(gap && { gap }),
  };

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
