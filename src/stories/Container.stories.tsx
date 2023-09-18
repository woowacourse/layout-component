import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Container from '../lib/Container';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Container',
  component: Container,
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
    maxWidth: { control: 'number' },
    minWidth: { control: 'number' },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MaxContainer: Story = {
  render: () => (
    <Container
      css={{
        backgroundColor: 'rgb(250,224,240)',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <Container maxWidth={500}>
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
  args: {},
};

export const MinContainer: Story = {
  render: () => (
    <Container minWidth={300}>
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
  args: {},
};
