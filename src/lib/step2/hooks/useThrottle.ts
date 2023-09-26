import { useRef } from 'react';

export const useThrottle = () => {
  const first = useRef(true);
  const timerRef = useRef<NodeJS.Timeout>();

  const throttle = (callback: CallableFunction, ms: number) => {
    if (first.current) {
      first.current = false;
      return callback;
    }

    return () => {
      if (timerRef.current) return;

      timerRef.current = setTimeout(() => {
        callback();
        timerRef.current = undefined;
      }, ms);
    };
  };

  return { throttle };
};
