import {
  CSSProperties,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  ReactNode,
  forwardRef,
} from 'react';

interface ContainerProps<T extends ElementType> extends PropsWithChildren {
  as?: T;
  css?: CSSProperties;
  /**
   * This prop is used when you want to specify the minimum width
   * ${minWidth}px
   */
  minWidth?: number;
  /**
   * This prop is used when you want to specify the maximum width
   * ${manWidth}px
   */
  maxWidth?: number;
}

type ContainerComponent = <T extends ElementType = 'div'>(
  props: ContainerProps<T> &
    ComponentPropsWithoutRef<T> & {
      ref?: ComponentPropsWithRef<T>['ref'];
    }
) => ReactNode | null;

/**
 * This is the container layout
 */
const Container: ContainerComponent = forwardRef(function Container<
  T extends ElementType = 'div'
>(
  {
    css,
    as,
    minWidth = 0,
    maxWidth = 0,
    children,
    ...rest
  }: ContainerProps<T> & ComponentPropsWithoutRef<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const Element = as || 'div';

  return (
    <>
      <Element
        ref={ref}
        style={{
          width: '100vw',
          minWidth: minWidth ? `${minWidth}px` : '',
          maxWidth: maxWidth ? `${maxWidth}px` : '',
          ...css,
        }}
        {...rest}>
        {children}
      </Element>
    </>
  );
});

export default Container;
