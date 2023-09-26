import { useCallback, useState } from 'react';

interface useModalProps {
  /**
   * 모달의 열림/닫힘에 대한 기본값입니다.
   */
  defaultOpen?: boolean;
  /**
   * 모달이 닫히는 애니메이션을 위한 isOpen 속성 변경의 딜레이 시간(ms)입니다. 모달 애니메이션 시간보다 길어야 합니다.
   */
  closeDelay: number;
}

interface useModalReturnValue {
  /**
   * 모달의 열림/닫힘에 대한 값입니다. 해당 값을 이용해 모달을 조건부 렌더링합니다.
   * @example
   * {isOpen && <Modal isVisible={isVisible}/>}
   */
  isOpen: boolean;
  /**
   * 모달 컴포넌트의 프롭스에 넘겨줄 열림/닫힘 값입니다. 모달이 닫히는 애니메이션을 위해 존재합니다.
   * @example
   * {isOpen && <Modal isVisible={isVisible}/>}
   */
  isVisible: boolean;
  /**
   * 모달을 여는 함수입니다.
   */
  openModal: () => void;
  /**
   * 모달을 닫는 함수입니다.
   */
  closeModal: () => void;
}

export const useModal = ({ defaultOpen = false, closeDelay }: useModalProps): useModalReturnValue => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isVisible, setIsVisible] = useState(defaultOpen);

  const openModal = useCallback(() => {
    setIsVisible(true);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsVisible(false);

    setTimeout(() => {
      setIsOpen(false);
    }, closeDelay);
  }, []);

  return {
    isOpen,
    isVisible,
    openModal,
    closeModal,
  };
};
