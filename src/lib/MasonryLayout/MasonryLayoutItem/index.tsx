import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import * as S from './style';

interface MasonryLayoutItemProps extends PropsWithChildren {
  rowGap?: string;
  smallRowGap?: string;
  mediumRowGap?: string;
  largeRowGap?: string;
  xLargeRowGap?: string;
  doubleXLargeRowGap?: string;
  gap?: string;
  smallGap?: string;
  mediumGap?: string;
  largeGap?: string;
  xLargeGap?: string;
  doubleXLargeGap?: string;
}

const debounce = (func: any, timeout = 300) => {
  let timer: NodeJS.Timeout;

  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export default function MasonryLayoutItem({
  children,
  ...rest
}: MasonryLayoutItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(1);

  useEffect(() => {
    if (!itemRef.current) return;

    const callback = debounce((entries: ResizeObserverEntry[]) => {
      const [entry] = entries;
      const { height } = entry.target.getBoundingClientRect();

      setHeight(Math.round(height));
    }, 100);

    const resizeObserver = new ResizeObserver(callback);

    resizeObserver.observe(itemRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <S.Component height={height} {...rest} ref={itemRef}>
      {children}
    </S.Component>
  );
}
