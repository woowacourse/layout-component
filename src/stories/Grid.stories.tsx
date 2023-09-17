import type { Meta, StoryObj } from '@storybook/react';

import Grid from '@components/Grid';

const meta = {
  title: 'Grid',
  component: Grid,
  argTypes: {
    tag: { control: 'select', options: ['div', 'p', 'span', 'section', 'aside', 'article'] },
    rows: { control: { type: 'text' } },
    columns: { control: { type: 'text' } },
    rowGap: { control: { type: 'text' } },
    columnGap: { control: { type: 'text' } },
    gap: { control: { type: 'text' } },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const gridItemStyle = {
  padding: '16px',
};

export const Example1: Story = {
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
          css={{ backgroundColor: '#a8d9ff', ...gridItemStyle }}
        >
          A
        </Grid.Item>
        <Grid.Item
          row="row1-start / row2-end"
          column="col3-start"
          css={{ backgroundColor: '#65b9fc', ...gridItemStyle }}
        >
          B
        </Grid.Item>
        <Grid.Item
          row="row2-start"
          column="col1-start"
          css={{ backgroundColor: '#0085f0', ...gridItemStyle }}
        >
          C
        </Grid.Item>
        <Grid.Item
          row="row2-start"
          column="col2-start"
          css={{ backgroundColor: '#249eff', ...gridItemStyle }}
        >
          D
        </Grid.Item>
      </>
    ),
  },
};

export const Example2: Story = {
  args: {
    tag: 'div',
    columns: 'auto auto auto',
    rowGap: '8px',
    columnGap: '16px',
    children: (
      <>
        <Grid.Item css={{ backgroundColor: '#65b9fc', ...gridItemStyle }}>A</Grid.Item>
        <Grid.Item css={{ backgroundColor: '#65b9fc', ...gridItemStyle }}>B</Grid.Item>
        <Grid.Item css={{ backgroundColor: '#65b9fc', ...gridItemStyle }}>C</Grid.Item>
        <Grid.Item css={{ backgroundColor: '#65b9fc', ...gridItemStyle }}>D</Grid.Item>
        <Grid.Item css={{ backgroundColor: '#65b9fc', ...gridItemStyle }}>E</Grid.Item>
        <Grid.Item css={{ backgroundColor: '#65b9fc', ...gridItemStyle }}>F</Grid.Item>
      </>
    ),
  },
};

export const Example3: Story = {
  args: {
    tag: 'div',
    rows: 'auto',
    columns: '3',
    rowGap: '8px',
    columnGap: '16px',
    children: (
      <>
        <Grid.Item css={{ backgroundColor: '#a8d9ff', ...gridItemStyle }}>A</Grid.Item>
        <Grid.Item css={{ backgroundColor: '#65b9fc', ...gridItemStyle }}>B</Grid.Item>
        <Grid.Item css={{ backgroundColor: '#249eff', ...gridItemStyle }}>C</Grid.Item>
        <Grid.Item css={{ backgroundColor: '#078fff', ...gridItemStyle }}>D</Grid.Item>
        <Grid.Item css={{ backgroundColor: '#0082ed', ...gridItemStyle }}>E</Grid.Item>
        <Grid.Item css={{ backgroundColor: '#006dc5', ...gridItemStyle }}>F</Grid.Item>
      </>
    ),
  },
};
