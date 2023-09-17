import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

type Story = StoryObj<typeof Container>;

const meta: Meta<typeof Container> = {
  title: 'LAYOUT/Container',
  component: Container,
};

export default meta;

export const XSmallContainer: Story = {
  args: {
    $minWidth: 'xs',
    $maxWidth: 'xs',
    children: 'X Small',
  },
};

export const SmallContainer: Story = {
  args: {
    $minWidth: 'sm',
    $maxWidth: 'sm',
    children: 'Small',
  },
};

export const MediumContainer: Story = {
  args: {
    $minWidth: 'md',
    $maxWidth: 'md',
    children: 'Medium',
  },
};

export const LargeContainer: Story = {
  args: {
    $minWidth: 'lg',
    $maxWidth: 'lg',
    children: 'Large',
  },
};

export const XLargeContainer: Story = {
  args: {
    $minWidth: 'xl',
    $maxWidth: 'xl',
    children: 'X Large',
  },
};

export const BlueContainer: Story = {
  args: {
    $minWidth: 'md',
    $maxWidth: 'md',
    children: 'Blue',
    background: '#cfe8fc',
  },
};
