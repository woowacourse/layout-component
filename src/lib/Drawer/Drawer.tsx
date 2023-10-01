import { PropsWithChildren } from "react";
import styles from "./Drawer.module.css";

type Props = {
  /**
   * Drawer가 나올 방향을 설정합니다.
   * @default 'left'
   */
  direction?: "left" | "right" | "top" | "bottom";
  /**
   * Drawer가 열릴지 닫힐지를 결정하는 상태입니다.
   */
  isOpen: boolean;
  /**
   * Drawer가 닫힐 때 실행하는 함수입니다.
   */
  onClose: () => void;
};

/**
 * 화면의 한 방향에서 슬라이드 형태로 사이드바를 보여주는 레이아웃 컴포넌트
 */
const Drawer = ({ direction = "left", isOpen, onClose, children }: PropsWithChildren<Props>) => {
  return (
    <>
      <div className={`${styles.backdrop} ${isOpen ? styles.open : ""}`} onClick={onClose} />
      <div className={`${styles.container} ${styles[direction]} ${isOpen ? styles.open : ""}`}>{children}</div>
    </>
  );
};

export default Drawer;
