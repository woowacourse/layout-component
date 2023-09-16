import type {
  CSSProperties,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
} from 'react';

import FlexItem from './flex-item';

import { forwardRef } from '../utils';

type FlexCSSProperties = Pick<
  CSSProperties,
  'width' | 'height' | 'alignItems' | 'alignContent'
> & {
  direction: CSSProperties['flexDirection'];
  wrap: CSSProperties['flexWrap'];
  justify: CSSProperties['justifyContent'];
  gap: number;
};

type FlexProps = ComponentPropsWithoutRef<'div'> & FlexCSSProperties;
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
      alignContent,
      alignItems,
      gap,
      width,
      height,
      children,
      ...props
    }: FlexProps,
    ref: FlexRef
  ) => {
    const style: CSSProperties = {
      display: 'flex',
      flexDirection: direction,
      flexWrap: wrap,
      justifyContent: justify,
      alignContent,
      alignItems,
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
