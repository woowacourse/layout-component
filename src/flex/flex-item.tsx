import { ComponentPropsWithoutRef } from 'react';

type FlexItemProps = ComponentPropsWithoutRef<'div'>;

const FlexItem = ({ children }: FlexItemProps) => {
  return <div>{children}</div>;
};

export default FlexItem;
