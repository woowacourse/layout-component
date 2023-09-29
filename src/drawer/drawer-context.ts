import { createContext, useContext } from 'react';
import type { Placement } from './drawer.type';

type DrawerConfig = {
  animation: boolean;
  isCloseReady: boolean;
  onClose: () => void;
  placement: Placement;
};

export const DrawerContext = createContext<DrawerConfig | null>(null);

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error(
      'useDrawerContext: "context" is undefined. Did you forget to wrap your component in <Drawer />?'
    );
  }

  return context;
};
