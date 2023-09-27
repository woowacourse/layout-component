import type { Meta } from '@storybook/react';

import { HiHeart, HiOutlineHeart } from 'react-icons/hi2';

import type { MenuProps } from './Menu';
import Tab from './Tab';

const meta = {
  title: 'Tab/Menu',
  tags: ['autodocs'],
  component: Tab.Menu,
  args: {
    label: '탭',
    index: 0,
  },
} satisfies Meta<typeof Tab.Menu>;

export default meta;

export const Default = ({ label }: MenuProps) => {
  return (
    <Tab>
      <Tab.Menus gap={10}>
        {Array.from({ length: 7 }, (_, index) => (
          <Tab.Menu key={index} label={label} index={index} />
        ))}
      </Tab.Menus>
    </Tab>
  );
};

export const TabWithIcons = ({ label }: MenuProps) => {
  return (
    <Tab width={300}>
      <Tab.Menus highlightColor="#32affd">
        <Tab.Menu label={label} index={0} icon={<HiOutlineHeart />} />
        <Tab.Menu label={label} index={1} icon={<HiHeart />} iconPosition="top" />
        <Tab.Menu label={label} index={2} icon={<HiOutlineHeart />} iconPosition="right" />
        <Tab.Menu label={label} index={3} icon={<HiHeart />} iconPosition="bottom" />
      </Tab.Menus>
    </Tab>
  );
};
