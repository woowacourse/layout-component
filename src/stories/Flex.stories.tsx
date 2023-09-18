import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '..';
import TestItem from './TestItem';

const meta: Meta<typeof Flex> = {
  title: 'Example/Flex',
  component: Flex,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Flex {...args}>
      <TestItem>Left</TestItem>
      <TestItem>Right</TestItem>
    </Flex>
  ),
};

export const MaxWidth: Story = {
  args: {
    maxWidth: 256,
    gap: 16,
  },
  render: (args) => (
    <Flex {...args}>
      <TestItem>Left</TestItem>
      <TestItem>Right</TestItem>
    </Flex>
  ),
};

export const ColumnCenterGap: Story = {
  args: {
    direction: 'column',
    justify: 'center',
    align: 'center',
    gap: 16,
  },
  render: (args) => (
    <Flex {...args}>
      <TestItem>Top</TestItem>
      <TestItem>Middle</TestItem>
      <TestItem>Bottom</TestItem>
    </Flex>
  ),
};
