import type { Meta } from '@storybook/react';

import { sizeArgTypes } from '../styles/size';
import { spacingArgTypes } from '../styles/spacing';
import type { TabProps } from './Tab';
import Tab from './Tab';

const meta = {
  title: 'Tab/Tab',
  component: Tab,
  parameters: {
    docs: {
      description: {
        component:
          '각 Tab 메뉴에 따라 다른 내용을 보여줄 수 있습니다. 원하는 Menu와 Content를 index로 연결하세요.',
      },
    },
  },
  args: {
    initialIndex: 0,
    vertical: false,
  },
  argTypes: {
    ...sizeArgTypes,
    ...spacingArgTypes,
  },
} satisfies Meta<typeof Tab>;

export default meta;

const days = ['월', '화', '수', '목', '금', '토', '일'] as const;
const engDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'] as const;

export const Default = ({ ...args }: TabProps) => {
  return (
    <Tab width={400} {...args}>
      <Tab.Menus highlightColor="#32affd">
        {days.map((day, index) => (
          <Tab.Menu key={day} label={day} index={index} />
        ))}
      </Tab.Menus>
      {days.map((_, index) => (
        <Tab.Content key={index} index={index}>
          내용 {index}
        </Tab.Content>
      ))}
    </Tab>
  );
};

export const Vertical = ({ ...args }) => {
  return (
    <Tab vertical width={400} {...args}>
      <Tab.Menus width={46} gap={10}>
        {engDays.map((day, index) => (
          <Tab.Menu key={day} label={day} index={index} />
        ))}
      </Tab.Menus>
      {engDays.map((_, index) => (
        <Tab.Content key={index} index={index}>
          <p>내용 {index}</p>
        </Tab.Content>
      ))}
    </Tab>
  );
};

export const InitialIndex = ({ ...args }) => {
  return (
    <Tab width={400} initialIndex={3} {...args}>
      <Tab.Menus>
        {engDays.map((day, index) => (
          <Tab.Menu key={day} label={day} index={index} />
        ))}
      </Tab.Menus>
      {engDays.map((_, index) => (
        <Tab.Content key={index} index={index}>
          <p>내용 {index}</p>
        </Tab.Content>
      ))}
    </Tab>
  );
};
