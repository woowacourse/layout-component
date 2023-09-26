import { useState, useEffect } from 'react';
import type { RefObject } from 'react';
import type { Point } from '../types';

const useOffsetMousePosition = (ref: RefObject<HTMLElement>) => {
  const [point, setPoint] = useState<Point>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!element) {
        return;
      }

      const { top, left } = element.getBoundingClientRect();
      const { clientX, clientY } = event;

      setPoint(() => ({ x: clientX - left, y: clientY - top }));
    };

    const element = ref.current;

    if (!element) {
      return;
    }

    element.addEventListener('mousemove', handleMouseMove);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref]);

  return {
    offsetX: point.x,
    offsetY: point.y,
  };
};

export default useOffsetMousePosition;
