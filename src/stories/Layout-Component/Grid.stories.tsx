import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Grid from '../../lib/components/Grid';

type Story = StoryObj<typeof Grid>;

/**
 * `Grid` 컴포넌트는 CSS Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 레이아웃입니다.
 */

const meta: Meta<typeof Grid> = {
  title: 'Grid',
  component: Grid,
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
        <div>content 5</div>
        <div>content 6</div>
        <div>content 7</div>
        <div>content 8</div>
        <div>content 9</div>
      </>
    ),
    columns: 3,
    rows: 3,
    justifyItems: 'center',
    gap: 10,
  },
  argTypes: {
    children: {
      description: '자식 컴포넌트입니다.',
    },
    columns: {
      description: '격자의 열 수를 지정합니다.',
    },
    rows: {
      description: '격자의 행 수를 지정합니다.',
    },
    gap: {
      description: '자식 컴포넌트 간의 간격을 조절합니다.',
    },
    colGap: {
      description: '열 간격을 지정합니다.',
    },
    rowGap: {
      description: '행 간격을 지정합니다.',
    },
    justifyItems: {
      description: '자식 요소들을 어떻게 정렬할지 선택합니다.',
    },
  },
};
