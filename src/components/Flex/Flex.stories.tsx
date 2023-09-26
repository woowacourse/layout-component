import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Flex from './Flex';

const Item = (count: number) => {
  const greenIntensity = 255 - count * 20;
  const blueIntensity = 205 + count * 6;

  const backgroundColor = `rgb(0, ${greenIntensity}, ${blueIntensity})`;

  return <div style={{ backgroundColor, padding: '10px' }}>Item{count + 1}</div>;
};

const meta = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {},
  args: {
    direction: 'row',
    justify: 'center',
    align: 'center',
    children: Array.from({ length: 8 }).map((_, index) => Item(index)),
    gap: '10px',
    style: { width: '100%', height: '400px', backgroundColor: 'lightgray' },
  },
  argTypes: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Column: Story = {
  args: {
    direction: 'column',
  },
};

export const ColumnReverse: Story = {
  args: {
    direction: 'column-reverse',
  },
};

export const Gap40px: Story = {
  args: {
    gap: '40px',
  },
};

/**
 * 반응형(media-query) px 기준입니다.
 *
 * `mobile` (0 <= screen < 640): `column-reverse`
 *
 * `tablet` (640 <= screen < 1024): `column`
 *
 * `laptop` (1024 <= screen < 1200): `row`
 *
 * `desktop` (1200 <= screen): `row-reverse`
 */
export const Responsive: Story = {
  args: {
    direction: {
      mobile: 'column-reverse',
      tablet: 'column',
      laptop: 'row',
      desktop: 'row-reverse',
    },
    justify: {
      mobile: 'flex-start',
      tablet: 'flex-end',
      laptop: 'center',
      desktop: 'flex-end',
    },
    gap: {
      mobile: '5px',
      tablet: '10px',
      laptop: '30px',
      desktop: '40px',
    },
  },
};
