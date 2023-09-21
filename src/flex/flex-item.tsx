import type { CSSProperties, ComponentPropsWithoutRef } from 'react';

type FlexItemCSS = Omit<
  CSSProperties,
  'order' | 'flexGrow' | 'flexShrink' | 'flexBasis' | 'alignSelf'
>;
type FlexItemStyleProps = {
  order?: CSSProperties['order'];
  grow?: CSSProperties['flexGrow'];
  shrink?: CSSProperties['flexShrink'];
  basis?: CSSProperties['flexBasis'];
  align?: CSSProperties['alignSelf'];
  css?: FlexItemCSS;
};

type FlexItemProps = ComponentPropsWithoutRef<'div'> & FlexItemStyleProps;

const FlexItem = ({
  order,
  grow,
  shrink,
  basis,
  align,
  children,
  css = {},
  ...props
}: FlexItemProps) => {
  const style = {
    order,
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis,
    alignSelf: align,
    ...css,
  };

  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

export default FlexItem;
