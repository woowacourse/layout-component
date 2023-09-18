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
    padding: {
      control: 'text',
    },
    margin: {
      control: 'text',
    },
    children: {
      control: false,
    },
  },
  args: {
    maxWidth: '100%',
    centerContent: false,
    backgroundColor: '#D8EAFF',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxWidth: '240px',
    backgroundColor: '#D8EAFF',
    children: <div>디폴트 설정을 가진 Container입니다.</div>,
  },
};

export const CenterContainer: Story = {
  args: {
    maxWidth: '480px',
    centerContent: true,
    backgroundColor: '#FFEC99',
    children: <div>중앙 정렬을 가진 Container입니다.</div>,
  },
};

export const BorderRadiusContainer: Story = {
  args: {
    backgroundColor: '#FFCFCF',
    borderRadius: 10,
    children: <div>border radius가 적용된 Container입니다.</div>,
  },
};
