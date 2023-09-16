import { CSSProperties, ComponentPropsWithoutRef } from 'react';

type FlexItemStyleProps = Pick<CSSProperties, 'order' | 'alignSelf'> & {
  grow?: CSSProperties['flexGrow'];
  shrink?: CSSProperties['flexShrink'];
  basis?: CSSProperties['flexBasis'];
};

type FlexItemProps = ComponentPropsWithoutRef<'div'> & FlexItemStyleProps;

const FlexItem = ({
  order,
  grow,
  shrink,
  basis,
  alignSelf,
  children,
  ...props
}: FlexItemProps) => {
  const style = {
    order,
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis,
    alignSelf,
  };

  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

export default FlexItem;
