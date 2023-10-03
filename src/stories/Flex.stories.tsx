import { Meta, StoryObj } from '@storybook/react';
import Flex from '../lib/Flex/Flex';
import React from 'react';

const children = [
  { content: 'content1', color: '#d5d2ff' },
  { content: 'content2', color: '#b5aeff' },
  { content: 'content3', color: '#9f98ff' },
  { content: 'content4', color: '#7d74ff' },
  { content: 'content5', color: '#6f65ff' },
];

const meta = {
  component: Flex,
  title: 'Flex',
  argTypes: {
    as: {
      control: 'select',
      options: ['article', 'div', 'a', 'button'],
      description: 'Container 컴포넌트의 `HTML Tag`. Tag에 맞춰 `attributes`의 자동 완성이 지원됩니다.',
    },
    direction: {
      control: 'select',
      options: ['column', 'column-reverse', 'row', 'row-reverse'],
      description: 'item의 주 축',
    },
    justify: {
      control: 'select',
      options: [
        'center',
        'end',
        'flex-end',
        'flex-start',
        'start',
        'space-around',
        'space-between',
        'space-evenly',
        'stretch',
      ],
      description: '주 축의 정렬 방법',
    },
    align: {
      control: 'select',
      options: [
        'center',
        'end',
        'flex-end',
        'flex-start',
        'self-end',
        'self-start',
        'start',
        'baseline',
        'normal',
        'stretch',
      ],
      description: '교차 축의 정렬 방법',
    },
    gap: {
      control: 'select',
      options: [0, 10, '20px', 30],
      description: 'item 사이의 간격',
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Items의 줄 바꿈',
    },
    css: { description: '추가 스타일링을 위한 prop' },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    as: 'div',
    direction: 'column',
    align: 'center',
    justify: 'center',
    gap: 10,
    wrap: 'nowrap',
    children: (
      <>
        {children.map(({ color, content }) => (
          <div style={{ backgroundColor: color }}>{content}</div>
        ))}
      </>
    ),
  },
  render: (props) => <Flex {...props} />,
};
