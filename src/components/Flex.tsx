import { CSSProperties, forwardRef } from 'react';
import { PolymorphicComponentPropWithRef, PolymorphicRef } from '../types/polymorphic';

type FlexStyleProps = Omit<CSSProperties, 'flexDirection' | 'flexWrap' | 'justifyContent' | 'alignItems' | 'gap'>;

type FlexProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    /**
     * `flex-direction` 스타일 프로퍼티를 정의합니다.
     * @default 'row'
     */
    direction?: CSSProperties['flexDirection'];
    /**
     * `flex-wrap` 스타일 프로퍼티를 정의합니다.
     * @default 'nowrap'
     */
    wrap?: CSSProperties['flexWrap'];
    /**
     * `justify-content` 스타일 프로퍼티를 정의합니다.
     * @default 'flex-start'
     */
    justify?: CSSProperties['justifyContent'];
    /**
     * `align-items` 스타일 프로퍼티를 정의합니다.
     * @default 'stretch'
     */
    align?: CSSProperties['alignItems'];
    /**
     * `gap` 스타일 프로퍼티를 정의합니다.
     */
    gap?: CSSProperties['gap'];
    /**
     * 추가적인 스타일링을 정의합니다.
     */
    style?: FlexStyleProps;
  }
>;

type FlexComponent = <C extends React.ElementType>(props: FlexProps<C>) => React.ReactNode;

/**
 * Docs:
 * - [Flex Docs](https://6507fe70aa120a5453701630-uaqgayiynj.chromatic.com/?path=/docs/example-flex--docs)
 */
const Flex: FlexComponent = forwardRef(
  <C extends React.ElementType>(
    {
      direction = 'row',
      wrap = 'nowrap',
      justify = 'flex-start',
      align = 'stretch',
      gap,
      as,
      style,
      children,
      ...attributes
    }: FlexProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    return (
      <Component
        css={[
          {
            display: 'flex',
            flexFlow: `${direction} ${wrap}`,
            justifyContent: justify,
            alignItems: align,
            gap,
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

export default Flex;
