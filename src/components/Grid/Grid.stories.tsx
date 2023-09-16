import type { Meta, StoryObj } from '@storybook/react';

import Grid from '.';
import Container from '../Container';

const meta = {
  title: 'Jero-Design-System/Grid',
  component: Grid,
  decorators: [
    (storyFn) => (
      <Container maxWidth='600px' minWidth='300px'>
        {storyFn()}
      </Container>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    backgroundColor: '#EAECEF',
    rows: 3,
    columns: 3,
    children: (
      <>
        {Array.from({ length: 9 }).map((_, index) => (
          <div style={{ border: '1px solid gray' }}>Item {index + 1}</div>
        ))}
      </>
    ),
  },
};

export const WithGap: Story = {
  args: {
    backgroundColor: '#EAECEF',
    rows: 4,
    columns: 3,
    gap: '10px',
    children: (
      <>
        {Array.from({ length: 12 }).map((_, index) => (
          <div style={{ border: '1px solid gray' }}>Item {index + 1}</div>
        ))}
      </>
    ),
  },
};
