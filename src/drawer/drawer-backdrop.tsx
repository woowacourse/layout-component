import { useDrawerContext } from './drawer-context';

import styles from './drawer-backdrop.module.css';

const DrawerBackdrop = () => {
  const { onClose } = useDrawerContext();

  return <div className={styles.backdrop} onClick={onClose} aria-hidden />;
};

export default DrawerBackdrop;
