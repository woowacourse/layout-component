import type {
  CSSProperties,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
} from 'react';

import FlexItem from './flex-item';

import { forwardRef } from '../utils';

type FlexCSSProperties = Pick<
  CSSProperties,
  | 'flexDirection'
  | 'flexWrap'
  | 'justifyContent'
  | 'alignItems'
  | 'alignContent'
  | 'gap'
>;

type FlexProps = ComponentPropsWithoutRef<'div'> & FlexCSSProperties;
type FlexRef = ComponentPropsWithRef<'div'>['ref'];

type CompoundFlex = {
  Item: typeof FlexItem;
};

const Flex = forwardRef<FlexProps, CompoundFlex>(
  (
    {
      flexDirection,
      flexWrap,
      justifyContent,
      alignContent,
      alignItems,
      gap,
      children,
    }: FlexProps,
    ref: FlexRef
  ) => {
    const style: CSSProperties = {
      display: 'flex',
      flexDirection,
      flexWrap,
      justifyContent,
      alignContent,
      alignItems,
      gap: typeof gap === 'number' ? `${gap}px` : gap,
    };

    return (
      <div style={style} ref={ref}>
        {children}
      </div>
    );
  }
);

Flex.Item = FlexItem;

export default Flex;
