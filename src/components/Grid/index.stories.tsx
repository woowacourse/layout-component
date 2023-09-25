import type { Meta, StoryObj } from '@storybook/react';

import Grid from '.';
import Container from '../Container';

const meta = {
  title: 'Grid',
  component: Grid,
  args: {
    width: 400,
    height: 400,
    backgroundColor: '#139eca',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
      <Grid rows={2} columns={2} gap={8} width='fit-content'>
        <Container width={100} height={100} backgroundColor='#139eca' />
        <Container width={100} height={100} backgroundColor='#139eca' />
        <Container width={100} height={100} backgroundColor='#139eca' />
        <Container width={100} height={100} backgroundColor='#139eca' />
      </Grid>
    );
  },
};
