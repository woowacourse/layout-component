import type { Meta } from '@storybook/react';

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

export const Default = ({ label, ...args }: MenuProps) => {
  return (
    <Tab>
      <Tab.Menus gap={10} {...args}>
        {Array.from({ length: 7 }, (_, index) => (
          <Tab.Menu key={index} label={label} index={index} />
        ))}
      </Tab.Menus>
    </Tab>
  );
};
