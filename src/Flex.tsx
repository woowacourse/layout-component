import { CSSProperties, ElementType } from 'react';
import { Props } from './@type/props.type';

interface FlexProps {
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  gap?: CSSProperties['gap'];
}

const Flex = <T extends ElementType = 'div'>({
  as,
  direction,
  justify,
  align,
  style,
  gap,
  ...rest
}: Props<T, FlexProps>) => {
  const Element = as || 'div';

  const styledElement: CSSProperties = {
    ...style,
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap: gap,
  };

  return <Element style={{ ...styledElement }} {...rest}></Element>;
};

export default Flex;
