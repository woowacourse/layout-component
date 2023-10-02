import { generateContainerInlineStyle } from '../utils/generateContainerInlineStyle';
import { parseClassName } from '../utils/parseClassName';
import styles from '../styles/Container.module.css';

import type { CommonProps } from '../types';
import type { MaxWidth, MinWidth } from '../types/container';

export interface ContainerProps<C extends React.ElementType> extends CommonProps {
  as?: C;
  minWidth?: MinWidth;
  maxWidth?: MaxWidth;
}

const Container = <C extends React.ElementType = 'div'>({
  as,
  minWidth,
  maxWidth,
  sx,
  children,
  className = '',
  ...attributes
}: ContainerProps<C>) => {
  const { dynamicStyle, staticClassName } = parseClassName(className, styles);
  const boxInlineStyle = generateContainerInlineStyle(minWidth, maxWidth);

  const Component = as || 'div';

  return (
    <Component
      style={{
        ...boxInlineStyle,
        ...dynamicStyle,
        ...sx,
      }}
      className={`${staticClassName}`}
      {...attributes}
    >
      {children}
    </Component>
  );
};

export default Container;
