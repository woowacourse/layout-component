import { MouseEventHandler, PropsWithChildren } from "react";
import styles from "./Drawer.module.css";

type Props = {
  direction?: "left" | "right" | "top" | "bottom";
  isOpen: boolean;
  onClose: () => void;
};

const Drawer = ({ direction = "left", isOpen, onClose, children }: PropsWithChildren<Props>) => {
  const preventCloseModal: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className={`${styles.backdrop} ${isOpen ? styles.open : ""}`} onClick={onClose} />
      <div
        className={`${styles.container} ${styles[direction]} ${isOpen ? styles.open : ""}`}
        onClick={preventCloseModal}
      >
        {children}
      </div>
    </>
  );
};

export default Drawer;
