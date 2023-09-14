import type { Meta, StoryObj } from '@storybook/react';

import Container from '@components/Container';

const meta = {
  title: 'Container',
  component: Container,
  argTypes: {
    tag: { control: 'select', options: ['div', 'p', 'span', 'section', 'aside', 'article'] },
    width: { control: 'text' },
    height: { control: 'text' },
    minWidth: { control: 'text' },
    minHeight: { control: 'text' },
    maxWidth: { control: 'text' },
    maxHeight: { control: 'text' },
    margin: { control: 'text' },
    padding: { control: 'text' },
    borderRadius: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: `I'm a Container`,
    tag: 'div',
    centerContent: false,
    width: '800px',
    height: '400px',
    maxWidth: '100%',
    maxHeight: '100%',
    minWidth: '400px',
    minHeight: '100px',
    margin: '0',
    padding: '24px',
    borderRadius: '0',
    backgroundColor: '#a8d9ff',
  },
};
