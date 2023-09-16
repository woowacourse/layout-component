import { HTMLProps } from 'react';
import type { CommonProps } from '../../types';
import { parseClassName } from '../../utils/parseClassName';
import styles from './Box.module.css';

interface BoxProps extends CommonProps, HTMLProps<HTMLDivElement> {}

const Box = ({ sx, children, className = '', ...rest }: BoxProps) => {
  const { dynamicStyle, staticClassName } = parseClassName(className, styles);

  return (
    <div style={{ ...sx, ...dynamicStyle }} className={staticClassName} {...rest}>
      {children}
    </div>
  );
};

export default Box;
