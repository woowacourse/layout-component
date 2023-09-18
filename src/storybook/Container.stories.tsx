import type { Meta, StoryObj } from '@storybook/react';
import Container from '../layouts/Container';

const meta = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ContainerLayout: Story = {
  args: {
    display: 'block',
    width: '400px',
    height: '400px',
    $minWidth: '',
    $minHeight: '',
    $maxWidth: '',
    $maxHeight: '',
    margin: '0 auto',
    padding: 0,
    overflow: 'visible',
    position: 'relative',
    left: '',
    right: '',
    top: '',
    bottom: '',
    cursor: 'pointer',
    opacity: '100%',
    $zIndex: 0,
    $backgroundColor: 'blue',
    responsive: true,
  },
  argTypes: {
    display: {
      description:
        'container의 display 값을 설정합니다. display에 해당하는 옵션 값만 전달할 수 있습니다.',
    },
    width: {
      description:
        'container의 width 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    height: {
      description:
        'container의 height 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    $minWidth: {
      description:
        'container의 min-width 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    $minHeight: {
      description:
        'container의 min-height 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    $maxWidth: {
      description:
        'container의 max-width 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    $maxHeight: {
      description:
        'container의 max-height 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    margin: {
      description:
        'container의 margin 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    padding: {
      description:
        'container의 padding 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    position: {
      description:
        'container의 position 값을 설정합니다. position에 해당하는 옵션 값만 전달할 수 있습니다.',
    },
    left: {
      description:
        'container의 position left 값을 설정합니다. 숫자 또는 문자열을 전달할 수 있습니다.',
    },
    right: {
      description:
        'container의 position right 값을 설정합니다. 숫자 또는 문자열을 전달할 수 있습니다.',
    },
    top: {
      description:
        'container의 position top 값을 설정합니다. 숫자 또는 문자열을 전달할 수 있습니다.',
    },
    bottom: {
      description:
        'container의 position bottom 값을 설정합니다. 숫자 또는 문자열을 전달할 수 있습니다.',
    },
    overflow: {
      description:
        'container의 overflow 값을 설정합니다. overflow에 해당하는 옵션 값만 전달할 수 있습니다.',
    },
    cursor: {
      description:
        'container의 cursor 값을 설정합니다. cursor에 해당하는 옵션 값만 전달할 수 있습니다.',
    },
    opacity: {
      description:
        'container의 opacity 값을 설정합니다. 문자열을 전달할 수 있습니다.',
    },
    $zIndex: {
      description:
        'container의 z-index 값을 설정합니다. 숫자를 전달할 수 있습니다.',
    },
    $backgroundColor: {
      description:
        'container의 background-color 값을 설정합니다. 문자열을 전달할 수 있습니다.',
    },
    responsive: {
      description:
        'container의 min-width, width, max-width 순으로 반응형에 대응합니다. boolean 값을 전달하면 됩니다.',
    },
  },
};
