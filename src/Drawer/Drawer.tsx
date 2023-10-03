import styles from './Drawer.module.css';
import cn from 'classnames';
import { PropsWithChildren } from 'react';

export interface DrawerProps {
  /**
   * Drawer가 열렸는지 여부입니다.
   */
  isOpen: boolean;
  /**
   * Drawer을 닫는 함수입니다.
   */
  handleDrawerClose: () => void;
  /**
   * Drawer가 열리는 방향입니다.
   * @default 'left'
   */
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

const Drawer = ({
  isOpen,
  handleDrawerClose,
  direction = 'left',
  children,
}: PropsWithChildren<DrawerProps>) => {
  return (
    <>
      <div
        className={cn(styles.backdrop, { [styles.isOpen]: isOpen })}
        onClick={handleDrawerClose}
      />
      <div
        className={cn(
          styles.container,
          styles[`container-${direction}`],
          styles[`direction-${direction}`]
        )}
      >
        {children}
      </div>
    </>
  );
};
export default Drawer;
