import type { ComponentPropsWithoutRef, CSSProperties } from 'react';
import styles from './Container.module.css';
import cn from 'classnames';

export interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Container의 min-width값입니다.
   */
  minWidth?: string;
  /**
   * Container의 max-width값입니다.
   * @default '100%'
   */
  maxWidth?: string;
  /**
   * Container의 자식 컴포넌트들의 중앙정렬 여부입니다.
   * @default false
   */
  centerContent?: boolean;
  /**
   * Container의 배경색입니다.
   * @default 'white'
   */
  backgroundColor?: CSSProperties['color'];
  /**
   * Container의 border-radius값입니다.
   */
  borderRadius?: string | number;
}

const Container = ({
  minWidth,
  maxWidth = '100%',
  centerContent = false,
  backgroundColor = 'white',
  borderRadius,
  children,
}: ContainerProps) => {
  const containerStyle = {
    minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth,
    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
    backgroundColor: backgroundColor,
    borderRadius:
      typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
  };

  return (
    <div
      className={cn(styles.container, {
        [styles.centerContent]: centerContent,
      })}
      style={containerStyle}
    >
      <div>{children}</div>
    </div>
  );
};

export default Container;
