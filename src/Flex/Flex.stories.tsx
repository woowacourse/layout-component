import type { Meta, StoryObj } from '@storybook/react';
import Flex from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'Flex',
  component: Flex,
  argTypes: {
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    direction: {
      control: 'radio',
      options: [
        'inherit',
        'initial',
        'revert',
        'revert-layer',
        'unset',
        'column',
        'column-reverse',
        'row',
        'row-reverse',
      ],
    },
    wrap: {
      control: 'radio',
      options: [
        'inherit',
        'initial',
        'revert',
        'revert-layer',
        'unset',
        'wrap',
        'nowrap',
        'wrap-reverse',
      ],
    },
    justifyContent: {
      control: 'text',
    },
    alignItems: {
      control: 'text',
    },
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'row',
    children: (
      <>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    gap: 20,
    children: (
      <>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </>
    ),
  },
};
