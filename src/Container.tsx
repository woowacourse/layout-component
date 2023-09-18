import type { CSSProperties as CSS, PropsWithChildren } from 'react';

export interface ContainerProps {
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

export const Container = (props: PropsWithChildren<ContainerProps>) => (
  <div style={stylingContainer(props)}>{props.children}</div>
);
