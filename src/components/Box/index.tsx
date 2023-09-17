import { HTMLProps } from 'react';
import type { CommonProps } from '../../types';
import { parseClassName } from '../../utils/parseClassName';
import styles from './Box.module.css';

interface BoxProps extends CommonProps, HTMLProps<HTMLDivElement> {
  minWidth?: number;
  maxWidth?: number;
}

const Box = ({ minWidth, maxWidth, sx, children, className = '', ...rest }: BoxProps) => {
  const { dynamicStyle, staticClassName } = parseClassName(className, styles);

  return (
    <div
      style={{
        ...(minWidth && { minWidth: `${minWidth}px` }),
        ...(maxWidth && { maxWidth: `${maxWidth}px` }),
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

export default Box;
