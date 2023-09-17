import { Meta, Story } from '@storybook/react';
import Grid from './Grid.tsx';
import { GridProps } from './types.ts';

export default {
  title: 'Components/Grid',
  component: Grid,
} as Meta;

const Template: Story<GridProps> = (args) => (
  <Grid {...args}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  rows: 3,
  columns: 3,
  gap: 10,
};
