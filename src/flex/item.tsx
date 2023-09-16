import { ComponentPropsWithoutRef } from 'react';

type ItemProps = ComponentPropsWithoutRef<'div'>;

const Item = ({ children }: ItemProps) => {
  return <div>{children}</div>;
};

export default Item;
