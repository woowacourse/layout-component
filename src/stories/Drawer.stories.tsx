import { Drawer } from '../lib/Drawer';
import type { StoryObj, Meta } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta: Meta<typeof Drawer> = {
  title: 'Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: 'Drawer의 열고 닫습니다.',
    },
    anchor: {
      name: 'Anchor',
      control: {
        type: 'radio',
      },
      description: 'Drawer의 위치를 결정합니다.',
    },
    padding: {
      description: 'Drawer 내부 children의 padding을 결정합니다.',
    },
  },
  parameters: {
    componentSubtitle: '메뉴를 여닫을 수 있는 Drawer 컴포넌트입니다.',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    isOpen: true,
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
  argTypes: {
    anchor: { control: 'disable' },
  },
};

export const Right: Story = {
  args: {
    isOpen: true,
    anchor: 'right',
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
  argTypes: {
    anchor: { control: 'disable' },
  },
};

export const Bottom: Story = {
  args: {
    isOpen: true,
    anchor: 'bottom',
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
  argTypes: {
    anchor: { control: 'disable' },
  },
};

export const Top: Story = {
  args: {
    isOpen: true,
    anchor: 'top',
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
  argTypes: {
    anchor: { control: 'disable' },
  },
};
