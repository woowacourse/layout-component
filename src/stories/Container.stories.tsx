import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '..';
import TestItem from './TestItem';

const meta: Meta<typeof Container> = {
  title: 'Example/Container',
  component: Container,
};

export default meta;
type Story = StoryObj<typeof meta>;

const render: Story['render'] = (args) => (
  <Container {...args}>
    <TestItem size={512}>Children</TestItem>
  </Container>
);

export const Default: Story = {
  render,
};

export const MaxWidth: Story = {
  args: {
    maxWidth: 256,
  },
  render,
};

export const MinWidth: Story = {
  args: {
    minWidth: 1024,
  },
  render,
};
