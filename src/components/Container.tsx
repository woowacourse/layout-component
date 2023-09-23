import { CSSProperties, forwardRef } from 'react';
import { centerStyle } from '../styles/center';
import { PolymorphicComponentPropWithRef, PolymorphicRef } from '../types/polymorphic';

type ContainerStyleProps = Omit<CSSProperties, 'maxWidth' | 'minWidth'>;

type ContainerProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    /**
     * `max-width` 스타일 프로퍼티를 정의합니다.
     */
    maxWidth?: CSSProperties['maxWidth'];
    /**
     * `min-width` 스타일 프로퍼티를 정의합니다.
     */
    minWidth?: CSSProperties['minWidth'];
    /**
     * 추가적인 스타일링을 정의합니다.
     */
    style?: ContainerStyleProps;
  }
>;

type ContainerComponent = <C extends React.ElementType>(props: ContainerProps<C>) => React.ReactNode;

/**
 * Docs:
 * - [Container Docs](https://6507fe70aa120a5453701630-uaqgayiynj.chromatic.com/?path=/docs/example-container--docs)
 */
const Container: ContainerComponent = forwardRef(
  <C extends React.ElementType>(
    { maxWidth, minWidth, as, style, children, ...attributes }: ContainerProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    return (
      <Component
        css={[
          centerStyle,
          {
            maxWidth,
            minWidth,
          },
          { ...style },
        ]}
        ref={ref}
        {...attributes}
      >
        {children}
      </Component>
    );
  },
);

export default Container;
