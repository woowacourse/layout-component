import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Container from '../../lib/components/Container';
import Box from '../Box';

type Story = StoryObj<typeof Container>;

/**
 * `Container` 컴포넌트는 화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃입니다.
 */

const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container,
};

export default meta;

/**
 * reset CSS를 적용하지 않은 상태입니다. 사용처에서 reset CSS를 적용해야 html 태그에 margin이 생기지 않습니다.
 */

export const ContainerLayout: Story = {
  args: {
    children: <Box />,
    minWidth: 600,
    maxWidth: 950,
  },
  argTypes: {
    children: {
      description: '자식 컴포넌트입니다.',
    },
    minWidth: {
      description: 'container의 최소 width값을 설정할 수 있습니다.',
    },
    maxWidth: {
      description: 'container의 최대 width값을 설정할 수 있습니다.',
    },
  },
};
