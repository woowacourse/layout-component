import { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid';

const meta = {
  title: 'Grid',
  component: Grid,
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

const itemStyle = {
  background: '#333333',
  color: '#ffffff',
  padding: '4px 6px',
};

export const Default: Story = {
  args: {
    rows: 4,
    cols: 4,
    gap: 30,
    children: (
      <>
        <h1>Grid Component</h1>
        {Array.from({ length: 10 }, (_, idx) => (
          <div key={idx} style={itemStyle}>
            Item {idx + 1}
          </div>
        ))}
      </>
    ),
  },
};
