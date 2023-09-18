import type { Meta, StoryObj } from '@storybook/react';

import Container from './Container';
import { css } from 'styled-components';

const meta = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    minWidth: '780px',
    maxWidth: '1920px',
    minHeight: '100px',
    maxHeight: '1920px',
    width: '100px',
    height: '100px',
    children: <div>Container</div>,
    css: css`
      font-size: 2rem;
      font-weight: bold;
    `,
  },

  render: (args) => {
    return (
      <>
        <Container {...args} backgroundColor={'#bffff5'} />
        <Container {...args} backgroundColor={'#98fff0'} />
        <Container {...args} backgroundColor={'#64e3d0'} />
        <Container {...args} backgroundColor={'#49b9a8'} />
        <Container {...args} backgroundColor={'#2c9484'} />
      </>
    );
  },
};
