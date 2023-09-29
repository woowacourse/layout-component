import { useCallback, useState } from 'react';

type UseDrawerProps = {
  animation: boolean;
  onClose: () => void;
};

export const useDrawer = ({ animation, onClose }: UseDrawerProps) => {
  const [isCloseReady, setIsCloseReady] = useState(false);

  const closeAnimated = useCallback(() => {
    setIsCloseReady(true);

    const timer = setTimeout(() => {
      setIsCloseReady(false);
      onClose();
      clearTimeout(timer);
    }, 200);
  }, []);

  const closeDrawer = animation ? closeAnimated : onClose;

  return { isCloseReady, closeDrawer };
};
