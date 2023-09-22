import { ComponentPropsWithoutRef, ElementType } from 'react';

interface FlexProps extends ComponentPropsWithoutRef<ElementType> {
  /**
   * `Flex` 컴포넌트의 태그를 변경합니다.
   * @default div
   */
  as?: ElementType;
  /**
   * `flex-direction` 스타일 프로퍼티를 정의합니다.
   * @default row
   */
  direction?: string;
  /**
   * `flex-wrap` 스타일 프로퍼티를 정의합니다.
   * @default nowrap
   */
  wrap?: string;
  /**
   * `justify-content` 스타일 프로퍼티를 정의합니다.
   * @default flex-start
   */
  justify?: string;
  /**
   * `align-items` 스타일 프로퍼티를 정의합니다.
   * @default stretch
   */
  align?: string;
  /**
   * `gap` 스타일 프로퍼티를 정의합니다.
   * @default 0
   */
  gap?: number;
}

const Flex = ({
  as = 'div',
  direction = 'row',
  wrap = 'nowrap',
  justify = 'flex-start',
  align = 'stretch',
  gap,
  children,
}: FlexProps) => {
  const Component = as;

  return (
    <Component
      css={{
        display: 'flex',
        flexFlow: `${direction} ${wrap}`,
        justifyContent: justify,
        alignItems: align,
        gap,
      }}
    >
      {children}
    </Component>
  );
};

export default Flex;
