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
    $tabColor: {
      control: { type: 'color', preset: '#E4E4E4' },
      description:
        'Tab Index Box 의 색상을 지정합니다. 기본값은 #E4E4E4 입니다.',
    },
    $tabBoxPosition: {
      control: 'select',
      options: ['top', 'bottom'],
      description:
        'Tab Index Box 의 위치를 지정합니다. 위, 아래로만 지정할 수 있습니다.',
    },
    $isNotTabBoxShow: {
      control: 'boolean',
      description: 'Tab Index Box 표시 여부를 지정합니다.',
    },
    $focusColor: {
      control: { type: 'color', preset: '#316fc4' },
      description:
        'Tab Index Box 가 포커스 되었을 때 색상을 지정합니다. 기본값은 #316fc4 입니다.',
    },
    $simpleTab: {
      control: 'boolean',
      description: 'Tab index box 를 간단하게 표현할 지 설정합니다.',
    },
    $elementsOneTab: {
      control: 'number',
      description: '하나의 Tab Index Box에서 표시할 Tab의 갯수를 지정합니다.',
    },
    responsive: {
      control: 'boolean',
      description: '반응형에 대응할 여부를 설정합니다.',
    },
    swiper: {
      control: 'boolean',
      description: '좌, 우로 넘길 수 있는 화살표 버튼을 표시할 지 설정합니다.',
    },
    swipeable: {
      control: 'boolean',
      description: '모바일 환경에서 좌, 우 스와이프 가능 여부를 설정합니다.',
    },
    autoplay: {
      control: 'boolean',
      description:
        '일정 시간이 경과하면 자동으로 Tab Index Box 가 전환될 지 설정합니다.',
    },
    $autoplayTime: {
      control: 'number',
      description: 'autoplay 딜레이 시간을 지정합니다. ms 단위입니다.',
    },
    $autoplayButton: {
      control: 'boolean',
      description: 'autoplay 정지 및 시작 버튼 표시 여부를 지정합니다.',
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

export const BottomTab: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
    $tabBoxPosition: 'bottom',
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

export const Autoplay: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
    autoplay: true,
    $autoplayTime: 3000,
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

export const ThreeTabs: Story = {
  args: {
    width: 1000,
    height: 400,
    $tabBoxHeight: 40,
    $elementsOneTab: 3,
  },
  render: (args) => (
    <Tabs {...args}>
      <Tab label="image1">image 1</Tab>
      <Tab label="image2">image 2</Tab>
      <Tab label="image3">image 3</Tab>
      <Tab label="image4">image 4</Tab>
      <Tab label="image5">image 5</Tab>
    </Tabs>
  ),
};
