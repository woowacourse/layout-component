import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  forwardRef,
} from 'react';
import Item from './item';

interface FlexProps extends ComponentPropsWithoutRef<'div'> {
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
}

type FlexRef = ComponentPropsWithRef<'div'>['ref'];

const Flex = ({ direction, justify, children }: FlexProps, ref: FlexRef) => {
  return <div ref={ref}>{children}</div>;
};

Flex.Item = Item;

export default forwardRef(Flex);
