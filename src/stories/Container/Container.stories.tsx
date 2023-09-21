import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '../../lib';

const meta = {
  title: 'Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'number',
      description: '컨테이너의 최대 너비를 지정할 수 있습니다.',
    },
    minWidth: {
      control: 'number',
      description: '컨테이너의 최소 너비를 지정할 수 있습니다.',
    },
    css: {
      description: 'css 속성을 직접 지정할 수 있습니다.',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContainerLayout: Story = {
  args: {
    maxWidth: 1200,
    minWidth: 600,
    css: { backgroundColor: '#0064ff' },
    children: '컨테이너 컴포넌트 입니다.',
  },
};
