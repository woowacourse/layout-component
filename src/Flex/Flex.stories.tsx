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
  <div style={{ width: 300, padding: 40, border: '1px solid dodgerblue' }}>
    <Flex {...args}>
      <div
        style={{
          width: 100,
          padding: 5,
          border: '1px solid crimson',
          textAlign: 'center',
        }}>
        child1
      </div>
      <div
        style={{
          width: 100,
          padding: 5,
          border: '1px solid crimson',
          textAlign: 'center',
        }}>
        child2
      </div>
    </Flex>
  </div>
);

export const Basic: Story = {
  args: {},
  render,
};

export const Column: Story = {
  args: {
    direction: 'column',
  },
  render,
};

export const Row_Justify_Center_Gap: Story = {
  args: {
    justify: 'center',
    gap: 10,
  },
  render,
};

export const Column_Align_Center_Gap: Story = {
  args: {
    direction: 'column',
    align: 'center',
    gap: 10,
  },
  render,
};
