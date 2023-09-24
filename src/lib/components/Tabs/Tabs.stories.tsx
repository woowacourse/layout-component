import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

import { Container } from '../..';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    align: {
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'between' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          color: '#3c3c3c',
          fontSize: '2rem',
          fontWeight: 'bold',
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    defaultTabId: 'item1-tab',
    direction: 'horizontal',
    align: 'between',
  },

  render: (args) => {
    return (
      <>
        <Tabs {...args}>
          <Tabs.List>
            <Tabs.Tab tabPanelId='item1'>ITEM ONE</Tabs.Tab>
            <Tabs.Tab tabPanelId='item2'>ITEM TWO</Tabs.Tab>
            <Tabs.Tab tabPanelId='item3'>ITEM THREE</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel id='item1'>
            <Container css={{ margin: '2rem', textAlign: 'center' }}>👀</Container>
          </Tabs.Panel>
          <Tabs.Panel id='item2'>
            <Container css={{ margin: '2rem', textAlign: 'center' }}>🐾</Container>
          </Tabs.Panel>
          <Tabs.Panel id='item3'>
            <Container css={{ margin: '2rem', textAlign: 'center' }}>🐕</Container>
          </Tabs.Panel>
        </Tabs>
      </>
    );
  },
};
