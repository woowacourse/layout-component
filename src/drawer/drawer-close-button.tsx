import { useDrawerContext } from './drawer-context';

import styles from './drawer-close-button.module.css';

const DrawerCloseButton = () => {
  const { onClose } = useDrawerContext();

  return (
    <button
      type='button'
      className={styles['close-button']}
      onClick={onClose}
      aria-label='close drawer'
    >
      X
    </button>
  );
};

export default DrawerCloseButton;
