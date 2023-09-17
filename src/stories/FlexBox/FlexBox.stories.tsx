import type { Meta, StoryObj } from '@storybook/react';

import { FlexBox } from '../..';

const meta = {
  title: 'FlexBox',
  component: FlexBox,
  tags: ['autodocs'],
  argTypes: {
    align: {
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'],
      control: { type: 'radio' },
      defaultValue: 3,
      description: 'FlexBox의 세로축 정렬 기준을 지정할 수 있습니다.',
    },
    justify: {
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'],
      control: { type: 'radio' },
      description: 'FlexBox의 가로축 정렬 기준을 지정할 수 있습니다.',
    },
    direction: {
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      control: { type: 'radio' },
      description: 'FlexBox의 정렬 방향을 지정할 수 있습니다.',
    },
    gap: {
      control: 'number',
      description: 'FlexBox 속 자식 요소들의 간격을 지정할 수 있습니다.',
    },
    css: {
      description: 'css 속성을 직접 지정할 수 있습니다.',
    },
  },
} satisfies Meta<typeof FlexBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContainerLayout: Story = {
  args: {
    direction: 'row',
    align: 'flex-start',
    justify: 'flex-start',
    gap: 10,
    css: { backgroundColor: '#000', height: 600 },
    children: Array.from({ length: 6 }).map((_, i) => (
      <div key={i} style={{ height: 50, width: 'fit-content', backgroundColor: '#0064ff' }}>
        FlexBoxItem{i}
      </div>
    )),
  },
};
