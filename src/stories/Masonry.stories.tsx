import type { Meta, StoryObj } from '@storybook/react';

import Masonry from '@components/Masonry';

import { getRandomHSLColor, getRandomNumber } from '@utils/random';

const meta = {
  title: 'Masonry',
  component: Masonry,
  parameters: {
    docs: {
      description: {
        component:
          '여러 크기의 아이템을 격자 형태로 정렬하되, 각 열의 높이가 동일하지 않아 빈 공간이 최소화되는 Masonry 레이아웃을 만들기 위한 컴포넌트.',
      },
    },
  },
  args: {
    tag: 'ul',
    children: (
      <>
        {Array.from({ length: 20 }, (_, index) => (
          <li
            style={{
              height: getRandomNumber(100, 500),
              backgroundColor: getRandomHSLColor({
                hue: 205,
                minS: 100,
                maxS: 100,
                minL: 70,
                maxL: 90,
              }),
              borderRadius: '8px',
            }}
            key={index}
          />
        ))}
      </>
    ),
  },
} satisfies Meta<typeof Masonry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example1: Story = {
  args: {
    columns: { xs: 1, sm: 2, md: 3, lg: 4 },
    spacing: 24,
  },
};

export const Example2: Story = {
  args: {
    columns: 5,
    spacing: 24,
  },
};
