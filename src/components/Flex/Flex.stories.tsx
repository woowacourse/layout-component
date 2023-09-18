import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '~/components/Flex/Flex';

const meta = {
  title: 'Example/Flex',
  component: Flex,
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const ChildStyle = {
  width: '300px',
  height: '300px',
  backgroundColor: 'rgb(207, 232, 252)',
};

export const Primary: Story = {
  args: {
    children: (
      <>
        <div style={ChildStyle}>Child 1</div>
        <div style={ChildStyle}>Child 2</div>
        <div style={ChildStyle}>Child 3</div>
      </>
    ),
  },
};

export const DirectionColumn: Story = {
  args: {
    children: (
      <>
        <div style={ChildStyle}>Child 1</div>
        <div style={ChildStyle}>Child 2</div>
        <div style={ChildStyle}>Child 3</div>
      </>
    ),
    direction: 'column',
  },
};

export const DirectionColumnWithGap: Story = {
  args: {
    children: (
      <>
        <div style={ChildStyle}>Child 1</div>
        <div style={ChildStyle}>Child 2</div>
        <div style={ChildStyle}>Child 3</div>
      </>
    ),
    direction: 'column',
    gap: 20,
  },
};

export const Center: Story = {
  args: {
    children: <div style={ChildStyle}>Child 1</div>,
    justify: 'center',
    align: 'center',
  },
};

export const WithOtherProps: Story = {
  args: {
    children: (
      <>
        <div style={ChildStyle}>Child 1</div>
        <div style={ChildStyle}>Child 2</div>
        <div style={ChildStyle}>Child 3</div>
      </>
    ),
    direction: 'column',
    css: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
  },
};
