import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

const useIsHolding = (ref: RefObject<HTMLElement>) => {
  const [isHolding, setHolding] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseDown = (event: globalThis.MouseEvent) => {
      console.log('mousedown');
      event.preventDefault();
      setHolding(() => true);
    };

    const handleMouseUp = () => {
      console.log('mouseup');
      setHolding(() => false);
    };

    const element = ref.current;

    if (!element) {
      return;
    }

    element.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [ref]);

  return {
    isHolding,
  };
};

export default useIsHolding;
