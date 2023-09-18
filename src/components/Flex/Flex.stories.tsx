import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '..';

const meta = {
  title: 'Flex',
  component: Flex,
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    return (
      <Flex {...args} css={{ border: '1px solid black' }}>
        flexFlex
      </Flex>
    );
  },
  args: {
    dir: 'row',
    align: 'center',
    justify: 'center',
    gap: '10px',
  },

  argTypes: {
    as: { control: 'select', options: ['section', 'dialog', 'div', 'span'] },
  },
};
