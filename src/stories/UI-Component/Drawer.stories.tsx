import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Drawer from '../../lib/components/Drawer';

type Story = StoryObj<typeof Drawer>;

/**
 * `Drawer` 컴포넌트는 화면의 한 쪽에서 서랍처럼 SideBar를 열고 닫을 수 있는 컴포넌트입니다. 아래는 `anchor`가 `default` 값인 상태입니다.
 */

const meta: Meta<typeof Drawer> = {
  title: 'UI-Component/Drawer',
  component: Drawer,
  argTypes: {
    anchor: {
      description: '어느 방향에서 열지 방향을 결정합니다.',
    },
    isOpen: {
      description: '열려 있는지 닫혀있는지 판별합니다.',
    },
    toggleDrawer: {
      description: '열고 닫을 수 있게하는 함수입니다.',
    },
  },
};

export default meta;

const DrawerWithButton = ({
  anchor = 'left',
}: {
  anchor?: 'left' | 'right' | 'top' | 'bottom';
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleOnClick}>Open Drawer</button>
      <Drawer isOpen={isOpen} toggleDrawer={handleOnClick} anchor={anchor}>
        <h2>Drawer Content</h2>
        <p>This is the content of the drawer.</p>
      </Drawer>
    </>
  );
};

/**
 * `LeftDrawer` 스토리는 왼쪽에서 열고 닫을 수 있는 스토리입니다. `anchor`의 default 값은 `left`이므로 왼쪽에서 열고 싶을땐 prop을 넘겨주지 않아도 됩니다.
 */

export const LeftDrawer: Story = {
  render: () => <DrawerWithButton />,
};

/**
 * `RightDrawer` 스토리는 오른쪽에서 열고 닫을 수 있는 스토리입니다.
 */

export const RightDrawer: Story = {
  render: () => <DrawerWithButton anchor="right" />,
};

/**
 * `TopDrawer` 스토리는 위쪽에서 열고 닫을 수 있는 스토리입니다.
 */

export const TopDrawer: Story = {
  render: () => <DrawerWithButton anchor="top" />,
};

/**
 * `BottomDrawer` 스토리는 아래에서 열고 닫을 수 있는 스토리입니다.
 */

export const BottomDrawer: Story = {
  render: () => <DrawerWithButton anchor="bottom" />,
};
