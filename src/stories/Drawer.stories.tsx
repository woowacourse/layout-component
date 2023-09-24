import Drawer from '../lib/Drawer';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Drawer> = {
  title: 'Drawer',
  component: Drawer,
  argTypes: {},
  args: { items: [] },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    items: ['홈', '마이페이지', '검색', '설정', '설정', '설정', '설정'],
  },
};
