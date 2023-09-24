import { HTMLProps, useEffect, useState } from 'react';
import { BackDrop, BaseDrawer } from './style';
import { ANCHOR } from './type';

interface DrawerProps extends HTMLProps<HTMLDivElement> {
  anchor: ANCHOR;
  isOpen: boolean;
  items: string[];
  closeDrawer: () => void;
}

const Drawer = ({ isOpen, anchor, items, closeDrawer, ...props }: DrawerProps) => {
  /** Drawer가 닫히는 애니메이션 동작을 위한 state입니다. */
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? setIsDrawerOpen(true)
      : setTimeout(() => {
          setIsDrawerOpen(false);
        }, 300);
  }, [isOpen]);

  return (
    <>
      {isDrawerOpen && (
        <>
          <BackDrop onClick={closeDrawer} />
          <BaseDrawer $anchor={anchor} $isOpen={isOpen} {...props}>
            {items.map((item) => (
              <div key={item} role="button">
                {item}
              </div>
            ))}
          </BaseDrawer>
        </>
      )}
    </>
  );
};

export default Drawer;
