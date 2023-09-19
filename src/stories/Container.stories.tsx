import type { Meta, StoryObj } from '@storybook/react';
import Container from '../components/Container';

const meta = {
  title: 'Container',
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    minWidth: 500,
    maxWidth: 1000,
    backgroundColor: 'skyblue',
  },
};
