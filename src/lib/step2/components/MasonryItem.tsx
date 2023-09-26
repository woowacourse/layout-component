import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { MasonryItemProps } from '../types/type';
import { useThrottle } from '../hooks/useThrottle';
import { parseValueAndUnit } from '../utils/parseValueAndUnit';

const MasonryItem = ({
  rowGap,
  borderRadius,
  children,
}: React.PropsWithChildren<MasonryItemProps>) => {
  const itemRef = useRef<HTMLElement>();
  const [gridRowEnd, setGridRowEnd] = useState<number>();
  const { throttle } = useThrottle();

  if (!React.isValidElement(children))
    throw new Error('Children is not valid react element!!');

  const childrenWithRef = React.cloneElement(children as React.ReactElement, {
    ref: itemRef,
  });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      throttle(() => {
        const [entry] = entries;

        const height = entry.target.clientHeight;
        const parsedRowGap = parseValueAndUnit(rowGap);

        setGridRowEnd(Math.ceil(height + parsedRowGap.value));
      }, 100)();
    });

    if (itemRef.current) resizeObserver.observe(itemRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <Style.ItemContainer
      $rowGap={rowGap}
      $borderRadius={borderRadius}
      $gridRowEnd={gridRowEnd}
    >
      {childrenWithRef}
    </Style.ItemContainer>
  );
};

export default MasonryItem;

const Style = {
  ItemContainer: styled.li<{
    $gridRowEnd?: number;
    $rowGap?: string | number;
    $borderRadius?: string | number;
  }>`
    grid-row-end: ${({ $gridRowEnd }) => `span ${$gridRowEnd}` ?? 'auto'};
    padding-bottom: ${({ $rowGap }) => $rowGap ?? '0'};

    height: fit-content;

    list-style: none;

    & > * {
      border-radius: ${({ $borderRadius }) => $borderRadius ?? '0'};
      width: 100%;
    }
  `,
};
