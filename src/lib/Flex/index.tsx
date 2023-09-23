import { CSSProperties, ElementType, ReactNode, forwardRef } from 'react';
import {
  CommonProps,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '../types/common';

interface FlexProps {
  /**
   * This prop is used when you want to specify the justify-content
   * ${minWidth}px
   */
  justifyContent?: CSSProperties['justifyContent'];
  /**
   * This prop is used when you want to specify the align-items
   */
  alignItems?: CSSProperties['alignItems'];
  /**
   * This prop is used when you want to specify the flex-direction
   */
  direction?: CSSProperties['flexDirection'];
  /**
   * This prop is used when you want to specify the flex-wrap
   */
  flexWrap?: CSSProperties['flexWrap'];
  /**
   * This prop is used when you want to specify the gap
   */
  gap?: number;
}

type FlexComponent = <T extends ElementType>(
  props: PolymorphicComponentProps<T, FlexProps>
) => ReactNode | null;

const Flex: FlexComponent = forwardRef(function Flex<
  T extends ElementType = 'div'
>(
  {
    css,
    direction = 'row',
    alignItems = 'start',
    flexWrap = 'nowrap',
    justifyContent = 'start',
    gap = 0,
    children,
  }: FlexProps & CommonProps<T>,
  ref: PolymorphicRef<T>
) {
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        justifyContent,
        alignItems,
        flexWrap,
        flexDirection: direction,
        gap: `${gap}px`,
        ...css,
      }}>
      {children}
    </div>
  );
});

export default Flex;
