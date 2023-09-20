import { Flex } from '../lib';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Flex> = {
  title: 'Flex',
  component: Flex,
  argTypes: {
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
