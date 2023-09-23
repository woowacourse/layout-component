import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '..';
import TestItem from './TestItem';

const meta: Meta<typeof Grid> = {
  title: 'Example/Grid',
  component: Grid,
};

export default meta;
type Story = StoryObj<typeof meta>;

const render: Story['render'] = (args) => (
  <Grid {...args}>
    <TestItem size={80}>Item</TestItem>
    <TestItem size={80}>Item</TestItem>
    <TestItem size={80}>Item</TestItem>
    <TestItem size={80}>Item</TestItem>
    <TestItem size={80}>Item</TestItem>
    <TestItem size={80}>Item</TestItem>
  </Grid>
);

export const Default: Story = {
  render,
};

export const MaxWidth: Story = {
  args: {
    columns: 6,
    maxWidth: 256,
    gap: 16,
  },
  render,
};

export const Row2Column3: Story = {
  args: {
    rows: 2,
    columns: 3,
    gap: 16,
  },
  render,
};
