import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from '..';

const meta = {
  title: 'Grid',
  component: Grid,
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleChild = () => {
  return <div css={{ border: '1px solid pink' }}>item</div>;
};

export const Playground: Story = {
  render: (args) => {
    return (
      <Grid {...args} css={{ border: '1px solid black' }}>
        <SampleChild />
        <SampleChild />
        <SampleChild />
        <SampleChild />
        <SampleChild />
        <SampleChild />
        <SampleChild />
        <SampleChild />
      </Grid>
    );
  },
  args: {
    row: 2,
    column: 2,
    gap: '10px',
  },

  argTypes: {
    as: { control: 'select', options: ['section', 'dialog', 'div', 'span'] },
    columnGap: { control: 'text' },
    rowGap: { control: 'text' },
  },
};
