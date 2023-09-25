import type { Meta } from '@storybook/react';

import { sizeArgTypes } from '../styles/size';
import { spacingArgTypes } from '../styles/spacing';
import type { MenusProps } from './Menus';
import Menus from './Menus';
import Tab from './Tab';

const meta = {
  title: 'Tab/Menus',
  component: Menus,
  args: {
    highlightColor: '#32affd',
  },
  argTypes: {
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
