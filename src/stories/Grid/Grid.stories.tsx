import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from '../../lib';

const meta = {
  title: 'Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    row: {
      control: 'number',
      description: '그리드의 row 개수를 지정할 수 있습니다.',
    },
    column: {
      control: 'number',
      description: '그리드의 row 개수를 지정할 수 있습니다.',
    },
    gap: {
      control: 'number',
      description: '그리드 자식 요소들의 간격을 지정할 수 있습니다.',
    },
    css: {
      description: 'css 속성을 직접 지정할 수 있습니다.',
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GridLayout: Story = {
  args: {
    column: 3,
    row: 3,
    gap: 10,
    css: { backgroundColor: '#000' },
    children: Array.from({ length: 10 }).map((_, i) => (
      <div key={i} style={{ height: 50, backgroundColor: '#0064ff' }}>
        GridItem{i}
      </div>
    )),
  },
};
