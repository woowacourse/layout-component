import { Meta, StoryObj } from '@storybook/react';
import Container from '../Container/Container';

const meta = {
  title: 'Container',
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    minWidth: 600,
    maxWidth: 960,
    children: (
      <div
        style={{
          background: '#333333',
          color: '#ffffff',
          padding: '10px 20px',
        }}
      >
        <h1>Container Component</h1>
        props: minWidth, maxWidth
      </div>
    ),
  },
};
