import { PropsWithChildren } from 'react';

interface ContainerProps {
  minWidth: number;
  maxWidth: number;
}

const Container = ({ maxWidth, minWidth, children }: PropsWithChildren<ContainerProps>) => {
  return <div>{children}</div>;
};

export default Container;
