import type { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid';

type Story = StoryObj<typeof Grid>;

const meta: Meta<typeof Grid> = {
  title: 'LAYOUT/Grid',
  component: Grid,
};

export default meta;

export const DefaultGrid: Story = {
  args: {},
};
