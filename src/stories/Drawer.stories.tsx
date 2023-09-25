import Drawer from '../lib/Drawer';
import type { StoryObj, Meta } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta: Meta<typeof Drawer> = {
  title: 'Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: 'Status of Drawer open/close',
    },
    anchor: {
      name: 'Anchor',
      control: {
        type: 'radio',
      },
      description: 'Direction of Drawer appear.',
    },
    padding: {
      description: 'Padding of Drawer`s children',
    },
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false,
    anchor: 'left',
    children: (
      <>
        <div>🏠 홈</div>
        <div>🔍 검색</div>
        <div>📬 메일</div>
        <div>📜 블로그</div>
        <div>👤 마이페이지</div>
        <div>⚙️ 설정</div>
        <div>📞 문의</div>
      </>
    ),
  },
};
