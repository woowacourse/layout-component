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
    gap: 12,
    width: '300px',
    children: (
      <>
        <div style={{ background: '#D8EAFF' }}>Item 1</div>
        <div style={{ background: '#D8EAFF' }}>Item 2</div>
        <div style={{ background: '#D8EAFF' }}>Item 3</div>
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
        <div style={{ background: '#FFEC99' }}>Item 1</div>
        <div style={{ background: '#FFEC99' }}>Item 2</div>
        <div style={{ background: '#FFEC99' }}>Item 3</div>
      </>
    ),
  },
};
