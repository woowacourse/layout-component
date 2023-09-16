import type { Meta, StoryObj } from '@storybook/react';

import styled from '@emotion/styled';
import Container from '.';

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
    children: <>This is Container</>,
  },
};

export const Large: Story = {
  args: {
    backgroundColor: '#EAECEF',
    maxWidth: '1080px',
    minWidth: '300px',
    children: <div style={{ width: '900px' }}>This is Large Container</div>,
  },
};

export const Small: Story = {
  args: {
    backgroundColor: '#EAECEF',
    maxWidth: '270px',
    minWidth: '200px',
    children: <div style={{ width: '250px' }}>This is Small Container</div>,
  },
};
