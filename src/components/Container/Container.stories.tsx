import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Container from './index';

const Item = '아이템';

const meta = {
  title: 'Example/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    minWidth: '400px',
    maxWidth: '800px',
    children: Item,
    style: { backgroundColor: '#0064ff' },
  },
  argTypes: {},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Primary: Story = {
  args: {
    minWidth: '100px',
    maxWidth: '200px',
  },
};
