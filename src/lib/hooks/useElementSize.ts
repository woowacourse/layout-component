import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

type ElementSize = {
  width: number;
  height: number;
};

const useElementSize = (ref: RefObject<HTMLElement>) => {
  const [elementSize, setElementSize] = useState<ElementSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect;

        setElementSize(() => ({ width, height }));
      });
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);

  return {
    width: elementSize.width,
    height: elementSize.height,
  };
};

export default useElementSize;
