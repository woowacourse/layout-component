import type { CSSProperties as CSS, PropsWithChildren } from 'react';
import { type ContainerProps, stylingContainer } from './Container';

interface FlexProps extends ContainerProps {
  direction?: CSS['flexDirection'];
  justify?: CSS['justifyContent'];
  align?: CSS['alignItems'];
  gap?: number;
}

export const Flex = (props: PropsWithChildren<FlexProps>) => {
  const { children, as: Element = 'div', direction, justify, align, gap = 0 } = props;

  const style: CSS = {
    ...stylingContainer(props),
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap: `${gap}px`,
  };

  return <Element style={style}>{children}</Element>;
};
