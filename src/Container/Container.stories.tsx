import Container from './Container';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container,
  argTypes: {
    maxWidth: {
      control: 'text',
    },
    minWidth: {
      control: 'text',
    },
    borderRadius: {
      control: 'text',
    },
    children: {
      control: false,
    },
  },
  args: {
    maxWidth: '100%',
    centerContent: false,
    backgroundColor: '#FFFFFF',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>디폴트 설정을 가진 Container입니다.</div>,
  },
};

export const CenterContainer: Story = {
  args: {
    centerContent: true,
    children: <div>중앙 정렬을 가진 Container입니다.</div>,
  },
};

export const BorderRadiusContainer: Story = {
  args: {
    backgroundColor: 'pink',
    borderRadius: 10,
    children: <div>border radius가 적용된 Container입니다.</div>,
  },
};
