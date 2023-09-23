import type { CSSProperties } from 'react';
import type { PolymorphicElementPropsWithRef } from '../types';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { center, maxWidthVar, minWidthVar } from './Container.css';
import { toPixelIfNumber } from '../utils/toPixelIfNumber';

type ContainerProps = {
  minWidth?: CSSProperties['minWidth'];
  maxWidth?: CSSProperties['maxWidth'];
};

const Container = <E extends React.ElementType = 'div'>(
  props: PolymorphicElementPropsWithRef<E, ContainerProps>
) => {
  const {
    as: Element = 'div',
    maxWidth = 'max-content',
    minWidth = 'min-content',
    ref,
    children,
    className,
    style,
    ...rest
  } = props;

  return (
    <Element
      ref={ref}
      className={`${center}` + (className ? ` ${className}` : '')}
      style={{
        ...style,
        ...assignInlineVars({
          [maxWidthVar]: toPixelIfNumber(maxWidth),
          [minWidthVar]: toPixelIfNumber(minWidth),
        }),
      }}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Container;
