import { Meta, StoryObj } from '@storybook/react';
import Container from '../lib/Container/Container';
import React from 'react';

const meta = {
  component: Container,
  title: 'Container',
  argTypes: {
    as: {
      control: 'select',
      options: ['article', 'div', 'a', 'button'],
      description: 'Container 컴포넌트의 `HTML Tag`. Tag에 맞춰 `attributes`의 자동 완성이 지원됩니다.',
    },
    maxWidth: {
      control: 'select',
      options: ['100px', 200, '300px', 400],
      description: 'Content(children)의 최대 너비',
    },
    minWidth: {
      control: 'select',
      options: ['100px', 200, '300px', 400],
      description: 'Content(children)의 최소 너비',
    },
    backgroundColor: { control: 'color', description: 'Container 컴포넌트의 배경색 Content(children)의 최소 너비' },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    as: 'article',
    maxWidth: 500,
    minWidth: 100,
    backgroundColor: 'aliceblue',
    children: <div>스타일 없는 pure content입니다.</div>,
  },
  render: (props) => <Container {...props} />,
};
