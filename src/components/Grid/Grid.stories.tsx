import type { Meta, StoryObj } from '@storybook/react';

import Grid from './Grid';
const Item = <div style={{ backgroundColor: '#0064ff', padding: '10px' }}>아이템</div>;

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  args: {
    rows: 3,
    columns: 3,
    gap: '10px',
    children: Array.from({ length: 9 }).map(() => Item),
  },
  argTypes: {
    rows: {},
    columns: {},
    gap: {},
    children: {},
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Grid2X5: Story = {
  args: {
    rows: 2,
    columns: 5,
    children: Array.from({ length: 10 }).map(() => Item),
  },
};

export const GridGap30px: Story = {
  args: {
    gap: ' 30px',
  },
};
