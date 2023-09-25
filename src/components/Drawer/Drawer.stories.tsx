import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Drawer from './index';

const meta = {
  title: 'Drawer',
  component: Drawer,
  args: {},
  argTypes: {},
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {};
