import type { Meta, StoryObj } from '@storybook/react';

import Container from './Container';
import { ComponentProps } from 'react';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const render = (args: ComponentProps<typeof Container>) => (
  <Container style={{ border: '1px solid dodgerblue', padding: 50 }} {...args}>
    <div
      style={{
        width: 100,
        padding: 5,
        border: '1px solid crimson',
        textAlign: 'center',
      }}>
      child1
    </div>
  </Container>
);

export const Basic: Story = {
  args: {},
  render,
};

export const MinWidth: Story = {
  args: {
    minWidth: '300px',
  },
  render,
};
