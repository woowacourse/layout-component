import { BaseDrawer } from './style';
import { ANCHOR } from './type';

interface DrawerProps {
  anchor: ANCHOR;
}

const Drawer = ({ anchor }: DrawerProps) => {
  return <BaseDrawer $anchor={anchor} />;
};

export default Drawer;
