import type { Meta, StoryObj } from '@storybook/react';

import SplitPane from '../components/SplitPane/SplitPane';

const meta = {
  title: 'SplitPane',
  component: SplitPane,
  tags: ['autodocs'],
} satisfies Meta<typeof SplitPane>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    return (
      <div style={{ height: '500px', border: '1px solid black' }}>
        <SplitPane width="500px">
          <div>a</div>
          <div>b</div>
        </SplitPane>
      </div>
    );
  },
  args: {
    children: [<div>a</div>, <div>b</div>],
  },
};
