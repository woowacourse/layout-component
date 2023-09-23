import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

type Story = StoryObj<typeof Tabs>;

const meta: Meta<typeof Tabs> = {
  title: 'NAVIGATION/Tabs',
  component: Tabs,
};

export default meta;

export const DefaultTabs: Story = {
  args: {},
};
