import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  CSSProperties,
} from 'react';
import cn from 'classnames';

import { convertNumberToPx, forwardRef } from '../utils';

import styles from './container.module.css';

type ContainerCSS = Omit<CSSProperties, 'minWidth' | 'maxWidth'>;
type ContainerStyleProps = {
  minWidth?: number;
  maxWidth?: number;
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
      centerContent = false,
      children,
      css = {},
      ...props
    }: ContainerProps,
    ref: ContainerRef
  ) => {
    const style = {
      minWidth: convertNumberToPx(minWidth),
      maxWidth: convertNumberToPx(maxWidth),
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
