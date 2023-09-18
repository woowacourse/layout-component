import type { Meta, StoryObj } from '@storybook/react';
import Grid from '.';

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GridLayout: Story = {
  args: {
    display: 'grid',
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

    $justifyItems: 'start',
    $justifyContent: 'start',
    $alignItems: 'start',
    $alignContent: 'start',
    $justifySelf: 'start',
    $alignSelf: 'start',
    $gridTemplateAreas: '',
    $gridTemplateColumns: '',
    $gridTemplateRows: '',
    gap: '',
  },
  argTypes: {
    display: {
      description:
        'Grid의 display 값을 설정합니다. display에 해당하는 옵션 값만 전달할 수 있습니다.',
    },
    width: {
      description:
        'Grid의 width 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    height: {
      description:
        'Grid의 height 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    $minWidth: {
      description:
        'Grid의 min-width 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    $minHeight: {
      description:
        'Grid의 min-height 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    $maxWidth: {
      description:
        'Grid의 max-width 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    $maxHeight: {
      description:
        'Grid의 max-height 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    margin: {
      description:
        'Grid의 margin 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    padding: {
      description:
        'Grid의 padding 값을 설정합니다. string 타입의 값을 전달하면 됩니다.',
    },
    position: {
      description:
        'Grid의 position 값을 설정합니다. position에 해당하는 옵션 값만 전달할 수 있습니다.',
    },
    left: {
      description:
        'Grid의 position left 값을 설정합니다. 숫자 또는 문자열을 전달할 수 있습니다.',
    },
    right: {
      description:
        'Grid의 position right 값을 설정합니다. 숫자 또는 문자열을 전달할 수 있습니다.',
    },
    top: {
      description:
        'Grid의 position top 값을 설정합니다. 숫자 또는 문자열을 전달할 수 있습니다.',
    },
    bottom: {
      description:
        'Grid의 position bottom 값을 설정합니다. 숫자 또는 문자열을 전달할 수 있습니다.',
    },
    overflow: {
      description:
        'Grid의 overflow 값을 설정합니다. overflow에 해당하는 옵션 값만 전달할 수 있습니다.',
    },
    cursor: {
      description:
        'Grid의 cursor 값을 설정합니다. cursor에 해당하는 옵션 값만 전달할 수 있습니다.',
    },
    opacity: {
      description:
        'Grid의 opacity 값을 설정합니다. 문자열을 전달할 수 있습니다.',
    },
    $zIndex: {
      description: 'Grid의 z-index 값을 설정합니다. 숫자를 전달할 수 있습니다.',
    },
    $backgroundColor: {
      description:
        'Grid의 background-color 값을 설정합니다. 문자열을 전달할 수 있습니다.',
    },
    responsive: {
      description:
        'Grid의 min-width, width, max-width 순으로 반응형에 대응합니다. boolean 값을 전달하면 됩니다.',
    },
  },
};
