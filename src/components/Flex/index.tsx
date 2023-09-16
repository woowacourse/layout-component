import { HTMLProps } from 'react';
import type { CommonProps } from '../../types';
import { parseClassName } from '../../utils/parseClassName';
import styles from './Flex.module.css';

interface FlexProps extends CommonProps, HTMLProps<HTMLDivElement> {}

const Flex = ({ sx, children, className = '', ...rest }: FlexProps) => {
  const { dynamicStyle, staticClassName } = parseClassName(className, styles);

  return (
    <div style={{ ...sx, ...dynamicStyle }} className={staticClassName} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
