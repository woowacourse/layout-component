import type { Meta, StoryObj } from '@storybook/react';
import Container from '../../Container';

const meta: Meta<typeof Container> = {
  component: Container,

  argTypes: {
    minWidth: {
      description: 'Container의 최소 너비(min-width)',
      defaultValue: { summary: 'min-content' },
    },

    maxWidth: {
      description: 'Container의 최대 너비(max-width)',
      defaultValue: { summary: 'max-content' },
    },

    as: {
      description: 'Container를 원하는 HTML tag로 바꿀 수 있습니다.',
      defaultValue: { summary: 'div' },
      table: {
        type: {
          summary: 'React.ElementType',
        },
      },
    },

    ref: {
      table: {
        type: {
          summary: "React.ComponentPropsWithRef['ref']",
        },
      },
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

const Text = () => (
  <Container as="p" style={{ border: '2px solid hotpink' }}>
    <span>안녕하세요?</span>
  </Container>
);

const Button = () => (
  <Container
    as="button"
    onClick={() => alert('버튼을 누르셨군요?')}
    style={{ border: '2px solid hotpink' }}
  >
    <span>안녕하세요?</span>
  </Container>
);

export const Example: Story = {
  render: () => <Text />,
};

export const ButtonExample: Story = {
  render: () => <Button />,
};
