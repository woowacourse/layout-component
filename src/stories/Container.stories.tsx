import type { Meta, StoryObj } from '@storybook/react';

import Container from '../components/Container/Container';

const meta = {
  title: 'Container',
  component: Container,
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleChild = ({ id }: { id: number }) => {
  return (
    <Container
      maxWidth={100}
      style={{ padding: '5px', border: '1px solid gray' }}
    >
      Child{id}
    </Container>
  );
};

export const Playground: Story = {
  render: (args) => {
    return (
      <Container {...args} style={{ border: '1px solid black' }}>
        {[1, 2, 3, 4].map((id) => (
          <SampleChild id={id} />
        ))}
      </Container>
    );
  },
  args: {
    maxWidth: '100%',
    minWidth: '100px',
  },

  argTypes: {
    as: { control: 'select', options: ['section', 'dialog', 'div', 'span'] },
  },
};
