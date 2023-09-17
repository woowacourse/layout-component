import type { Meta, StoryObj } from '@storybook/react';
import Flex from './Flex';

type Story = StoryObj<typeof Flex>;

const meta: Meta<typeof Flex> = {
  title: 'LAYOUT/Flex',
  component: Flex,
};

export default meta;

export const DefaultFlex: Story = {
  args: {},
};
