import type { Meta, StoryObj } from '@storybook/react';
import Container from '../Container';

const meta: Meta<typeof Container> = {
  component: Container,

  argTypes: {
    minWidth: {
      description: 'Container의 최소 너비(min-width)',
      defaultValue: { summary: "''" },
    },

    maxWidth: {
      description: 'Container의 최대 너비(max-width)',
      defaultValue: { summary: "''" },
    },
  },

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
