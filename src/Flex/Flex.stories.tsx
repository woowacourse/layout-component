import type { Meta, StoryObj } from '@storybook/react';
import Flex from '.';

const meta: Meta<typeof Flex> = {
  title: 'Flex',
  component: Flex,
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {};
