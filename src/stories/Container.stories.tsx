import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Container from '../lib/Container';

const meta = {
  title: 'Container',
  component: Container,
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
    maxWidth: {
      control: 'text',
      description:
        '컴포넌트의 최대 너비를 지정하는 옵션입니다. 500px, 50%와 같이 문자열로 사용할 수 있습니다.',
    },
    minWidth: {
      control: 'text',
      description:
        '컴포넌트의 최소 너비를 지정하는 옵션입니다. 500px, 50%와 같이 문자열로 사용할 수 있습니다.',
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
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MaxContainer: Story = {
  render: (props) => (
    <Container
      css={{
        backgroundColor: 'rgb(250,224,240)',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <Container {...props}>
        <div
          style={{
            height: '600px',
            background: 'rgb(253,247,251)',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            fontSize: '28px',
          }}
        >
          maxWidth:500
        </div>
      </Container>
    </Container>
  ),
  args: {
    css: {
      backgroundColor: 'rgb(250,224,240)',
      justifyContent: 'center',
      display: 'flex',
    },
    width: '1000px',
    maxWidth: '500px',
  },
};

export const MinContainer: Story = {
  render: (props) => (
    <Container {...props}>
      <div
        style={{
          backgroundColor: 'rgb(253,247,251)',
          height: '600px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          fontSize: '28px',
        }}
      >
        minWidth:300
      </div>
    </Container>
  ),
  args: {
    width: '100px',
    minWidth: '300px',
  },
};
