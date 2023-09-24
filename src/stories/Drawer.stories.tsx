import Drawer from '../lib/Drawer';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Drawer> = {
  title: 'Drawer',
  component: Drawer,
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
