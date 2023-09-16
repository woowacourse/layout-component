import {
  ForwardRefRenderFunction,
  RefAttributes,
  forwardRef as baseForwardRef,
} from 'react';

type ForwardRefComponent<
  Props,
  Element extends HTMLElement = HTMLDivElement
> = ForwardRefRenderFunction<Element, Props & RefAttributes<Element>>;

export const forwardRef = <
  Props extends object,
  CompoundComponents extends object = {}
>(
  component: ForwardRefComponent<Props>
) => {
  return baseForwardRef(component) as unknown as ForwardRefComponent<Props> &
    CompoundComponents;
};
