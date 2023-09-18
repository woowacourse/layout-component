import type { Meta, StoryObj } from '@storybook/react';
import Flex from './Flex';

const meta = {
  title: 'Components/Cart/Order',
  component: Flex,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;


export const FlexLayout: Story = {
  args: {
    direction: "column",
    justify: "center",
    align: "center"
  },
  argTypes: {
    direction: {
      description: 'Flex의 방향을 설정할 수 있습니다. 들어갈 수 있는 값은',
    },
    justify:{
      description: 'Flex에서 메인축을 중심으로 위치를 설정할 수 있습니다. 들어갈 수 있는 값은'
    },
    align:{
      description: 'Flex에서 수직축을 중심으로 위치를 설정할 수 있습니다. 들어갈 수 있는 값은'
    }
  }
};

