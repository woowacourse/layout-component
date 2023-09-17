import type { Meta, StoryObj } from '@storybook/react';
import Container from '.';

const meta: Meta<typeof Container> = {
  component: Container,

  args: {
    minWidth: 'min-content',
    maxWidth: 'max-content',
  },

  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '100%', border: '1px solid gray' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Example: Story = {
  render: (args) => (
    <Container style={{ border: '2px solid hotpink' }} {...args}>
      <span>안녕하세요?</span>
    </Container>
  ),
};
