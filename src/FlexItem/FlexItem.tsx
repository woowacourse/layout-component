import type { CSSProperties, ComponentPropsWithoutRef } from 'react';

interface FlexItemProps extends ComponentPropsWithoutRef<'div'> {}

const FlexItem = ({ children, ...props }: FlexItemProps) => {
  const flexItemStyles = {};

  return (
    <div style={flexItemStyles} {...props}>
      {children}
    </div>
  );
};

export default FlexItem;
