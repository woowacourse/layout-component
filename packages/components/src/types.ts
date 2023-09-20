export type PropsWithHTMLElement<
  Props extends Record<string, unknown>,
  TElementType extends React.ElementType
> = React.ComponentPropsWithoutRef<TElementType> & {
  as?: TElementType;
} & Props;

export type Gap =
  | {
      row: number | string;
      column: number | string;
    }
  | (number | string);
