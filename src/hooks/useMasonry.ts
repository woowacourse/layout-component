import type { CSSProperties, RefObject } from 'react';
import { useCallback, useEffect, useState } from 'react';

import type { BreakPoints, ResponsiveValue } from '@type/index';

import { generateMediaQueryStyles } from '@utils/mediaQuery';

export const useMasonry = (
  masonryRef: RefObject<HTMLElement>,
  columns: number | ResponsiveValue,
  spacing: number
) => {
  const [maxColumnHeight, setMaxColumnHeight] = useState<number>();

  const childrenResponsiveProperties = {
    width:
      typeof columns === 'object'
        ? Object.keys(columns).reduce((acc: { [key: string]: string }, key) => {
            const breakpoint = key as BreakPoints;

            if (typeof columns === 'number' || !columns[breakpoint]) return acc;

            acc[breakpoint] = `calc((100% - ${(Number(columns[breakpoint]) - 1) * spacing}px) / ${
              columns[breakpoint]
            })`;

            return acc;
          }, {})
        : `calc((100% - ${(columns - 1) * spacing}px) / ${columns}) !important`,
  };

  const childrenMediaQueries: { [key: string]: CSSProperties } = generateMediaQueryStyles(
    childrenResponsiveProperties
  );

  const handleResize = useCallback(() => {
    const masonry = masonryRef.current;

    if (!masonry) return;

    const parentWidth = masonry.clientWidth;
    const firstChild = masonry.firstChild as HTMLElement;
    const firstChildComputedStyle = window.getComputedStyle(firstChild);
    const firstChildWidth = firstChild ? parseInt(firstChildComputedStyle.width) : 0;

    if (parentWidth === 0 || firstChildWidth === 0) return;

    const firstChildMarginLeft = parseInt(firstChildComputedStyle.marginLeft);
    const firstChildMarginRight = parseInt(firstChildComputedStyle.marginRight);

    const currentNumberOfColumns = Math.round(
      parentWidth / (firstChildWidth + firstChildMarginLeft + firstChildMarginRight)
    );
    const columnHeights = new Array<number>(currentNumberOfColumns).fill(0);

    Array.from(masonry.childNodes).forEach((child) => {
      const childElement = child as HTMLElement;
      const childComputedStyle = window.getComputedStyle(childElement);
      const childHeight = parseInt(childComputedStyle.height);

      const currentMinColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      columnHeights[currentMinColumnIndex] += childHeight + spacing;
      setMaxColumnHeight(Math.max(...columnHeights));

      const order = currentMinColumnIndex + 1;
      childElement.style.order = String(order);
    });
  }, [masonryRef, spacing]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize);

    if (masonryRef.current) {
      resizeObserver.observe(masonryRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [handleResize, masonryRef]);

  return { maxColumnHeight, childrenMediaQueries };
};
