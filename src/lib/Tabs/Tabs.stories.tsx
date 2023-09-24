import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

type Story = StoryObj<typeof Tabs>;

const meta: Meta<typeof Tabs> = {
  title: 'NAVIGATION/Tabs',
  component: Tabs,
};

export default meta;

export const DefaultTabs: Story = {
  render: () => {
    return (
      <Tabs>
        <Tabs.Panel label="Panel1">Contents1</Tabs.Panel>
        <Tabs.Panel label="Panel2">Contents2</Tabs.Panel>
        <Tabs.Panel label="Panel3">Contents3</Tabs.Panel>
      </Tabs>
    );
  },
};

/**
 * Scroll 버튼이 존재하는 Tabs입니다. Scroll 버튼이 보이지 않는다면 화면의 폭을 줄여주세요.
 */
export const ExistScrollButtonTabs: Story = {
  render: () => {
    return (
      <Tabs>
        {Array.from({ length: 25 }).map((_, index) => (
          <Tabs.Panel label={`Panel${(index + 1).toString()}`} key={index}>
            Contents{index}
          </Tabs.Panel>
        ))}
      </Tabs>
    );
  },
};

/**
 * Scroll 버튼이 존재하지 않은 Tabs입니다.
 */
export const NoExistScrollButtonTabs: Story = {
  render: () => {
    return (
      <Tabs scrollButtons={false}>
        {Array.from({ length: 25 }).map((_, index) => (
          <Tabs.Panel label={`Panel${(index + 1).toString()}`} key={index}>
            Contents{index}
          </Tabs.Panel>
        ))}
      </Tabs>
    );
  },
};

/**
 * 비활성 탭이 존재하는 Tabs입니다.
 */
export const DisabledTabs: Story = {
  render: () => {
    return (
      <Tabs>
        <Tabs.Panel label="Panel1">Contents1</Tabs.Panel>
        <Tabs.Panel label="Panel2">Contents2</Tabs.Panel>
        <Tabs.Panel label="Panel3">Contents3</Tabs.Panel>
        <Tabs.Panel label="Disabled" disabled>
          Contents3
        </Tabs.Panel>
        <Tabs.Panel label="Panel4">Contents3</Tabs.Panel>
      </Tabs>
    );
  },
};

/**
 * 수직으로 정렬된 Tab입니다.
 */
export const VerticalTabs: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: () => {
    return (
      <Tabs direction="vertical">
        {Array.from({ length: 5 }).map((_, index) => (
          <Tabs.Panel label={`Panel${(index + 1).toString()}`} key={index}>
            Contents{index}
          </Tabs.Panel>
        ))}
      </Tabs>
    );
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
  render: () => {
    return (
      <Tabs direction="vertical">
        {Array.from({ length: 32 }).map((_, index) => (
          <Tabs.Panel label={`Panel${(index + 1).toString()}`} key={index}>
            Contents{index}
          </Tabs.Panel>
        ))}
      </Tabs>
    );
  },
};

/**
 * Tabs 네이버게이션이 가운데 정렬된 Tab입니다.
 */
export const CenterNavigationTabs: Story = {
  render: () => {
    return (
      <Tabs centered>
        <Tabs.Panel label="Panel1">Contents1</Tabs.Panel>
        <Tabs.Panel label="Panel2">Contents2</Tabs.Panel>
        <Tabs.Panel label="Panel3">Contents3</Tabs.Panel>
      </Tabs>
    );
  },
};

/**
 * 수직으로 정렬되고 Tabs 네이버게이션이 가운데 정렬된 Tab입니다.
 */
export const VerticalCenterNavigationTabs: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: () => {
    return (
      <Tabs centered direction="vertical">
        <Tabs.Panel label="Panel1">Contents1</Tabs.Panel>
        <Tabs.Panel label="Panel2">Contents2</Tabs.Panel>
        <Tabs.Panel label="Panel3">Contents3</Tabs.Panel>
      </Tabs>
    );
  },
};
