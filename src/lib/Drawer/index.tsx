import { useEffect, useState } from 'react';
import { BaseDrawer } from './style';
import { ANCHOR } from './type';

interface DrawerProps {
  anchor: ANCHOR;
  isOpen: boolean;
}

const Drawer = ({ isOpen, anchor }: DrawerProps) => {
  /** Drawer가 닫히는 애니메이션 동작을 위한 state입니다. */
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? setIsDrawerOpen(true)
      : setTimeout(() => {
          setIsDrawerOpen(false);
        }, 300);
  }, [isOpen]);

  return <>{isDrawerOpen && <BaseDrawer $anchor={anchor} $isOpen={isOpen} />}</>;
};

export default Drawer;
