import type { Meta, StoryObj } from '@storybook/react';

import Container from '@components/Container';

const meta = {
  title: 'Container',
  component: Container,
  parameters: {
    docs: {
      description: {
        component:
          '화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃을 만들기 위한 컴포넌트.',
      },
    },
  },
  argTypes: {
    tag: { control: 'select', options: ['div', 'p', 'span', 'section', 'aside', 'article'] },
    width: { control: 'text' },
    height: { control: 'text' },
    minWidth: { control: 'text' },
    minHeight: { control: 'text' },
    maxWidth: { control: 'text' },
    maxHeight: { control: 'text' },
    margin: { control: 'text' },
    padding: { control: 'text' },
    borderRadius: { control: 'text' },
    backgroundColor: { control: 'color' },
    css: {
      control: { type: 'object' },
      description: '스타일을 추가하거나 오버라이딩할 수 있는 방법',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: `I'm a Container`,
    tag: 'div',
    centerContent: false,
    width: '800px',
    height: '400px',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: '0',
    padding: '24px',
    borderRadius: '0',
    backgroundColor: '#a8d9ff',
  },
};
