import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Flex from '../../lib/components/Flex';

type Story = StoryObj<typeof Flex>;

/**
 * `Flex` 컴포넌트는 CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배치하는 레이아웃입니다.
 */

const meta: Meta<typeof Flex> = {
  title: 'Flex',
  component: Flex,
};

export default meta;

/**
 * reset CSS를 적용하지 않은 상태입니다. 사용처에서 reset CSS를 적용해야 html 태그에 margin이 생기지 않습니다.
 */

export const GridLayout: Story = {
  args: {
    children: (
      <>
        <div>content 1</div>
        <div>content 2</div>
        <div>content 3</div>
        <div>content 4</div>
      </>
    ),
    direction: 'column',
    justify: 'center',
    align: 'center',
    gap: 10,
  },
  argTypes: {
    children: {
      description: '자식 컴포넌트입니다.',
    },
    direction: {
      description: '정렬할 방향을 설정합니다.',
    },
    gap: {
      description: '자식 컴포넌트 간의 간격을 조절합니다.',
    },
    justify: {
      description: '주축을 따라 항목들을 정렬합니다.',
    },
    align: {
      description: '교차축을 따라 항목들을 정렬합니다.',
    },
  },
};
