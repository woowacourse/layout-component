export type PropsWithHTMLElement<
  Props extends Record<string, unknown>,
  TElementType extends React.ElementType
> = React.ComponentPropsWithoutRef<TElementType> & {
  as?: TElementType;
} & Props;
