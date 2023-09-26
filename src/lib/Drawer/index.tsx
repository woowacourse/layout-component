import { HTMLProps } from 'react';
import { BackDrop, BaseDrawer } from './style';
import { ANCHOR } from './type';

interface DrawerProps extends HTMLProps<HTMLDivElement> {
  anchor: ANCHOR;
  isOpen: boolean;
  padding: number;
  closeDrawer: () => void;
}

const Drawer = ({ isOpen, anchor, closeDrawer, padding, children, ...props }: DrawerProps) => {
  return (
    <>
      {isOpen && <BackDrop onClick={closeDrawer} />}
      <BaseDrawer $anchor={anchor} $isOpen={isOpen} $padding={padding} {...props}>
        {children}
      </BaseDrawer>
    </>
  );
};

export default Drawer;
