import type { CSSProperties } from 'react';
import type { PolymorphicElementPropsWithRef } from '../types';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
  flex,
  inlineFlex,
  flexDirection,
  justifyContent,
  alignItems,
  flexGap,
  flexWrap,
} from './Flex.css';

type FlexProps = {
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  wrap?: CSSProperties['flexWrap'];
  gap?: CSSProperties['gap'];
  inline?: boolean;
};

const Flex = <E extends React.ElementType = 'div'>(
  props: PolymorphicElementPropsWithRef<E, FlexProps>
) => {
  const {
    as: Element = 'div',
    direction = 'row',
    justify = 'normal',
    align = 'normal',
    inline = false,
    wrap = 'nowrap',
    gap = '',
    ref,
    children,
    className,
    style,
    ...rest
  } = props;

  return (
    <Element
      ref={ref}
      className={`${inline ? inlineFlex : flex}` + (className ? ` ${className}` : '')}
      style={{
        ...style,
        ...assignInlineVars({
          [flexDirection]: direction.toString(),
          [justifyContent]: justify.toString(),
          [alignItems]: align.toString(),
          [flexGap]: gap.toString(),
          [flexWrap]: wrap.toString(),
        }),
      }}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Flex;
