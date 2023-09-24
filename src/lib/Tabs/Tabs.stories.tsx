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
