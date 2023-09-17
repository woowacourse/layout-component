import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
  const containerStyles = {};

  return (
    <div style={containerStyles} {...props}>
      {children}
    </div>
  );
};

export default Container;
