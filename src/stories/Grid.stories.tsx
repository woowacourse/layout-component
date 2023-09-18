import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Grid from '../lib/Grid';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Grid',
  component: Grid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    css: {
      control: 'object',
    },
    columns: {
      control: 'number',
      defaultValue: 1,
    },
    rows: {
      control: 'number',
      defaultValue: 1,
    },
    gapX: {
      control: 'number',
    },
    gapY: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ThreeGrid: Story = {
  render: ({ css, columns, gapX, gapY, rows }) => (
    <Grid css={css} rows={rows} columns={columns} gapX={gapX} gapY={gapY}>
      {new Array(9).fill(1).map((__, index) => (
        <div
          key={index}
          style={{
            display: 'block',
            height: '200px',
            width: '200px',
            backgroundColor: 'aquamarine',
          }}
        ></div>
      ))}
    </Grid>
  ),
  args: {
    rows: 3,
    columns: 3,
    gapX: 30,
    gapY: 30,
  },
};

export const RowsGrid: Story = {
  render: ({ css, columns, gapX, gapY, rows }) => (
    <Grid css={css} rows={rows} columns={columns} gapX={gapX} gapY={gapY}>
      {new Array(9).fill(1).map((__, index) => (
        <div
          key={index}
          style={{
            display: 'block',
            height: '200px',
            width: '200px',
            backgroundColor: 'aquamarine',
          }}
        ></div>
      ))}
    </Grid>
  ),
  args: {
    rows: 3,
    gapY: 30,
  },
};

export const ColumnsGrid: Story = {
  render: ({ css, columns, gapX, gapY, rows }) => (
    <Grid css={css} rows={rows} columns={columns} gapX={gapX} gapY={gapY}>
      {new Array(9).fill(1).map((__, index) => (
        <div
          key={index}
          style={{
            display: 'block',
            height: '200px',
            width: '200px',
            backgroundColor: 'aquamarine',
          }}
        ></div>
      ))}
    </Grid>
  ),
  args: {
    columns: 5,
    gapX: 30,
    gapY: 30,
  },
};
