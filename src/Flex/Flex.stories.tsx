import type { Meta, StoryObj } from '@storybook/react';

import Flex from './Flex';
import { ComponentProps } from 'react';

const meta = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const render = (args: ComponentProps<typeof Flex>) => (
  <div
    style={{ width: '300px', border: '1px solid dodgerblue', padding: '40px' }}>
    <Flex {...args}>
      <div
        style={{
          width: '100px',
          border: '1px solid crimson',
          padding: '5px',
          textAlign: 'center',
        }}>
        child1
      </div>
      <div
        style={{
          width: '100px',
          border: '1px solid crimson',
          padding: '5px',
          textAlign: 'center',
        }}>
        child2
      </div>
    </Flex>
  </div>
);

export const Flex_Row: Story = {
  args: {},
  render,
};

export const Flex_Column: Story = {
  args: {
    direction: 'column',
  },
  render,
};

export const Flex_Row_Justify_Center_Gap: Story = {
  args: {
    justify: 'center',
    gap: 10,
  },
  render,
};

export const Flex_Column_Align_Center_Gap: Story = {
  args: {
    direction: 'column',
    align: 'center',
    gap: 10,
  },
  render,
};
