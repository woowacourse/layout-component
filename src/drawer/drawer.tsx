import type { ReactElement } from 'react';
import { createPortal } from 'react-dom';

import DrawerContent from './drawer-content';
import DrawerBackdrop from './drawer-backdrop';
import { DrawerContext } from './drawer-context';
import { useDrawer } from './hooks';
import { Placement } from './drawer.type';
import DrawerCloseButton from './drawer-close-button';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  animation?: boolean;
  placement?: Placement;
  portalElement?: Element;
  children: ReactElement;
};

const Drawer = ({
  isOpen,
  onClose,
  animation = true,
  placement = 'left',
  portalElement = document.body,
  children,
}: DrawerProps) => {
  const { isCloseReady, closeDrawer } = useDrawer({ animation, onClose });

  const drawerConfig = {
    animation,
    isCloseReady,
    placement,
    onClose: closeDrawer,
  };

  return createPortal(
    <DrawerContext.Provider value={drawerConfig}>
      {isOpen ? children : null}
    </DrawerContext.Provider>,
    portalElement
  );
};

Drawer.Backdrop = DrawerBackdrop;
Drawer.Content = DrawerContent;
Drawer.CloseButton = DrawerCloseButton;

export default Drawer;
