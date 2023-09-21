import type {
  CSSProperties,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
} from 'react';

import FlexItem from './flex-item';

import { forwardRef } from '../utils';

import styles from './flex.module.css';

type FlexCSS = Omit<
  CSSProperties,
  'flexDirection' | 'flexWrap' | 'justifyContent' | 'alignItems' | 'gap'
>;
type FlexStyleProps = {
  direction?: CSSProperties['flexDirection'];
  wrap?: CSSProperties['flexWrap'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  gap?: number;
  css?: FlexCSS;
};

type FlexProps = ComponentPropsWithoutRef<'div'> & FlexStyleProps;
type FlexRef = ComponentPropsWithRef<'div'>['ref'];

type CompoundFlex = {
  Item: typeof FlexItem;
};

const Flex = forwardRef<FlexProps, CompoundFlex>(
  (
    {
      direction,
      wrap,
      justify,
      align,
      gap,
      css = {},
      children,
      ...props
    }: FlexProps,
    ref: FlexRef
  ) => {
    const style = {
      flexDirection: direction,
      flexWrap: wrap,
      justifyContent: justify,
      alignItems: align,
      gap: `${gap}px`,
      ...css,
    };

    return (
      <div className={styles.flex} style={style} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Flex.Item = FlexItem;

export default Flex;
