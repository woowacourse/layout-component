import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '..';

const meta = {
  title: 'Container',
  component: Container,
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    return (
      <Container {...args} style={{ border: '1px solid black' }}>
        container
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
