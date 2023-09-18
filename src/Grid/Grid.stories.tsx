import type { Meta, StoryObj } from '@storybook/react';

import Grid from './Grid';
import { ComponentProps } from 'react';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const render = (args: ComponentProps<typeof Grid>) => (
  <Grid
    {...args}
    style={{
      width: 500,
      height: 500,
      padding: 10,
      border: '1px solid dodgerblue',
      justifyItems: 'center',
    }}>
    {Array(9)
      .fill('')
      .map((_, i) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: 5,
            border: '1px solid crimson',
            textAlign: 'center',
          }}>
          <div>child {i + 1}</div>
        </div>
      ))}
  </Grid>
);

export const Basic: Story = {
  args: {
    column: '1fr 1fr 1fr',
  },
  render,
};

export const Row_Column: Story = {
  args: {
    row: '100px 1fr',
    column: '1fr 1fr 1fr',
  },
  render,
};
