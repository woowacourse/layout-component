export type ElementPolymorphProp<Element extends React.ElementType> = {
  /** HTML에 적용할 semantic tag */
  as?: Element;
};

export type PolymorphicElementProps<
  Element extends React.ElementType,
  Props = Record<string, never>,
> = Omit<Props, keyof ElementPolymorphProp<Element>> & ElementPolymorphProp<Element>;

export type PolymorphicElementPropsWithoutRef<
  Element extends React.ElementType,
  Props = Record<string, never>,
> = Omit<Props, keyof ElementPolymorphProp<Element>> &
  ElementPolymorphProp<Element> &
  Omit<React.ComponentPropsWithoutRef<Element>, keyof Props>;

export type PolymorphicElementPropsWithRef<
  Element extends React.ElementType,
  Props = Record<string, never>,
> = PolymorphicElementPropsWithoutRef<Element, Props> & {
  ref?: React.ComponentPropsWithRef<Element>['ref'];
};
