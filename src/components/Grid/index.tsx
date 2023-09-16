import { HTMLProps } from 'react';
import type { CommonProps } from '../../types';
import { parseClassName } from '../../utils/parseClassName';
import styles from './Grid.module.css';

interface GridProps extends CommonProps, HTMLProps<HTMLDivElement> {}

const Grid = ({ sx, children, className = '', ...rest }: GridProps) => {
  const { dynamicStyle, staticClassName } = parseClassName(className, styles);

  return (
    <div style={{ ...sx, ...dynamicStyle }} className={staticClassName} {...rest}>
      {children}
    </div>
  );
};

export default Grid;
