import type { Meta, StoryObj } from '@storybook/react';

import Flex from '../components/Flex/Flex';

const meta = {
  title: 'Flex',
  component: Flex,
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleChild = ({ id }: { id: number }) => {
  return (
    <div style={{ padding: '5px', border: '1px solid gray' }}>Child{id}</div>
  );
};

export const Playground: Story = {
  render: (args) => {
    return (
      <Flex {...args} style={{ border: '1px solid black' }}>
        {[1, 2, 3, 4].map((id) => (
          <SampleChild id={id} />
        ))}
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
