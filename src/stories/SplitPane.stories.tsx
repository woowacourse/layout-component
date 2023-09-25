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
    return <SplitPane />;
  },
};
