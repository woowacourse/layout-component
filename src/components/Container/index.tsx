import { HTMLProps } from 'react';
import { generateContainerInlineStyle } from '../../utils/generateContainerInlineStyle';
import { parseClassName } from '../../utils/parseClassName';
import styles from './Container.module.css';

import type { CommonProps } from '../../types';
import type { MaxWidth, MinWidth } from '../../types/components/container';

interface ContainerProps extends CommonProps, HTMLProps<HTMLDivElement> {
  minWidth?: MinWidth;
  maxWidth?: MaxWidth;
}

const Container = ({
  minWidth,
  maxWidth,
  sx,
  children,
  className = '',
  ...rest
}: ContainerProps) => {
  const { dynamicStyle, staticClassName } = parseClassName(className, styles);
  const boxInlineStyle = generateContainerInlineStyle(minWidth, maxWidth);

  return (
    <div
      style={{
        ...boxInlineStyle,
        ...dynamicStyle,
        ...sx,
      }}
      className={`${staticClassName}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
