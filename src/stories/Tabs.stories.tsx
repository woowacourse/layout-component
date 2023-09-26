import { StoryObj, Meta } from '@storybook/react';
import Tabs from '../lib/Tabs';
import Tab from '../lib/Tab';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'number',
      description: 'Tab Layout 가로 크기를 설정합니다.',
    },
    height: {
      control: 'number',
      description: 'Tab Layout 세로 크기를 설정합니다.',
    },
    $tabBoxHeight: {
      control: 'number',
      description:
        'Tab Index Box 세로 크기를 설정합니다. 기본 값은 Height의 10분의 1입니다. 가로 크기는 Tab Layout과 같습니다.',
    },
    responsive: {
      control: 'select',
      options: [true, false],
      description: '반응형에 대응할 여부를 설정합니다.',
    },
    $simpleTab: {
      control: 'select',
      options: [true, false],
      description: 'Tab index box 를 간단하게 표현할 지 설정합니다.',
    },
    swiper: {
      control: 'select',
      options: [true, false],
      description: '좌, 우로 넘길 수 있는 화살표 버튼을 표시할 지 설정합니다.',
    },
  },
} as Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
    responsive: true,
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab label="main">Main Page</Tab>
      <Tab label="my">My Page</Tab>
      <Tab label="shop">
        <section>
          <h2>products</h2>
          <span>products detail</span>
        </section>
      </Tab>
    </Tabs>
  ),
};

export const SimpleTab: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
    responsive: true,
    $simpleTab: true,
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab label="main">Main Page</Tab>
      <Tab label="my">My Page</Tab>
      <Tab label="shop">
        <section>
          <h2>products</h2>
          <span>products detail</span>
        </section>
      </Tab>
    </Tabs>
  ),
};

export const Swiper: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
    responsive: true,
    swiper: true,
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab label="main">Main Page</Tab>
      <Tab label="my">My Page</Tab>
      <Tab label="shop">
        <section>
          <h2>products</h2>
          <span>products detail</span>
        </section>
      </Tab>
    </Tabs>
  ),
};
