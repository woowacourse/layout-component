import { HTMLProps, useEffect, useState } from 'react';
import { BackDrop, BaseDrawer, ItemWrapper } from './style';
import { ANCHOR, ITEM } from './type';

interface DrawerProps extends HTMLProps<HTMLDivElement> {
  anchor: ANCHOR;
  isOpen: boolean;
  items: ITEM[];
  padding: number;
  closeDrawer: () => void;
}

const Drawer = ({ isOpen, anchor, items, closeDrawer, padding, ...props }: DrawerProps) => {
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
          <BaseDrawer $anchor={anchor} $isOpen={isOpen} $padding={padding} {...props}>
            {items.map(({ icon, item, goItem }) => (
              <ItemWrapper key={icon + item} onClick={goItem}>
                {icon}
                <div key={item} role="button">
                  {item}
                </div>
              </ItemWrapper>
            ))}
          </BaseDrawer>
        </>
      )}
    </>
  );
};

export default Drawer;
