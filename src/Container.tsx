import React, {
  Children,
  cloneElement,
  CSSProperties,
  ElementType,
  isValidElement,
} from 'react';
import { Props } from './@type/props.type';
import Flex from './Flex';
interface ContainerProps {
  minWidth?: CSSProperties['minWidth'];
  maxWidth?: CSSProperties['maxWidth'];
}

const Container = <T extends ElementType = 'div'>({
  as,
  minWidth,
  maxWidth,
  style,
  children,
  ...rest
}: Props<T, ContainerProps>) => {
  const Element = as || 'div';

  const styledElement: CSSProperties = {
    ...style,
    width: '100%',
  };

  const styledChildren = Children.map(children, (child) => {
    if (!isValidElement<Record<'style', {}>>(child)) {
      throw new Error('자식 요소가 React.child가 아닙니다!!');
    }

    return cloneElement(child, {
      style: { ...child.props.style, minWidth, maxWidth },
    });
  });

  return (
    <Flex
      as={Element}
      direction="column"
      align="center"
      style={{ ...styledElement }}
      {...rest}
    >
      {styledChildren}
    </Flex>
  );
};

export default Container;
