import type { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid';

const meta = {
  title: 'Components/Layout/Grid',
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
    rows: 2,
    columns: 2,
    gap: 5
  },
  argTypes: {
    rows: {
      description: 'Grid의 row의 개수를 설정할 수 있습니다. 들어갈 수 있는 값은 숫자이고 row의 각각은 같은 사이즈를 가지게 됩니다.',
    },
    columns:{
      description: 'Grid의 column의 개수를 설정할 수 있습니다. 들어갈 수 있는 값은 숫자이고 column 각각은 같은 사이즈를 가지게 됩니다.'
    },
    gap:{
      description: 'Grid의 간격을 설정할 수 있습니다. 들어갈 수 있는 값은 숫자이고 px 단위로 설정됩니다.'
    },
  }
};

