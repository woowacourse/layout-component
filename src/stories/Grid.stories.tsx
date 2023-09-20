import type { Meta, StoryObj } from '@storybook/react';

import Grid from '@components/Grid';

const meta = {
  title: 'Grid',
  component: Grid,
  parameters: {
    docs: {
      description: {
        component: 'Grid 레이아웃을 만들기 위한 컴포넌트.',
      },
    },
  },
  argTypes: {
    tag: { control: 'select', options: ['div', 'p', 'span', 'section', 'aside', 'article'] },
    css: {
      control: { type: 'object' },
      description: '스타일을 추가하거나 오버라이딩할 수 있는 방법',
    },
    children: { control: false },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const gridItemStyle = {
  minHeight: '50px',
};

export const Example1: Story = {
  args: {
    tag: 'div',
    rows: 'auto',
    columns: {
      xs: 'repeat(1, 1fr)',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(6, 1fr)',
    },
    rowGap: '8px',
    columnGap: '16px',
    children: (
      <>
        <Grid.Item style={{ backgroundColor: '#a8d9ff', ...gridItemStyle }} />
        <Grid.Item style={{ backgroundColor: '#65b9fc', ...gridItemStyle }} />
        <Grid.Item style={{ backgroundColor: '#249eff', ...gridItemStyle }} />
        <Grid.Item style={{ backgroundColor: '#078fff', ...gridItemStyle }} />
        <Grid.Item style={{ backgroundColor: '#0082ed', ...gridItemStyle }} />
        <Grid.Item style={{ backgroundColor: '#006dc5', ...gridItemStyle }} />
      </>
    ),
  },
};

export const Example2: Story = {
  args: {
    tag: 'div',
    columns: 'auto auto',
    rowGap: '8px',
    columnGap: '16px',
    children: (
      <>
        <Grid.Item style={{ backgroundColor: '#65b9fc', ...gridItemStyle }} />
        <Grid.Item style={{ backgroundColor: '#65b9fc', ...gridItemStyle }} />
        <Grid.Item style={{ backgroundColor: '#65b9fc', ...gridItemStyle }} />
        <Grid.Item style={{ backgroundColor: '#65b9fc', ...gridItemStyle }} />
        <Grid.Item style={{ backgroundColor: '#65b9fc', ...gridItemStyle }} />
        <Grid.Item style={{ backgroundColor: '#65b9fc', ...gridItemStyle }} />
      </>
    ),
  },
};

export const Example3: Story = {
  args: {
    tag: 'div',
    rowGap: 'normal',
    columnGap: 'normal',
    gap: '8px',
    rows: '[row1-start] auto [row2-start] auto [row2-end]',
    columns: '[col1-start] 100px  [col2-start] 100px  [col3-start] 100px [col3-end]',
    children: (
      <>
        <Grid.Item
          row="row1-start"
          column="col1-start / col3-start"
          style={{ backgroundColor: '#a8d9ff', ...gridItemStyle }}
        />
        <Grid.Item
          row="row1-start / row2-end"
          column="col3-start"
          style={{ backgroundColor: '#65b9fc', ...gridItemStyle }}
        />
        <Grid.Item
          row="row2-start"
          column="col1-start"
          style={{ backgroundColor: '#0085f0', ...gridItemStyle }}
        />
        <Grid.Item
          row="row2-start"
          column="col2-start"
          style={{ backgroundColor: '#249eff', ...gridItemStyle }}
        />
      </>
    ),
  },
};
