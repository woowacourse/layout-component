/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useLayoutEffect, useState } from 'react';

const useTabsScroll = (ref: RefObject<HTMLDivElement> | null) => {
  const [isOverFlow, setIsOverFlow] = useState(false);
  const [scrollState, setScrollState] = useState<
    'right' | 'left' | 'both' | null
  >(null);

  const handleMoveScroll = (pos: 'start' | 'end') => {
    if (!ref || !ref.current) return;

    const { scrollLeft, clientWidth } = ref.current;

    ref.current.scrollTo({
      left: pos === 'end' ? scrollLeft + clientWidth : scrollLeft - clientWidth,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (!ref || !ref.current) return;

    const { scrollWidth, clientWidth, scrollLeft } = ref.current;

    if (scrollLeft > 0) setScrollState('both');
    else setScrollState('right');

    if (Math.abs(scrollWidth - scrollLeft - clientWidth) < 5)
      setScrollState('left');
  };

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (!ref || !ref.current) return;

      const { scrollWidth, clientWidth } = ref.current;
      setIsOverFlow(scrollWidth > clientWidth);

      if (scrollWidth > clientWidth) {
        setIsOverFlow(true);
      }

      handleScroll();
    });

    if (ref && ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref && ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, [handleScroll, ref]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const { current } = ref;

    current.addEventListener('scroll', handleScroll);

    return () => {
      current.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, ref]);

  return { isOverFlow, scrollState, handleMoveScroll };
};

export default useTabsScroll;
