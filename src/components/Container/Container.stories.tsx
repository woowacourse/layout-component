import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '~/components/Container/Container';

const meta = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const ChildStyle = {
  width: '100%',
  height: '600px',
  backgroundColor: 'rgb(207, 232, 252)',
};

export const Primary: Story = {
  args: {
    children: (
      <>
        <div style={ChildStyle}>Content</div>
      </>
    ),
  },
};

export const AsSection: Story = {
  args: {
    children: (
      <>
        <div style={ChildStyle}>Content</div>
      </>
    ),
    as: 'section',
  },
};

export const WithMaxWidth: Story = {
  args: {
    children: (
      <>
        <div style={ChildStyle}>Content</div>
      </>
    ),
    maxWidth: 600,
  },
};

export const WithMinAndMaxWidth: Story = {
  args: {
    children: (
      <>
        <div style={ChildStyle}>Content</div>
      </>
    ),
    minWidth: 300,
    maxWidth: 600,
  },
};

export const WithPercentageMaxWidth: Story = {
  args: {
    children: (
      <>
        <div style={ChildStyle}>Content</div>
      </>
    ),
    maxWidth: '50%',
  },
};

export const WithOtherProps: Story = {
  args: {
    children: (
      <>
        <div style={ChildStyle}>Content</div>
      </>
    ),
    minWidth: 300,
    maxWidth: 600,
    css: {
      padding: '20px',
    },
  },
};
