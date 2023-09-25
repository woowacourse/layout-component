import { CSSProperties, forwardRef } from 'react';
import { PolymorphicComponentPropWithRef, PolymorphicRef } from '../types/polymorphic';

const convertGridTemplate = (value?: CSSProperties['gridTemplateRows']) => {
  if (typeof value === 'number') {
    return `repeat(${value}, minmax(0, 1fr))`;
  } else {
    return value;
  }
};

type GridStyleProps = Omit<CSSProperties, 'gridTemplateRows' | 'gridTemplateColumns' | 'rowGap' | 'columnGap' | 'gap'>;

type GridProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    /**
     * `grid-template-rows` 스타일 프로퍼티를 정의합니다.
     */
    rows?: number;
    /**
     * `grid-template-columns` 스타일 프로퍼티를 정의합니다.
     */
    columns?: number;
    /**
     * `grid-row-gap` 스타일 프로퍼티를 정의합니다.
     */
    rowGap?: CSSProperties['rowGap'];
    /**
     * `grid-column-gap` 스타일 프로퍼티를 정의합니다.
     */
    columnGap?: CSSProperties['columnGap'];
    /**
     * `gap` 스타일 프로퍼티를 정의합니다.
     */
    gap?: CSSProperties['gap'];
    /**
     * 추가적인 스타일링을 정의합니다.
     */
    style?: GridStyleProps;
  }
>;

type GridComponent = <C extends React.ElementType>(props: GridProps<C>) => React.ReactNode;

/**
 * Docs:
 * - [Grid Docs](https://6507fe70aa120a5453701630-uaqgayiynj.chromatic.com/?path=/docs/example-grid--docs)
 */
const Grid: GridComponent = forwardRef(
  <C extends React.ElementType>(
    { rows, columns, rowGap, columnGap, gap, as, style, children, ...attributes }: GridProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    return (
      <Component
        css={[
          {
            display: 'grid',
            gridTemplateRow: convertGridTemplate(rows),
            gridTemplateColumns: convertGridTemplate(columns),
            rowGap,
            columnGap,
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

export default Grid;
