import type { Meta, StoryObj } from '@storybook/react';
import Flex from '../layouts/Flex';

const meta = {
  title: 'Layout/Flex',
  component: Flex,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FlexLayout: Story = {
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

    $flexDirection: 'row',
    $flexWrap: 'nowrap',
    $flexBasis: 0,
    $flexGrow: 0,
    $flexShrink: 0,
    $alignItems: 'flex-start',
    $alignContent: 'flex-start',
    $justifyContent: 'flex-start',
    $justifyItems: 'flex-start',
    flex: '',
    $gap: '',
  },

  argTypes: {
    display: {
      description:
        'Flex의 display 값을 설정합니다. display에 해당하는 옵션 값만 전달할 수 있습니다.',
    },
    width: {
      description:
        'Flex의 width 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    height: {
      description:
        'Flex의 height 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    $minWidth: {
      description:
        'Flex의 min-width 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    $minHeight: {
      description:
        'Flex의 min-height 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    $maxWidth: {
      description:
        'Flex의 max-width 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    $maxHeight: {
      description:
        'Flex의 max-height 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    margin: {
      description:
        'Flex의 margin 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    padding: {
      description:
        'Flex의 padding 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    position: {
      description:
        'Flex의 position 값을 설정합니다. position에 해당하는 옵션 값만 전달할 수 있습니다.',
    },
    left: {
      description:
        'Flex의 position left 값을 설정합니다. 숫자 또는 문자열을 전달할 수 있습니다.',
    },
    right: {
      description:
        'Flex의 position right 값을 설정합니다. 숫자 또는 문자열을 전달할 수 있습니다.',
    },
    top: {
      description:
        'Flex의 position top 값을 설정합니다. 숫자 또는 문자열을 전달할 수 있습니다.',
    },
    bottom: {
      description:
        'Flex의 position bottom 값을 설정합니다. 숫자 또는 문자열을 전달할 수 있습니다.',
    },
    overflow: {
      description:
        'Flex의 overflow 값을 설정합니다. overflow에 해당하는 옵션 값만 전달할 수 있습니다.',
    },
    cursor: {
      description:
        'Flex의 cursor 값을 설정합니다. cursor에 해당하는 옵션 값만 전달할 수 있습니다.',
    },
    opacity: {
      description:
        'Flex의 opacity 값을 설정합니다. 문자열을 전달할 수 있습니다.',
    },
    $zIndex: {
      description: 'Flex의 z-index 값을 설정합니다. 숫자를 전달할 수 있습니다.',
    },
    $backgroundColor: {
      description:
        'Flex의 background-color 값을 설정합니다. 문자열을 전달할 수 있습니다.',
    },
    responsive: {
      description:
        'Flex의 min-width, width, max-width 순으로 반응형에 대응합니다. boolean 값을 전달하면 됩니다.',
    },
  },
};
