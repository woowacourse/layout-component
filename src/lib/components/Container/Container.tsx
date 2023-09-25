import type { HTMLAttributes, ReactNode } from 'react';
import type { Size } from '../../types';
import { stringifySize } from '../utils/stringifySize';
import styles from './Container.module.css';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  maxWidth?: Size;
  minWidth?: Size;
  verticalPadding?: Size;
  horizontalPadding?: Size;
  children: ReactNode;
};

const Container = (props: ContainerProps) => {
  const {
    maxWidth = '100%',
    minWidth = 0,
    verticalPadding = 0,
    horizontalPadding = 0,
    children,
    ...rest
  } = props;

  const containerStyles = {
    padding: `${stringifySize(verticalPadding)} ${stringifySize(
      horizontalPadding
    )}`,
    ...rest,
  };

  const contentStyles = {
    maxWidth,
    minWidth,
  };

  return (
    <div className={styles.container} style={containerStyles}>
      <div className={styles.content} style={contentStyles}>
        {children}
      </div>
    </div>
  );
};

export default Container;
