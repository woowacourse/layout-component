import { useEffect, useState } from 'react';

export const useAnimation = (isOpen: boolean) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsActive(() => true);
    }
  }, [isOpen]);

  const shouldRender = isOpen || isActive;
  const isTransitionActive = isOpen && isActive;

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setIsActive(() => false);
    }
  };

  return [shouldRender, isTransitionActive, handleTransitionEnd] as const;
};
