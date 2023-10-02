import { useCallback, useState } from 'react';

interface UseDrawerProps {
  /**
   * Drawer가 닫히는 함수를 받습니다.
   */
  onClose: () => void;
}

interface UseDrawerReturnValue {
  /**
   * Drawer의 애니메이션을 위한 Drawer 컴포넌트가 보이는/보이지않는 상태입니다.
   */
  isVisible: boolean;
  /**
   * Drawer를 닫는 함수입니다.
   */
  closeDrawer: () => void;
}

/**
 * 애니메이션은 현재 필수 적용되고 있으며, 애니메이션 시간에 따라 모달이 닫히는 시간에 600ms 딜레이를 주고 있습니다.
 */
const ANIMATION_DELAY = 600;

export const useDrawer = ({ onClose }: UseDrawerProps): UseDrawerReturnValue => {
  const [isVisible, setIsVisible] = useState(true);

  const closeDrawer = useCallback(() => {
    setIsVisible(false);

    setTimeout(() => {
      onClose();
    }, ANIMATION_DELAY);
  }, []);

  return {
    isVisible,
    closeDrawer,
  };
};
