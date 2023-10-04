import type { Meta, StoryObj } from '@storybook/react';

import Container from '.';

const meta = {
  title: 'Container',
  component: Container,
  args: {
    width: 400,
    height: 400,
    backgroundColor: '#139eca',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  render: () => {
    return (
      <Container width={400} height={400} backgroundColor='#23272f'>
        <Container width='50%' height='100%' backgroundColor='#139eca' />
      </Container>
    );
  },
};
