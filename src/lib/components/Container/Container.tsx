import { HTMLAttributes, ReactNode } from 'react';
import styles from './Container.module.css';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  maxWidth: number;
  minWidth?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  children: ReactNode;
};

const Container = (props: ContainerProps) => {
  const {
    maxWidth,
    minWidth,
    verticalPadding,
    horizontalPadding,
    children,
    ...rest
  } = props;

  const containerStyles = {
    paddingTop: `${verticalPadding}px`,
    paddingBottom: `${verticalPadding}px`,
    paddingLeft: `${horizontalPadding}px`,
    paddingRight: `${horizontalPadding}px`,
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
