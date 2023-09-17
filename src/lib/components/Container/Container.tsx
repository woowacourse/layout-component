import { HTMLAttributes, ReactNode } from 'react';
import styles from './Container.module.css';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  maxWidth: number;
  minWidth?: number;
  padding?: number;
  children: ReactNode;
};

const Container = (props: ContainerProps) => {
  const { maxWidth, minWidth, padding, children, ...rest } = props;

  return (
    <div className={styles.container} style={{ padding, ...rest }}>
      <div className={styles.content} style={{ maxWidth, minWidth }}>
        {children}
      </div>
    </div>
  );
};

export default Container;
