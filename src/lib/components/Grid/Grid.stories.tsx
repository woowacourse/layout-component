import type { Meta, StoryObj } from '@storybook/react';
import { CSSProperties } from 'react';
import Grid from './Grid';

/**
 * The `Grid` component is designed for effortless grid element implementation, typically used in fixed layouts.
 */
const meta = {
  title: 'Grid',
  component: Grid,
  argTypes: {
    children: {
      description: 'The children to display',
    },
    verticalPadding: {
      description: 'The vertical padding of the grid',
    },
    horizontalPadding: {
      description: 'The horizontal padding of the grid',
    },
    rows: {
      description: 'The number of rows of the grid',
    },
    columns: {
      description: 'The number of columns of the grid',
    },
    gap: {
      description: 'The gap between cells of the grid.',
    },
    rowGap: {
      description:
        'The row gap between cells of the grid. This property overwrites the `gap` property.',
    },
    columnGap: {
      description:
        'The column gap between cells of the grid. This property overwrites the `gap` property.',
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

const itemStyles: CSSProperties = {
  display: 'block',
  height: '60px',
  background: `linear-gradient(45deg, #61215d, #b779af)`,
  color: '#eddfeb',
  border: '1px solid #ce9cc7',
  borderRadius: '5px',
  textAlign: 'center',
  fontSize: '20px',
  lineHeight: '60px',
};

export const Default: Story = {
  args: {
    rows: 3,
    columns: 4,
    gap: 5,
    children: (
      <>
        {Array.from({ length: 12 }).map(() => (
          <div style={itemStyles}>Grid Item</div>
        ))}
      </>
    ),
  },
};
