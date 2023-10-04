import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Drawer } from '~/components/Drawer/Drawer';
import type { DrawerProps } from '~/components/Drawer/Drawer';

const meta = {
  title: 'Overlay/Drawer',
  component: Drawer,
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const Render = (props: DrawerProps) => {
  const { placement, size, width, height, transitionDurationMS, zIndex } =
    props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(() => false);
  };

  return (
    <>
      <button
        style={{
          width: '100px',
          height: '40px',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: 'rgb(81, 111, 255)',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '16px',
        }}
        onClick={() => setIsOpen(true)}
      >
        Open
      </button>
      <Drawer
        isOpen={isOpen}
        onClose={handleClose}
        placement={placement}
        size={size}
        width={width}
        height={height}
        transitionDurationMS={transitionDurationMS}
        zIndex={zIndex}
      >
        <h1>Drawer</h1>
      </Drawer>
    </>
  );
};

export const Right: Story = {
  render: Render,
  args: {
    children: <></>,
    isOpen: false,
    onClose: () => {
      alert('onClose');
    },
  },
};

export const Left: Story = {
  render: () => (
    <Render
      placement="left"
      children={<></>}
      isOpen={false}
      onClose={() => alert('onClose')}
    />
  ),
  args: {
    children: <></>,
    isOpen: false,
    onClose: () => {
      alert('onClose');
    },
  },
};

export const Bottom: Story = {
  render: () => (
    <Render
      placement="bottom"
      children={<></>}
      isOpen={false}
      onClose={() => alert('onClose')}
    />
  ),
  args: {
    children: <></>,
    isOpen: false,
    onClose: () => {
      alert('onClose');
    },
  },
};

export const Top: Story = {
  render: () => (
    <Render
      placement="top"
      children={<></>}
      isOpen={false}
      onClose={() => alert('onClose')}
    />
  ),
  args: {
    children: <></>,
    isOpen: false,
    onClose: () => {
      alert('onClose');
    },
  },
};

export const Large: Story = {
  render: () => (
    <Render
      size="large"
      children={<></>}
      isOpen={false}
      onClose={() => alert('onClose')}
    />
  ),
  args: {
    children: <></>,
    isOpen: false,
    onClose: () => {
      alert('onClose');
    },
  },
};

export const TransitionDuration500: Story = {
  render: () => (
    <Render
      children={<></>}
      isOpen={false}
      onClose={() => alert('onClose')}
      transitionDurationMS={500}
    />
  ),
  args: {
    children: <></>,
    isOpen: false,
    onClose: () => {
      alert('onClose');
    },
  },
};

export const CustomizeWidth: Story = {
  render: () => (
    <Render
      children={<></>}
      isOpen={false}
      onClose={() => alert('onClose')}
      width="500px"
    />
  ),
  args: {
    children: <></>,
    isOpen: false,
    onClose: () => {
      alert('onClose');
    },
  },
};

export const CustomizeHeight: Story = {
  render: () => (
    <Render
      children={<></>}
      isOpen={false}
      onClose={() => alert('onClose')}
      placement="bottom"
      height="500px"
    />
  ),
  args: {
    children: <></>,
    isOpen: false,
    onClose: () => {
      alert('onClose');
    },
  },
};
