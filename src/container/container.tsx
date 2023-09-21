import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  CSSProperties,
} from 'react';
import cn from 'classnames';

import { forwardRef } from '../utils';

import styles from './container.module.css';

type ContainerCSS = Omit<CSSProperties, 'minWidth' | 'maxWidth' | 'padding'>;
type ContainerStyleProps = {
  minWidth?: number;
  maxWidth?: number;
  padding?: number;
  centerContent?: boolean;
  css?: ContainerCSS;
};

type ContainerProps = ComponentPropsWithoutRef<'div'> & ContainerStyleProps;
type ContainerRef = ComponentPropsWithRef<'div'>['ref'];

const Container = forwardRef<ContainerProps>(
  (
    {
      minWidth,
      maxWidth,
      padding,
      centerContent = false,
      children,
      css = {},
      ...props
    }: ContainerProps,
    ref: ContainerRef
  ) => {
    const style = {
      minWidth: `${minWidth}px`,
      maxWidth: `${maxWidth}px`,
      padding: `${padding}px`,
      ...css,
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
