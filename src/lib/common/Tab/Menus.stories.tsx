import type { Meta } from '@storybook/react';

import { sizeArgTypes } from '../styles/size';
import { spacingArgTypes } from '../styles/spacing';
import type { MenusProps } from './Menus';
import Menus from './Menus';
import Tab from './Tab';

const meta = {
  title: 'Tab/Menus',
  tags: ['autodocs'],
  component: Menus,
  args: {
    highlightColor: '#32affd',
    index: 1,
  },
  argTypes: {
    index: {
      control: {
        type: 'number',
      },
      description:
        '같은 index 가진 Content와 연결<br />Menu를 누르면 Menu의 index와 같은 index를 가진 Content가 보임',
    },
    ...sizeArgTypes,
    ...spacingArgTypes,
  },
} satisfies Meta<typeof Menus>;

export default meta;

const days = ['월', '화', '수', '목', '금', '토', '일'] as const;

export const Default = ({ highlightColor, ...args }: MenusProps) => {
  return (
    <Tab id="한글" width={400}>
      <Tab.Menus gap={10} highlightColor={highlightColor} {...args}>
        {days.map((day, index) => (
          <Tab.Menu key={day} label={day} index={index} />
        ))}
      </Tab.Menus>
    </Tab>
  );
};
