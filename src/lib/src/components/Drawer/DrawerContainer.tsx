import { drawerStore } from './store/drawerOpenStore';
import { useSyncExternalStore } from 'react';
import { Overlay, StyledDrawer } from './DrawerContainer.style';

function DrawerContainer() {
  const { children, anchor } = useSyncExternalStore(drawerStore.subscribe, drawerStore.getSnapShot);

  if (children === null) {
    return <></>;
  }

  return (
    <>
      <StyledDrawer anchor={anchor}>{children}</StyledDrawer>
      <Overlay onClick={drawerStore.closeDrawer} />
    </>
  );
}

export default DrawerContainer;
