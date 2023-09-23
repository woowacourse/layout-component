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
    minwidth: 500,
    maxwidth: 1000,
    backgroundColor: 'skyblue',
  },
};
