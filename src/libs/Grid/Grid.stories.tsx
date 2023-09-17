import type { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid';

type Story = StoryObj<typeof Grid>;

const meta: Meta<typeof Grid> = {
  title: 'LAYOUT/Grid',
  component: Grid,
};

export default meta;

const customGridItemStyle = {
  background: 'rgba(245, 245, 245)',
  padding: '10px',
  borderRadius: '5px',
};

export const DefaultGrid: Story = {
  render: () => {
    return (
      <Grid columns={4} gap="20px">
        <Grid.Item style={customGridItemStyle}>Item1</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item2</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item3</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item4</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item5</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item6</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item7</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item8</Grid.Item>
      </Grid>
    );
  },
};

export const CommonGrid: Story = {
  render: () => {
    return (
      <Grid columns={12} gap="10px">
        <Grid.Item style={customGridItemStyle}>Item1</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item2</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item3</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item4</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item5</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item6</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item7</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item8</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item9</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item10</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item11</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item12</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item13</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item14</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item15</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item16</Grid.Item>
      </Grid>
    );
  },
};

export const CustomColumGrid: Story = {
  render: () => {
    return (
      <Grid columns={4} gap="20px">
        <Grid.Item $gridColumn={'1/4'} style={customGridItemStyle}>
          Item1 - column 1 / 4
        </Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item2</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item3</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item4</Grid.Item>
        <Grid.Item $gridColumn={'3/5'} style={customGridItemStyle}>
          Item5 - column 3 / 5
        </Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item6</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item7</Grid.Item>
        <Grid.Item $gridColumn={'3/5'} style={customGridItemStyle}>
          Item8 - column 3 / 5
        </Grid.Item>
      </Grid>
    );
  },
};

export const CustomRowGrid: Story = {
  render: () => {
    return (
      <Grid columns={4} rows={2} gap="20px">
        <Grid.Item $gridRow={'1/3'} style={customGridItemStyle}>
          Item1 - row 1 / 3
        </Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item2</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item3</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item4</Grid.Item>
        <Grid.Item $gridRow={'2/4'} style={customGridItemStyle}>
          Item5 - row 2 / 4
        </Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item6</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item7</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item8</Grid.Item>
      </Grid>
    );
  },
};

export const CustomColumnRowGrid: Story = {
  render: () => {
    return (
      <Grid columns={4} rows={2} gap="20px">
        <Grid.Item
          $gridRow={'1/4'}
          $gridColumn={'1/4'}
          style={customGridItemStyle}
        >
          Item1 - row 1 / 4, column 1 / 4
        </Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item2</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item3</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item4</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item5</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item6</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item7</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item8</Grid.Item>
      </Grid>
    );
  },
};

export const CustomLayoutDirectionGrid: Story = {
  render: () => {
    return (
      <Grid columns={4} rows={2} gap="20px" justify="center">
        <Grid.Item style={customGridItemStyle}>Item1</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item2</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item3</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item4</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item5</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item6</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item7</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item8</Grid.Item>
      </Grid>
    );
  },
};

export const CustomItemDirectionGrid: Story = {
  render: () => {
    return (
      <Grid columns={3} gap="20px">
        <Grid.Item style={customGridItemStyle} align="center">
          Item1 - justify flex-end
        </Grid.Item>
        <Grid.Item
          style={customGridItemStyle}
          justify="flex-start"
          align="center"
        >
          Item2 - justify flex-start, align center
        </Grid.Item>
        <Grid.Item
          style={{
            ...customGridItemStyle,
            height: '120px',
          }}
          justify="center"
        >
          Item3 - justify center
        </Grid.Item>
        <Grid.Item style={customGridItemStyle} justify="center">
          Item4 - justify center
        </Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item5</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item6</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item7</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item8</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item9</Grid.Item>
      </Grid>
    );
  },
};

export const IgnoreGridItem: Story = {
  render: () => {
    return (
      <Grid columns={4} gap="20px">
        <Grid.Item style={customGridItemStyle}>Item1</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item2</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item3</Grid.Item>
        <div style={customGridItemStyle}>Item4 - ignore</div>
        <Grid.Item style={customGridItemStyle}>Item5</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item6</Grid.Item>
        <Grid.Item style={customGridItemStyle}>Item7</Grid.Item>
        <div style={customGridItemStyle}>Item8 - ignore</div>
      </Grid>
    );
  },
};
