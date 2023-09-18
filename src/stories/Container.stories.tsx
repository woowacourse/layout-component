import type { Meta, StoryObj } from '@storybook/react';

import Container from '../lib/Container';

const meta = {
  title: 'Jero-Design-System/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    backgroundColor: '#EAECEF',
    maxWidth: '600px',
    minWidth: '300px',
    height: '80vh',
    children: <>This is Container</>,
  },
};

export const Large: Story = {
  args: {
    backgroundColor: '#EAECEF',
    maxWidth: '1080px',
    minWidth: '300px',
    height: '80vh',
    children: <div style={{ width: '900px' }}>This is Large Container</div>,
  },
};

export const Small: Story = {
  args: {
    backgroundColor: '#EAECEF',
    maxWidth: '270px',
    minWidth: '200px',
    height: '80vh',
    children: <div style={{ width: '250px' }}>This is Small Container</div>,
  },
};
