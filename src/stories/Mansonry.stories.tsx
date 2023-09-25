import type { Meta, StoryObj } from '@storybook/react';
import { Masonry } from '..';
import TestItem from './TestItem';
import { MasonryItem } from '../components/Masonry';

const meta: Meta<typeof Masonry> = {
  title: 'Example/Masonry',
  component: Masonry,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    minWidth: 500,
  },
  render: (args) => (
    <Masonry {...args}>
      <TestItem height={100}>1</TestItem>
      <TestItem height={400}>2</TestItem>
      <TestItem height={200}>3</TestItem>
      <TestItem height={400}>4</TestItem>
      <TestItem height={100}>5</TestItem>
      <TestItem height={300}>6</TestItem>
    </Masonry>
  ),
};

const getRandomSize = () => {
  return Math.round(Math.random() * 100);
};

export const Images: Story = {
  args: {},
  render: (args) => (
    <Masonry {...args}>
      {Array(20)
        .fill(null)
        .map((_, index) => (
          <TestItem>
            <img src={`https://picsum.photos/200/${getRandomSize()}?random=${index}`} />
          </TestItem>
        ))}
    </Masonry>
  ),
};
