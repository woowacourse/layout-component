import type { Meta, StoryObj } from '@storybook/react';

import Container from '../lib/Container';
import Flex from '../lib/Flex';

const meta = {
  title: 'Jero-Design-System/Flex',
  component: Flex,
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
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DirectionRow: Story = {
  args: {
    backgroundColor: '#EAECEF',
    direction: 'row',
    justify: 'center',
    align: 'start',
    children: (
      <>
        {Array.from({ length: 3 }).map((_, index) => (
          <div style={{ border: '1px solid gray' }}>Item {index + 1}</div>
        ))}
      </>
    ),
  },
};

export const DirectionColumn: Story = {
  args: {
    backgroundColor: '#EAECEF',
    direction: 'column',
    justify: 'center',
    align: 'start',
    children: (
      <>
        {Array.from({ length: 3 }).map((_, index) => (
          <div style={{ border: '1px solid gray' }}>Item {index + 1}</div>
        ))}
      </>
    ),
  },
};

export const JustifyStart: Story = {
  args: {
    backgroundColor: '#EAECEF',
    direction: 'row',
    justify: 'start',
    align: 'center',
    children: (
      <>
        {Array.from({ length: 3 }).map((_, index) => (
          <div style={{ border: '1px solid gray' }}>Item {index + 1}</div>
        ))}
      </>
    ),
  },
};

export const JustifyCenter: Story = {
  args: {
    backgroundColor: '#EAECEF',
    direction: 'row',
    justify: 'center',
    align: 'center',
    children: (
      <>
        {Array.from({ length: 3 }).map((_, index) => (
          <div style={{ border: '1px solid gray' }}>Item {index + 1}</div>
        ))}
      </>
    ),
  },
};

export const JustifyEnd: Story = {
  args: {
    backgroundColor: '#EAECEF',
    direction: 'row',
    justify: 'end',
    align: 'center',
    children: (
      <>
        {Array.from({ length: 3 }).map((_, index) => (
          <div style={{ border: '1px solid gray' }}>Item {index + 1}</div>
        ))}
      </>
    ),
  },
};

export const JustifySpaceBetween: Story = {
  args: {
    backgroundColor: '#EAECEF',
    direction: 'row',
    justify: 'space-between',
    align: 'center',
    children: (
      <>
        {Array.from({ length: 3 }).map((_, index) => (
          <div style={{ border: '1px solid gray' }}>Item {index + 1}</div>
        ))}
      </>
    ),
  },
};

export const AlignStart: Story = {
  args: {
    backgroundColor: '#EAECEF',
    direction: 'row',
    justify: 'start',
    align: 'start',
    children: (
      <>
        {Array.from({ length: 3 }).map((_, index) => (
          <div style={{ border: '1px solid gray' }}>Item {index + 1}</div>
        ))}
      </>
    ),
  },
};

export const AlignCenter: Story = {
  args: {
    backgroundColor: '#EAECEF',
    direction: 'row',
    justify: 'start',
    align: 'center',
    children: (
      <>
        {Array.from({ length: 3 }).map((_, index) => (
          <div style={{ border: '1px solid gray' }}>Item {index + 1}</div>
        ))}
      </>
    ),
  },
};

export const AlignEnd: Story = {
  args: {
    backgroundColor: '#EAECEF',
    direction: 'row',
    justify: 'start',
    align: 'end',
    children: (
      <>
        {Array.from({ length: 3 }).map((_, index) => (
          <div style={{ border: '1px solid gray' }}>Item {index + 1}</div>
        ))}
      </>
    ),
  },
};

export const WithGap: Story = {
  args: {
    backgroundColor: '#EAECEF',
    direction: 'row',
    justify: 'center',
    align: 'center',
    gap: '10px',
    children: (
      <>
        {Array.from({ length: 9 }).map((_, index) => (
          <div style={{ border: '1px solid gray' }}>Item {index + 1}</div>
        ))}
      </>
    ),
  },
};
