import { ElementType } from 'react';
import { useTabContext } from './context';

import type { Props } from '../@type/props.type';

export interface TabPanelProps {
  value: number;
}

export const TabPanel = <T extends ElementType = 'div'>({
  as,
  children,
  value,
  style,
  rest,
}: Props<T, TabPanelProps>) => {
  const Element = as || 'div';
  const { focusTabIdx } = useTabContext();
  const isFocus = focusTabIdx === value;

  const styledElement = {
    padding: '1rem',
    ...style,
  };

  return (
    isFocus && (
      <Element style={{ ...styledElement }} {...rest}>
        {children}
      </Element>
    )
  );
};
