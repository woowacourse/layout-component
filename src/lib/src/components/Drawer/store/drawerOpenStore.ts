import { ReactNode } from 'react';

export type DrawerAnchor = 'left' | 'right' | 'top' | 'bottom';

let drawer: {
  children: ReactNode | null;
  anchor: DrawerAnchor;
} = {
  children: null,
  anchor: 'left',
};

let listeners: (() => void)[] = [];

export const drawerStore = {
  openDrawer: (drawerChildren: ReactNode, anchorText: DrawerAnchor) => {
    drawer = {
      children: drawerChildren,
      anchor: anchorText,
    };

    emitChanges();
  },

  closeDrawer: () => {
    drawer = {
      ...drawer,
      children: null,
    };
    emitChanges();
  },

  getSnapShot: () => {
    return drawer;
  },

  subscribe: (listener: () => void) => {
    listeners = [...listeners, listener];

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
};

const emitChanges = () => {
  listeners.forEach((listener) => {
    listener();
  });
};
