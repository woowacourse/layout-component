import type {
  CSSProperties,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
} from 'react';

import FlexItem from './flex-item';

import { forwardRef } from '../utils';

type FlexStyleProps = Pick<CSSProperties, 'width' | 'height'> & {
  direction?: CSSProperties['flexDirection'];
  wrap?: CSSProperties['flexWrap'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  gap?: number;
};

type FlexProps = ComponentPropsWithoutRef<'div'> & FlexStyleProps;
type FlexRef = ComponentPropsWithRef<'div'>['ref'];

type CompoundFlex = {
  Item: typeof FlexItem;
};

const Flex = forwardRef<FlexProps, CompoundFlex>(
  (
    {
      direction,
      wrap,
      justify,
      align,
      gap,
      width,
      height,
      children,
      ...props
    }: FlexProps,
    ref: FlexRef
  ) => {
    const style = {
      display: 'flex',
      flexDirection: direction,
      flexWrap: wrap,
      justifyContent: justify,
      alignItems: align,
      gap: `${gap}px`,
      width,
      height,
    };

    return (
      <div style={style} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Flex.Item = FlexItem;

export default Flex;
