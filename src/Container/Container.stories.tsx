import type { Meta } from '@storybook/react';

import Container from './Container';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;

export const Default = () => {
  return <Container />;
};
