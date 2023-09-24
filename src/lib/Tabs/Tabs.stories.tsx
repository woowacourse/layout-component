import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

type Story = StoryObj<typeof Tabs>;

const meta: Meta<typeof Tabs> = {
  title: 'NAVIGATION/Tabs',
  component: Tabs,
  argTypes: {
    children: {
      description: 'Flex Layout의 자식 요소',
    },
    direction: {
      description: 'Tabs의 위치를 지정하는 속성',
      options: ['horizontal', 'vertical'],
      control: {
        type: 'radio',
      },
    },
    scrollButtons: {
      description:
        'Tabs의 Navigation의 가로폭이 화면 폭보다 길어졌을 때, 위치를 이동시킬 수 있는 버튼의 유무를 지정하는 속성',
      options: [true, false],
      control: {
        type: 'radio',
      },
    },
    centered: {
      description: 'Tabs의 Navigation을 가운데로 정렬하는 속성',
      options: [true, false],
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;

export const DefaultTabs: Story = {
  args: {
    children: [
      <Tabs.Panel label="Panel1">Contents1</Tabs.Panel>,
      <Tabs.Panel label="Panel2">Contents2</Tabs.Panel>,
      <Tabs.Panel label="Panel3">Contents3</Tabs.Panel>,
    ],
  },
};

/**
 * Scroll 버튼이 존재하는 Tabs입니다. Scroll 버튼이 보이지 않는다면 화면의 폭을 줄여주세요.
 */
export const ExistScrollButtonTabs: Story = {
  args: {
    children: Array.from({ length: 25 }).map((_, index) => (
      <Tabs.Panel label={`Panel${(index + 1).toString()}`} key={index}>
        Contents{index + 1}
      </Tabs.Panel>
    )),
  },
};

/**
 * Scroll 버튼이 존재하지 않은 Tabs입니다.
 */
export const NoExistScrollButtonTabs: Story = {
  args: {
    scrollButtons: false,
    children: Array.from({ length: 25 }).map((_, index) => (
      <Tabs.Panel label={`Panel${(index + 1).toString()}`} key={index}>
        Contents{index + 1}
      </Tabs.Panel>
    )),
  },
};

/**
 * 비활성 탭이 존재하는 Tabs입니다.
 */
export const DisabledTabs: Story = {
  args: {
    children: [
      <Tabs.Panel label="Panel1">Contents1</Tabs.Panel>,
      <Tabs.Panel label="Panel2">Contents2</Tabs.Panel>,
      <Tabs.Panel label="Panel3">Contents3</Tabs.Panel>,
      <Tabs.Panel label="Disabled" disabled>
        Contents3
      </Tabs.Panel>,
      <Tabs.Panel label="Panel4">Contents3</Tabs.Panel>,
    ],
  },
};

/**
 * 수직으로 정렬된 Tab입니다.
 */
export const VerticalTabs: Story = {
  args: {
    direction: 'vertical',
    children: Array.from({ length: 5 }).map((_, index) => (
      <Tabs.Panel label={`Panel${(index + 1).toString()}`} key={index}>
        Contents{index + 1}
      </Tabs.Panel>
    )),
  },
};

/**
 * 수직으로 정렬되고 스크롤 버튼이 있는 Tab입니다.
 */
export const VerticalScrollTabs: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    direction: 'vertical',
    children: Array.from({ length: 32 }).map((_, index) => (
      <Tabs.Panel label={`Panel${(index + 1).toString()}`} key={index}>
        Contents{index + 1}
      </Tabs.Panel>
    )),
  },
};

/**
 * Tabs 네이버게이션이 가운데 정렬된 Tab입니다.
 */
export const CenterNavigationTabs: Story = {
  args: {
    centered: true,
    children: Array.from({ length: 3 }).map((_, index) => (
      <Tabs.Panel label={`Panel${(index + 1).toString()}`} key={index}>
        Contents{index + 1}
      </Tabs.Panel>
    )),
  },
};

/**
 * 수직으로 정렬되고 Tabs 네이버게이션이 가운데 정렬된 Tab입니다.
 */
export const VerticalCenterNavigationTabs: Story = {
  args: {
    centered: true,
    direction: 'vertical',
    children: Array.from({ length: 3 }).map((_, index) => (
      <Tabs.Panel label={`Panel${(index + 1).toString()}`} key={index}>
        Contents{index + 1}
      </Tabs.Panel>
    )),
  },
};

/**
 * Accent Color를 바뀐 Tabs입니다.
 */
export const ChangeAccentColorTabs: Story = {
  args: {
    accentColor: '#8523be',
    children: [
      <Tabs.Panel label="Panel1">Contents1</Tabs.Panel>,
      <Tabs.Panel label="Panel2">Contents2</Tabs.Panel>,
      <Tabs.Panel label="Panel3">Contents3</Tabs.Panel>,
      <Tabs.Panel label="Panel4">Contents3</Tabs.Panel>,
    ],
  },
};
