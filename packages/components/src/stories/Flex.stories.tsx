import { Meta, StoryObj } from '@storybook/react';
import Flex from '../Flex/Flex';

const meta = {
  title: 'Flex',
  component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

const itemStyle = {
  background: '#333333',
  color: '#ffffff',
  padding: '10px 20px',
};

export const Default: Story = {
  args: {
    direction: 'column',
    justify: 'center',
    align: 'center',
    gap: 10,
    children: (
      <>
        <h1>Flex Component</h1>
        <div style={itemStyle}>FlexItem 1</div>
        <div style={itemStyle}>FlexItem 2</div>
        <div style={itemStyle}>FlexItem 3</div>
      </>
    ),
  },
};
