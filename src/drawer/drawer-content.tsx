import type { CSSProperties, ReactElement } from 'react';
import cx from 'classnames';

import { useDrawerContext } from './drawer-context';

import styles from './drawer-content.module.css';

type DrawerContentProps = {
  css?: CSSProperties;
  children: ReactElement;
};

const DrawerContent = ({ css = {}, children }: DrawerContentProps) => {
  const { animation, isCloseReady, placement } = useDrawerContext();

  return (
    <section
      className={cx(styles.content, styles[placement], {
        [styles[`animation-${placement}`]]: animation,
        [styles[`close-${placement}`]]: isCloseReady,
      })}
      role='dialog'
      style={css}
      tabIndex={-1}
    >
      {children}
    </section>
  );
};

export default DrawerContent;
