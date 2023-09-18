import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Flex from '../lib/Flex';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Flex',
  component: Flex,
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
    direction: { control: 'text', defaultValue: 'row' },
    alignItems: { control: 'text', defaultValue: 'start' },
    flexWrap: { control: 'text', defaultValue: 'nowrap' },
    justifyContent: { control: 'text', defaultValue: 'start' },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const RowFlex: Story = {
  render: ({ css, justifyContent, direction, alignItems, flexWrap }) => (
    <Flex
      css={css}
      justifyContent={justifyContent}
      direction={direction}
      alignItems={alignItems}
      flexWrap={flexWrap}
    >
      <div
        style={{ width: '100px', height: '100px', backgroundColor: 'pink' }}
      ></div>
      <div
        style={{ width: '100px', height: '100px', backgroundColor: 'yellow' }}
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
      gap: '30px',
    },
    direction: 'row',
  },
};

export const ColumnFlex: Story = {
  render: ({ css, justifyContent, direction, alignItems, flexWrap }) => (
    <Flex
      css={css}
      justifyContent={justifyContent}
      direction={direction}
      alignItems={alignItems}
      flexWrap={flexWrap}
    >
      <div
        style={{ width: '100px', height: '100px', backgroundColor: 'pink' }}
      ></div>
      <div
        style={{ width: '100px', height: '100px', backgroundColor: 'yellow' }}
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
      gap: '30px',
    },
    direction: 'column',
  },
};

export const CenterFlex: Story = {
  render: ({ css, justifyContent, direction, alignItems, flexWrap }) => (
    <Flex
      css={css}
      justifyContent={justifyContent}
      direction={direction}
      alignItems={alignItems}
      flexWrap={flexWrap}
    >
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
