import { Grid } from '../lib';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Grid> = {
  title: 'Grid',
  component: Grid,
  argTypes: {
    column: {
      control: 'number',
    },
    row: {
      control: 'number',
    },
    padding: {
      control: 'number',
    },
    children: {
      control: false,
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
      </>
    ),
  },
};
