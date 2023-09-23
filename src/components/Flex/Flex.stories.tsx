import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Flex from './index';

const Item = (count: number) => (
  <div style={{ backgroundColor: '#0064ff', padding: '10px' }}>아이템{count + 1}</div>
);

const meta = {
  title: 'Example/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  args: {
    direction: 'row',
    justify: 'center',
    align: 'center',
    children: Array.from({ length: 3 }).map((_, index) => Item(index)),
    gap: '10px',
    style: { width: '800px', height: '400px', backgroundColor: 'lightgray' },
  },
  argTypes: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Column: Story = {
  args: {
    direction: 'column',
  },
};

export const ColumnReverse: Story = {
  args: {
    direction: 'column-reverse',
  },
};

export const Gap100px: Story = {
  args: {
    gap: '100px',
  },
};
