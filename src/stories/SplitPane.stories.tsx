import type { Meta, StoryObj } from '@storybook/react';
import { SplitPane } from '../lib';
import React from 'react';
import { leftText, rightText } from './utils';

const meta = {
  title: 'SplitPane',
  component: SplitPane,
  tags: ['autodocs'],
  argTypes: {
    defaultSize: {
      defaultValue: { summary: '50%' },
      description:
        'defaultSize `number`와 `string`타입을 받습니다. `number`타입의 경우 px단위로 결정됩니다.',
    },
    minSize: {
      defaultValue: { summary: '20%' },
      description:
        'minSize는 `number`와 `string`타입을 받습니다. `number`타입의 경우 px단위로 결정됩니다.',
    },
    maxSize: {
      defaultValue: { summary: '80%' },
      description:
        'maxSize는 `number`와 `string`타입을 받습니다. `number`타입의 경우 px단위로 결정됩니다.',
    },
  },
  args: {
    minSize: '30%',
    maxSize: '70%',
    defaultSize: '50%',
  },
} satisfies Meta<typeof SplitPane>;

export default meta;
type Story = StoryObj<typeof SplitPane>;

export const Example: Story = {
  render: (args) => {
    return (
      <SplitPane {...args}>
        <div style={{ margin: '4px' }}>{leftText}</div>
        <div style={{ margin: '4px' }}>{rightText}</div>
      </SplitPane>
    );
  },
};
