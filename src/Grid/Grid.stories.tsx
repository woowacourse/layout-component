import type { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid';
import GridItem from '../GridItem/GridItem';

const meta: Meta<typeof Grid> = {
  title: 'Grid',
  component: Grid,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: 4,
    gap: 12,
    height: 100,
    children: (
      <>
        <GridItem backgroundColor='#FFEC99'>Item 1</GridItem>
        <GridItem backgroundColor='#FFEC99'>Item 2</GridItem>
        <GridItem backgroundColor='#FFEC99'>Item 3</GridItem>
        <GridItem backgroundColor='#FFEC99'>Item 4</GridItem>
      </>
    ),
  },
};

export const SpanningColumns: Story = {
  args: {
    columns: 5,
    rows: 2,
    gap: 4,
    height: 240,
    children: (
      <>
        <GridItem row={2} col={1} backgroundColor='#D8EAFF'>
          Item 1
        </GridItem>
        <GridItem col={2} backgroundColor='#D8EAFF'>
          Item 2
        </GridItem>
        <GridItem col={2} backgroundColor='#D8EAFF'>
          Item 3
        </GridItem>
        <GridItem col={4} backgroundColor='#D8EAFF'>
          Item 4
        </GridItem>
      </>
    ),
  },
};

export const TemplateAreas: Story = {
  args: {
    areas: `"header header" "nav main" "nav footer"`,
    rows: 3,
    columns: 4,
    gap: 4,
    height: 240,
    children: (
      <>
        <GridItem area='header' backgroundColor='#FFCFCF'>
          Header
        </GridItem>
        <GridItem area='nav' backgroundColor='#FFCFCF'>
          Nav
        </GridItem>
        <GridItem area='main' backgroundColor='#FFCFCF'>
          Main
        </GridItem>
        <GridItem area='footer' backgroundColor='#FFCFCF'>
          Footer
        </GridItem>
      </>
    ),
  },
};

export const Temp: Story = {
  render: () => (
    <Grid
      areas={`"header header"
      "nav main"
      "nav footer"`}
      rows={3}
      columns={4}
      gap={2}
      height='200px'
    >
      <GridItem area={'header'} backgroundColor='#FF727B'>
        Header
      </GridItem>
      <GridItem area={'nav'} backgroundColor='#FFC37B'>
        Nav
      </GridItem>
      <GridItem area={'main'} backgroundColor='#F5FF91'>
        Main
      </GridItem>
      <GridItem area={'footer'} backgroundColor='#6FFFCB'>
        Footer
      </GridItem>
    </Grid>
  ),
};
