import { PropsWithChildren } from 'react';

type FlexProps<C extends React.ElementType> = {
  as?: C;
  direction?: React.CSSProperties['flexDirection'];
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  gap?: React.CSSProperties['gap'];
  wrap?: React.CSSProperties['flexWrap'];
} & React.ComponentPropsWithoutRef<C>;

const Flex = <C extends React.ElementType = 'div'>({
  as,
  direction,
  justify,
  align,
  gap,
  wrap,
  children,
  ...atributtes
}: PropsWithChildren<FlexProps<C>>) => {
  const styles = {
    display: 'flex',
    justifyContent: justify,
    alignItems: align,
    gap,
    flexWrap: wrap,
  };

  const Component = as || 'div';

  return (
    <Component style={styles} {...atributtes}>
      {children}
    </Component>
  );
};

export default Flex;
