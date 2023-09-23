import type { CSSProperties as CSS, PropsWithChildren } from 'react';

type BlockLevelElement =
  | 'address'
  | 'article'
  | 'aside'
  | 'blockquote'
  | 'canvas'
  | 'dd'
  | 'div'
  | 'dl'
  | 'dt'
  | 'fieldset'
  | 'figcaption'
  | 'figure'
  | 'footer'
  | 'form'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'header'
  | 'hr'
  | 'li'
  | 'main'
  | 'nav'
  | 'noscript'
  | 'ol'
  | 'p'
  | 'pre'
  | 'section'
  | 'table'
  | 'tfoot'
  | 'ul'
  | 'video';

export interface ContainerProps {
  as?: BlockLevelElement;
  maxWidth?: number;
  minWidth?: number;
}

export const stylingContainer = (props: ContainerProps): CSS => {
  const { maxWidth, minWidth } = props;

  return {
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
