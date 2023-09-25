import type { Meta, StoryObj } from '@storybook/react';
import SplitPane from '../lib/SplitPane';

const meta = {
  title: 'Jero-Design-System/SplitPane',
  component: SplitPane,
  tags: ['autodocs'],
} satisfies Meta<typeof SplitPane>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 1000,
    minSize: '10%',
    maxSize: '90%',
    firstPane: (
      <div
        style={{
          height: '100vh',
          padding: '20px',
          backgroundColor: 'tomato',
          color: 'white',
        }}
      >
        First Pane
      </div>
    ),
    secondPane: (
      <div
        style={{
          height: '100vh',
          padding: '20px',
          backgroundColor: 'brown',
          color: 'white',
        }}
      >
        Second Pane
      </div>
    ),
  },
};

export const MinSizeThirtyPercent: Story = {
  args: {
    width: 500,
    minSize: '30%',
    maxSize: '80%',
    firstPane: (
      <div
        style={{
          height: '100vh',
          padding: '20px',
          backgroundColor: 'skyblue',
          color: 'white',
        }}
      >
        First Pane
      </div>
    ),
    secondPane: (
      <div
        style={{
          height: '100vh',
          padding: '20px',
          backgroundColor: 'blue',
          color: 'white',
        }}
      >
        Second Pane
      </div>
    ),
  },
};
