import type { Meta, StoryObj } from '@storybook/react';

import Container from '../components/Container';

const meta = {
  title: 'Example/Container',
  component: Container,
  parameters: {
    docs: {
      description: {
        component: '화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃을 만들기 위한 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    maxWidth: 800,
    minWidth: 500,
    children: <div style={{ backgroundColor: '#81D4FA' }}>Item</div>,
  },
};
