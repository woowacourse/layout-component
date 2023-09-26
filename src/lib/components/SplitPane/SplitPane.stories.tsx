import type { Meta, StoryObj } from '@storybook/react';
import SplitPane from './SplitPane';

/**
 * `SplitPane` component is a component that allows users to adjust the sizes of two child components. Use the resize bar to change these sizes.
 */
const meta = {
  title: 'SplitPane',
  component: SplitPane,
  argTypes: {
    children: {
      description:
        '**Exactly couple of components** that you want to place inside the `SplitPane`',
    },
    defaultSize: {
      description:
        'The default size of the first child. Also used to adjust the position of the resize bar.',
      table: {
        defaultValue: { summary: '50%' },
      },
    },
    minSize: {
      description:
        'The minimum size of the first child. Also used to adjust the position of the resize bar.',
      table: {
        defaultValue: { summary: '10%' },
      },
    },
    maxSize: {
      description:
        'The maximum size of the first child. Also used to adjust the position of the resize bar.',
      table: {
        defaultValue: { summary: '90%' },
      },
    },
    direction: {
      description: 'The direction that children will be aligned.',
      table: {
        defaultValue: { summary: 'row' },
      },
    },
    width: {
      description: 'The width of the `SplitPane` component.',
      table: {
        defaultValue: { summary: '100%' },
      },
    },
    height: {
      description: 'The height of the `SplitPane` component.',
      table: {
        defaultValue: { summary: 'auto' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px', height: '380px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SplitPane>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DirectionRow: Story = {
  args: {
    children: (
      <>
        <div
          style={{ backgroundColor: '#97ebff', width: '100%', height: '100%' }}
        />
        <div
          style={{ backgroundColor: '#ffb5af', width: '100%', height: '100%' }}
        />
      </>
    ),
  },
};

export const DirectionColumn: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div
          style={{ backgroundColor: '#97ebff', width: '100%', height: '100%' }}
        />
        <div
          style={{ backgroundColor: '#ffb5af', width: '100%', height: '100%' }}
        />
      </>
    ),
  },
};
