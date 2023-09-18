import { PropsWithChildren } from 'react';

type ContainerProps<C extends React.ElementType> = {
  as?: C;
  maxWidth?: React.CSSProperties['maxWidth'];
  minWidth?: React.CSSProperties['minWidth'];
  backgroundColor?: React.CSSProperties['backgroundColor'];
  overrideStyle?: React.CSSProperties;
} & React.ComponentPropsWithoutRef<C>;

const Container = <C extends React.ElementType = 'div'>({
  as,
  maxWidth = '100%',
  minWidth,
  backgroundColor,
  overrideStyle,
  children,
  ...attributes
}: PropsWithChildren<ContainerProps<C>>) => {
  const styles = {
    maxWidth,
    minWidth,
    margin: '0 auto',
    backgroundColor,
    ...overrideStyle,
  };

  const Component = as || 'div';

  return (
    <Component style={styles} {...attributes}>
      {children}
    </Component>
  );
};

export default Container;
