import type { Meta } from '@storybook/react';

import DrawerContainer, { drawerStore } from './../../lib/src/components/Drawer';
import { DrawerAnchor } from '../../lib/src/components/Drawer/store/drawerOpenStore';
import styled from 'styled-components';

const meta = {
  title: 'DrawerContainer',
  component: DrawerContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof DrawerContainer>;

export default meta;

export const DrawerLayout = () => {
  return (
    <>
      <DrawerContainer />
      <DrawerController />
    </>
  );
};

const DrawerController = () => {
  return (
    <>
      {(['top', 'bottom', 'left', 'right'] as DrawerAnchor[]).map((anchor) => {
        return (
          <button
            onClick={() => {
              drawerStore.openDrawer(
                <MenusContainer anchor={anchor}>
                  {Array.from({ length: 10 }).map((_, i) => {
                    return <Menu key={i}>메뉴{i}</Menu>;
                  })}
                </MenusContainer>,
                anchor
              );
            }}
          >
            {anchor}
          </button>
        );
      })}
    </>
  );
};

const MenusContainer = styled.div<{ anchor: DrawerAnchor }>`
  width: 300px;
  height: 100vh;

  ${({ anchor }) => {
    const horizontal = ['left', 'right'];

    if (horizontal.includes(anchor)) {
      return `
        width: 300px;
        height: 100vh;
      `;
    }

    return `
      width: 100%;
      height: 300px;
    `;
  }}

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  z-index: 9999;
`;

const Menu = styled.div`
  width: 100%;
  height: 50px;
`;
