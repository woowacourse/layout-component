import type { Meta } from '@storybook/react';

import { sizeArgTypes } from '../styles/size';
import { spacingArgTypes } from '../styles/spacing';
import type { MenusProps } from './Menus';
import Tab from './Tab';

const meta = {
  title: 'Tab/Menus',
  tags: ['autodocs'],
  component: Tab.Menus,
  parameters: {
    docs: {
      description: {
        component: `Tab의 Menus는 FlexContainer로 구성되었습니다. 따라서 FlexContainer의 속성을 그대로 사용할 수 있습니다.`,
      },
    },
  },
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
    css: {
      description: 'CSS 속성을 직접 입력할 수 있습니다.',
    },
    ...sizeArgTypes,
    ...spacingArgTypes,
  },
} satisfies Meta<typeof Tab.Menus>;

export default meta;

const DAYS = ['월', '화', '수', '목', '금', '토', '일'] as const;

export const Default = ({ highlightColor, ...args }: MenusProps) => {
  return (
    <Tab id="menus-default" width={400}>
      <Tab.Menus gap={10} highlightColor={highlightColor} {...args}>
        {DAYS.map((day, index) => (
          <Tab.Menu key={day} label={day} index={index} />
        ))}
      </Tab.Menus>
    </Tab>
  );
};
