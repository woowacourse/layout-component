import { useCallback, useState } from 'react';

interface UseModalProps {
  /**
   * 모달의 열림/닫힘에 대한 기본값입니다.
   */
  defaultOpen?: boolean;
}

interface UseModalReturnValue {
  /**
   * 모달의 열림/닫힘에 대한 값입니다. 해당 값을 이용해 모달을 조건부 렌더링합니다.
   * @example
   * {isOpen && <Modal />}
   */
  isOpen: boolean;
  /**
   * 모달을 여는 함수입니다.
   */
  openModal: () => void;
  /**
   * 모달을 닫는 함수입니다.
   */
  closeModal: () => void;
}

export const useModal = ({ defaultOpen = false }: UseModalProps = {}): UseModalReturnValue => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
