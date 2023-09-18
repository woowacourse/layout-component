import type { Meta, StoryObj } from '@storybook/react';

import Grid from '../components/Grid/Grid';

const meta = {
  title: 'Grid',
  component: Grid,
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleChild = ({ id }: { id: number }) => {
  return (
    <div style={{ border: '1px solid pink', margin: '5px' }}>item{id}</div>
  );
};

export const Playground: Story = {
  render: (args) => {
    return (
      <Grid {...args} style={{ border: '1px solid black' }}>
        {[1, 2, 3, 4, 5, 6, 7].map((id) => (
          <SampleChild id={id} />
        ))}
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
