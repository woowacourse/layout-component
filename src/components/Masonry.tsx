import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { useRef } from 'react';

import { css } from '@emotion/react';

import { useMasonry } from '@hooks/useMasonry';

import type { ResponsiveValue } from '@type/index';

interface MasonryProps extends ComponentPropsWithoutRef<ElementType> {
  /**
   * Masonry 컴포넌트가 사용할 HTML 태그
   *
   * @default 'div'
   */
  tag?: ElementType;
  /**
   * Masonry 컴포넌트의 열의 개수
   */
  columns: number | ResponsiveValue;
  /**
   * Masonry 컴포넌트 내 아이템들 사이의 간격 (px 단위로 변환)
   *
   */
  spacing: number;
}

function Masonry({ tag = 'div', columns, spacing, children, ...attributes }: MasonryProps) {
  const Tag = tag;
  const masonryRef = useRef<HTMLElement>(null);
  const { maxColumnHeight, childrenMediaQueries } = useMasonry(masonryRef, columns, spacing);

  return (
    <Tag
      ref={masonryRef}
      css={css({
        display: 'flex',
        flexFlow: 'column wrap',
        alignContent: 'flex-start',
        rowGap: spacing,
        width: '100%',
        height: maxColumnHeight,
        marginLeft: `-${spacing / 2}px`,

        '& > *': {
          boxSizing: 'border-box',
          margin: `0 ${spacing / 2}px !important`,
          ...childrenMediaQueries['default'],
          ...childrenMediaQueries,
        },
      })}
      {...attributes}
    >
      {children}
    </Tag>
  );
}

export default Masonry;
