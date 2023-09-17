import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  CSSProperties,
} from 'react';
import cn from 'classnames';

import { forwardRef } from '../utils';

import styles from './container.module.css';

type ContainerStyleProps = Pick<
  CSSProperties,
  'backgroundColor' | 'borderRadius'
> & {
  minWidth?: number;
  maxWidth?: number;
  padding?: number;
  margin?: number;
  centerContent?: boolean;
};

type ContainerProps = ComponentPropsWithoutRef<'div'> & ContainerStyleProps;
type ContainerRef = ComponentPropsWithRef<'div'>['ref'];

const Container = forwardRef<ContainerProps>(
  (
    {
      minWidth,
      maxWidth,
      backgroundColor,
      borderRadius,
      padding,
      margin,
      centerContent = false,
      children,
      ...props
    }: ContainerProps,
    ref: ContainerRef
  ) => {
    const style = {
      minWidth: minWidth ? `${minWidth}px` : 'auto',
      maxWidth: maxWidth ? `${maxWidth}px` : 'none',
      padding: `${padding}px`,
      margin: `${margin}px`,
      backgroundColor,
      borderRadius:
        typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
    };

    return (
      <div
        className={cn(styles.container, {
          [styles.centerContent]: centerContent,
        })}
        style={style}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default Container;
