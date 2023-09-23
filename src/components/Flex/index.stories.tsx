import type { Meta, StoryObj } from '@storybook/react';

import Flex from '.';
import Container from '../Container';

const meta = {
  title: 'Flex',
  component: Flex,
  args: {
    width: 400,
    height: 400,
    backgroundColor: '#139eca',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
      <Flex width='fit-content' gap={8}>
        <Container width={100} height={100} backgroundColor='#139eca' />
        <Container width={100} height={100} backgroundColor='#139eca' />
        <Container width={100} height={100} backgroundColor='#139eca' />
        <Container width={100} height={100} backgroundColor='#139eca' />
      </Flex>
    );
  },
};

export const Secondary: Story = {
  render: () => {
    return (
      <Flex direction='column' gap={8}>
        <Container width={100} height={100} backgroundColor='#139eca' />
        <Container width={100} height={100} backgroundColor='#139eca' />
        <Container width={100} height={100} backgroundColor='#139eca' />
        <Container width={100} height={100} backgroundColor='#139eca' />
      </Flex>
    );
  },
};
