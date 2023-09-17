import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '~/components/Grid/Grid';

const meta = {
  title: 'Example/Grid',
  component: Grid,
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const ChildStyle = {
  width: '300px',
  height: '300px',
  backgroundColor: 'rgb(207, 232, 252)',
};

export const Grid3X3: Story = {
  args: {
    rows: 3,
    columns: 3,
    children: (
      <>
        <div style={ChildStyle}>Child 1</div>
        <div style={ChildStyle}>Child 2</div>
        <div style={ChildStyle}>Child 3</div>
        <div style={ChildStyle}>Child 4</div>
        <div style={ChildStyle}>Child 5</div>
        <div style={ChildStyle}>Child 6</div>
        <div style={ChildStyle}>Child 7</div>
        <div style={ChildStyle}>Child 8</div>
        <div style={ChildStyle}>Child 9</div>
      </>
    ),
    gap: 10,
  },
};

export const Grid2X4: Story = {
  args: {
    rows: 2,
    columns: 4,
    children: (
      <>
        <div style={ChildStyle}>Child 1</div>
        <div style={ChildStyle}>Child 2</div>
        <div style={ChildStyle}>Child 3</div>
        <div style={ChildStyle}>Child 4</div>
        <div style={ChildStyle}>Child 5</div>
        <div style={ChildStyle}>Child 6</div>
        <div style={ChildStyle}>Child 7</div>
        <div style={ChildStyle}>Child 8</div>
      </>
    ),
    gap: 10,
  },
};

export const Grid4X2: Story = {
  args: {
    rows: 4,
    columns: 2,
    children: (
      <>
        <div style={ChildStyle}>Child 1</div>
        <div style={ChildStyle}>Child 2</div>
        <div style={ChildStyle}>Child 3</div>
        <div style={ChildStyle}>Child 4</div>
        <div style={ChildStyle}>Child 5</div>
        <div style={ChildStyle}>Child 6</div>
        <div style={ChildStyle}>Child 7</div>
        <div style={ChildStyle}>Child 8</div>
      </>
    ),
    gap: 10,
  },
};
