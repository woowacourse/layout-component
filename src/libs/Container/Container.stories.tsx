import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

type Story = StoryObj<typeof Container>;

const meta: Meta<typeof Container> = {
  title: 'LAYOUT/Container',
  component: Container,
};

export default meta;

export const DefaultContainer: Story = {
  args: {
    children: 'Default',
  },
};

export const XSmallContainer: Story = {
  args: {
    $minWidth: 'xs',
    $maxWidth: 'xs',
    children: 'X Small Size',
  },
};

export const SmallContainer: Story = {
  args: {
    $minWidth: 'sm',
    $maxWidth: 'sm',
    children: 'Small Size',
  },
};

export const MediumContainer: Story = {
  args: {
    $minWidth: 'md',
    $maxWidth: 'md',
    children: 'Medium Size',
  },
};

export const LargeContainer: Story = {
  args: {
    $minWidth: 'lg',
    $maxWidth: 'lg',
    children: 'Large Size',
  },
};

export const XLargeContainer: Story = {
  args: {
    $minWidth: 'xl',
    $maxWidth: 'xl',
    children: 'X Large Size',
  },
};

export const BlueContainer: Story = {
  args: {
    $minWidth: 'md',
    $maxWidth: 'md',
    children: 'Blue Background',
    background: '#cfe8fc',
  },
};

export const ImageContainer: Story = {
  args: {
    $minWidth: 'md',
    $maxWidth: 'md',
    children: 'Image Background',
    background:
      "center / cover no-repeat url('https://images.unsplash.com/photo-1694845482698-accfce9310f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60')",
  },
};

export const CustomContainer: Story = {
  args: {
    $minWidth: 'md',
    $maxWidth: 'md',
    children: 'Custom',
    style: {
      padding: '20px',
      boxSizing: 'border-box',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    },
  },
};
