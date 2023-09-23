import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

const meta = {
  title: 'Components/Layout/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ContainerLayout: Story = {
  args: {
    minWidth: 300,
    maxWidth: 800,
  },
  argTypes: {
    minWidth: {
      description: 'container의 최소 width값을 설정할 수 있습니다. 들어갈 수 있는 값은 숫자이고 px 단위로 설정됩니다.',
    },
    maxWidth:{
      description: 'container의 최대 width값을 설정할 수 있습니다. 들어갈 수 있는 값은 숫자이고 px 단위로 설정됩니다.'
    },
  }
};

