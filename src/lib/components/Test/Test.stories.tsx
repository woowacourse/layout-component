import type { Meta, StoryObj } from '@storybook/react';
import Test from './Test';

/**
 * 이 컴포넌트는 프로젝트가 올바르게 동작하는 지를 확인하기 위한 테스트 컴포넌트입니다.
 */
const meta = {
  title: 'Test',
  component: Test,
} satisfies Meta<typeof Test>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
