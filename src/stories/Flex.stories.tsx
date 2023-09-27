import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Flex from '../lib/Flex';

const meta = {
  title: 'Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      defaultValue: '100%',
      description: '컴포넌트의 너비를 조정할 수 있습니다.',
    },
    as: {
      control: 'text',
      defaultValue: 'div',
      description:
        'HTML 태그를 문자열로 입력해 원하는 HTML 태그로 사용할 수 있습니다.',
    },
    fullScreen: {
      control: 'boolean',
      description: 'true로 지정하면 화면의 전체의 너비를 차지합니다. (100vw)',
    },
    css: {
      control: 'object',
      description:
        '디테일 한 CSS 속성을 지정해야 할 경우 직접 CSS를 입력할 수 있습니다.',
    },
    direction: {
      control: 'text',
      defaultValue: 'row',
      description:
        'flex의 방향을 조정할 수 있습니다. flex-direction 옵션입니다.',
    },
    alignItems: {
      control: 'text',
      defaultValue: 'start',
      description: 'align-items 옵션입니다.',
    },
    flexWrap: {
      control: 'text',
      defaultValue: 'nowrap',
      description: 'flex-wrap 옵션입니다.',
    },
    justifyContent: {
      control: 'text',
      defaultValue: 'start',
      description: 'justify-content 옵션입니다.',
    },
    gap: {
      control: 'text',
      description:
        'Flex 안의 자식들의 간격을 조정할 수 있습니다. 50%, 300px와 같이 문자열로 입력하여 사용할 수 있습니다.',
    },
    m: {
      control: 'text',
      description: 'margin 옵션을 조정할 수 있습니다. EX) 10px, 10%',
    },
    ml: {
      control: 'text',
      description: 'margin-left 옵션을 조정할 수 있습니다. EX) 10px, 10%',
    },
    mr: {
      control: 'text',
      description: 'margin-right 옵션을 조정할 수 있습니다. EX) 10px, 10%',
    },
    mb: {
      control: 'text',
      description: 'margin-bottom 옵션을 조정할 수 있습니다. EX) 10px, 10%',
    },
    mt: {
      control: 'text',
      description: 'margin-top 옵션을 조정할 수 있습니다. EX) 10px, 10%',
    },
    mx: {
      control: 'text',
      description: 'margin에서 가로 옵션을 조정할 수 있습니다. EX) 10px, 10%',
    },
    my: {
      control: 'text',
      description: 'margin에서 세로 옵션을 조정할 수 있습니다. EX) 10px, 10%',
    },
    mxAuto: {
      control: 'boolean',
      description: 'margin에서 가로 옵션을 auto로 조정할 수 있습니다.',
    },
    myAuto: {
      control: 'boolean',
      description: 'margin에서 세로 옵션을 auto로 조정할 수 있습니다.',
    },
    p: {
      control: 'text',
      description: 'padding 옵션을 조정할 수 있습니다. EX) 10px, 10%',
    },
    pl: {
      control: 'text',
      description: 'padding-left 옵션을 조정할 수 있습니다. EX) 10px, 10%',
    },
    pr: {
      control: 'text',
      description: 'padding-right 옵션을 조정할 수 있습니다. EX) 10px, 10%',
    },
    pt: {
      control: 'text',
      description: 'padding-top 옵션을 조정할 수 있습니다. EX) 10px, 10%',
    },
    pb: {
      control: 'text',
      description: 'padding-bottom 옵션을 조정할 수 있습니다. EX) 10px, 10%',
    },
    px: {
      control: 'text',
      description: 'padding에서 가로 옵션을 조정할 수 있습니다. EX) 10px, 10%',
    },
    py: {
      control: 'text',
      description: 'padding에서 세로 옵션을 조정할 수 있습니다. EX) 10px, 10%',
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RowFlex: Story = {
  render: (props) => (
    <Flex {...props}>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'pink',
        }}
      ></div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'yellow',
        }}
      ></div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'yellowgreen',
        }}
      ></div>
    </Flex>
  ),
  args: {
    css: {
      backgroundColor: 'rgb(255,255,255)',
    },
    direction: 'row',
    gap: '30px',
  },
};

export const ColumnFlex: Story = {
  render: (props) => (
    <Flex {...props}>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'pink',
        }}
      ></div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'yellow',
        }}
      ></div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'yellowgreen',
        }}
      ></div>
    </Flex>
  ),
  args: {
    css: {
      backgroundColor: 'rgb(255,255,255)',
    },
    direction: 'column',
    gap: '30px',
  },
};

export const CenterFlex: Story = {
  render: (props) => (
    <Flex {...props}>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'gray',
        }}
      ></div>
    </Flex>
  ),
  args: {
    css: {
      border: '1px',
      backgroundColor: 'pink',
      width: '100vw',
      height: '100vh',
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
};
