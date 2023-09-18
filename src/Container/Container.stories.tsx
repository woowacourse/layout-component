import type { Meta, StoryObj } from '@storybook/react';
import Container from '.';

const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container,
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {};
