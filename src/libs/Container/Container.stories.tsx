import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

type Story = StoryObj<typeof Container>;

/**
 * `MemoContainer` 컴포넌트는 메인 화면의 메모버튼 컴포넌트입니다.
 */
const meta: Meta<typeof Container> = {
  title: 'LAYOUT/Container',
  component: Container,
};

export default meta;

export const DefaultContainer: Story = {
  args: {},
};
