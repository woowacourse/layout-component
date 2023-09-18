import { Container } from '../lib';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container,
  argTypes: {
    maxWidth: {
      control: 'number',
    },
    minWidth: {
      control: 'number',
    },
    borderRadius: {
      control: 'number',
    },
    padding: {
      control: 'number',
    },
    children: {
      control: false,
    },
  },
  args: {
    background: '#ffffad',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxWidth: '240px',
    background: '#ffffad',
    children: <div>Hello, World!</div>,
  },
};
