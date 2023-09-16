import { CSSProperties, ComponentPropsWithoutRef } from 'react';

type FlexItemCSSProperties = Pick<
  CSSProperties,
  'order' | 'flexGrow' | 'flexShrink' | 'flexBasis' | 'alignSelf'
>;

type FlexItemProps = ComponentPropsWithoutRef<'div'> & FlexItemCSSProperties;

const FlexItem = ({
  order,
  flexGrow,
  flexShrink,
  flexBasis,
  alignSelf,
  children,
}: FlexItemProps) => {
  const style = {
    order,
    flexGrow,
    flexShrink,
    flexBasis,
    alignSelf,
  };

  return <div style={style}>{children}</div>;
};

export default FlexItem;
