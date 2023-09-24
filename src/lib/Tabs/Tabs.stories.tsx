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
export const ScrollTabs: Story = {
  render: () => {
    return (
      <Tabs>
        {Array.from({ length: 25 }).map((_, index) => (
          <Tabs.Panel label={`Panel${index.toString()}`} key={index}>
            Contents{index}
          </Tabs.Panel>
        ))}
      </Tabs>
    );
  },
};
