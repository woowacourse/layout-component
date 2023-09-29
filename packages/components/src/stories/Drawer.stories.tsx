import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Drawer from '../Drawer/Drawer';

const meta = {
  title: 'Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Top: Story = {
  render: ({ anchor }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleDrawerOpen = () => {
      setIsOpen(true);
    };
    const handleDrawerClose = () => {
      setIsOpen(false);
    };
    return (
      <div>
        <button onClick={handleDrawerOpen}>{anchor}</button>
        <Drawer isOpen={isOpen} onClose={handleDrawerClose} anchor={anchor}>
          <ul>
            <li>여기에 원하는 컴포넌트를 넣어주세요</li>
          </ul>
        </Drawer>
      </div>
    );
  },
};
Top.args = {
  anchor: 'TOP',
  isOpen: false,
  children: <></>,
};
