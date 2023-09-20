import type { CSSProperties as CSS, PropsWithChildren, ReactHTML } from 'react';

export interface ContainerProps {
  as?: keyof ReactHTML;
  maxWidth?: number;
  minWidth?: number;
}

export const stylingContainer = (props: ContainerProps): CSS => {
  const { maxWidth, minWidth } = props;

  return {
    display: 'block',
    width: '100%',
    maxWidth: maxWidth ? `${maxWidth}px` : 'none',
    minWidth: minWidth ? `${minWidth}px` : 'none',
    margin: '0 auto',
  };
};

export const Container = (props: PropsWithChildren<ContainerProps>) => {
  const { children, as: Element = 'div' } = props;

  return <Element style={stylingContainer(props)}>{children}</Element>;
};
