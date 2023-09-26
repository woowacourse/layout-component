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
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(false);

      const handleDrawerOpen = () => {
        setIsOpen(true);
      };

      const handleDrawerClose = () => {
        setIsOpen(false);
      };

      return (
        <>
          <button onClick={handleDrawerOpen}>top</button>
          <Story
            isOpen={isOpen}
            onClose={handleDrawerClose}
            args={{
              anchor: 'TOP',
              isOpen: isOpen,
              onClose: handleDrawerClose,
              children: (
                <>
                  <Drawer.Panel style={{ color: 'white' }}>
                    첫 번째 메뉴
                  </Drawer.Panel>
                  <Drawer.Panel>두 번째 메뉴</Drawer.Panel>
                  <Drawer.Panel>세 번째 메뉴</Drawer.Panel>
                </>
              ),
            }}
          />
        </>
      );
    },
  ],

  args: {
    anchor: 'TOP',
    isOpen: false,
    onClose: () => {},
  },
};

export const Bottom: Story = {
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(false);
      const handleDrawerOpen = () => {
        setIsOpen(true);
      };
      const handleDrawerClose = () => {
        setIsOpen(false);
      };

      return (
        <>
          <button onClick={handleDrawerOpen}>bottom</button>
          <Story
            isOpen={isOpen}
            onClose={handleDrawerClose}
            args={{
              anchor: 'BOTTOM',
              isOpen: isOpen,
              onClose: handleDrawerClose,
              children: (
                <>
                  <Drawer.Panel style={{ color: 'white' }}>
                    첫 번째 메뉴
                  </Drawer.Panel>
                  <Drawer.Panel>두 번째 메뉴</Drawer.Panel>
                  <Drawer.Panel>세 번째 메뉴</Drawer.Panel>
                </>
              ),
            }}
          />
        </>
      );
    },
  ],

  args: {
    anchor: 'BOTTOM',
    isOpen: false,
    onClose: () => {},
  },
};

export const Right: Story = {
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(false);
      const handleDrawerOpen = () => {
        setIsOpen(true);
      };
      const handleDrawerClose = () => {
        setIsOpen(false);
      };

      return (
        <>
          <button onClick={handleDrawerOpen}>right</button>
          <Story
            isOpen={isOpen}
            onClose={handleDrawerClose}
            args={{
              anchor: 'RIGHT',
              isOpen: isOpen,
              onClose: handleDrawerClose,
              children: (
                <>
                  <Drawer.Panel style={{ color: 'white' }}>
                    첫 번째 메뉴
                  </Drawer.Panel>
                  <Drawer.Panel>두 번째 메뉴</Drawer.Panel>
                  <Drawer.Panel>세 번째 메뉴</Drawer.Panel>
                </>
              ),
            }}
          />
        </>
      );
    },
  ],

  args: {
    anchor: 'RIGHT',
    isOpen: false,
    onClose: () => {},
  },
};

export const Left: Story = {
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(false);
      const handleDrawerOpen = () => {
        setIsOpen(true);
      };
      const handleDrawerClose = () => {
        setIsOpen(false);
      };

      return (
        <>
          <button onClick={handleDrawerOpen}>LEFT</button>
          <Story
            isOpen={isOpen}
            onClose={handleDrawerClose}
            args={{
              anchor: 'LEFT',
              isOpen: isOpen,
              onClose: handleDrawerClose,
              children: (
                <>
                  <Drawer.Panel style={{ color: 'white' }}>
                    첫 번째 메뉴
                  </Drawer.Panel>
                  <Drawer.Panel>두 번째 메뉴</Drawer.Panel>
                  <Drawer.Panel>세 번째 메뉴</Drawer.Panel>
                </>
              ),
            }}
          />
        </>
      );
    },
  ],

  args: {
    anchor: 'LEFT',
    isOpen: false,
    onClose: () => {},
  },
};
