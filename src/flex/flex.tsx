import { ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';
import { forwardRef } from '../utils/forward-ref';
import FlexItem from './flex-item';

interface FlexProps extends ComponentPropsWithoutRef<'div'> {
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
}

type FlexRef = ComponentPropsWithRef<'div'>['ref'];

interface CompoundFlex {
  Item: typeof FlexItem;
}

const Flex = forwardRef<FlexProps, CompoundFlex>(
  ({ direction, justify, children }: FlexProps, ref: FlexRef) => {
    return <div ref={ref}>{children}</div>;
  }
);

Flex.Item = FlexItem;

export default Flex;
