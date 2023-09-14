import { getRandomHexColor, getRandomNumber } from '@utils/random';

import type { Meta, StoryObj } from '@storybook/react';

import Container from '@components/Container';
import Flex from '@components/Flex';

const meta = {
  title: 'Flex',
  component: Flex,
  argTypes: {
    tag: { control: 'select', options: ['div', 'p', 'span', 'section', 'aside', 'article'] },
    rowGap: { control: { type: 'text' } },
    columnGap: { control: { type: 'text' } },
    gap: { control: { type: 'text' } },
  },
  args: {
    tag: 'div',
    direction: 'row',
    justify: 'flex-start',
    align: 'stretch',
    rowGap: 'normal',
    columnGap: 'normal',
    gap: 'normal',
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example1: Story = {
  args: {
    children: (
      <>
        <Container width={100} height={100} backgroundColor="#a8d9ff" />
        <Container width={200} height={200} backgroundColor="#65b9fc" />
        <Container width={150} height={150} backgroundColor="#249eff" />
      </>
    ),
  },
};

export const Example2: Story = {
  args: {
    children: (
      <>
        {Array.from({ length: 30 }, (_, index) => {
          const randomSize = getRandomNumber(100, 200);

          return (
            <Container
              key={index}
              width={randomSize}
              height={randomSize}
              backgroundColor={getRandomHexColor()}
            />
          );
        })}
      </>
    ),
    wrap: 'wrap',
  },
};
