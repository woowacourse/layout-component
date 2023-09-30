import type { Meta, StoryObj } from '@storybook/react';
import { Masonry } from '..';
import TestItem from './TestItem';

const meta: Meta<typeof Masonry> = {
  title: 'Example/Masonry',
  component: Masonry,
};

export default meta;
type Story = StoryObj<typeof meta>;

const random = (weight = 100) => Math.round(Math.random() * weight);

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

export const RandomHeight: Story = {
  args: {
    columns: 6,
    minWidth: 600,
    gap: 4,
  },
  render: (args) => (
    <Masonry {...args}>
      {Array(100)
        .fill(null)
        .map((_, index) => (
          <TestItem key={index} height={random(150)}>
            {index}
          </TestItem>
        ))}
    </Masonry>
  ),
};

export const RandomImages: Story = {
  args: {
    columns: 3,
    gap: 12,
    minWidth: 800,
  },
  render: (args) => (
    <Masonry {...args}>
      {Array(30)
        .fill(null)
        .map((_, index) => (
          <img key={index} src={`https://picsum.photos/400/${random(400)}?random=${index}`} />
        ))}
    </Masonry>
  ),
};
