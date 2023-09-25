import { CSSProperties, ElementType } from 'react';
import Flex from '../Flex';

import type { Props } from '../@type/props.type';

export interface TabListProps {
  width?: CSSProperties['width'];
  justify?: CSSProperties['justifyContent'];
}

export const TabList = <T extends ElementType>({
  as,
  children,
  style,
  justify,
  width,
  ...rest
}: Props<T, TabListProps>) => {
  const styledElement: CSSProperties = {
    width: width || '100%',
    justifyContent: justify,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    ...style,
  };

  return (
    <Flex as={as || 'ul'} style={{ ...styledElement }} {...rest}>
      {children}
    </Flex>
  );
};
