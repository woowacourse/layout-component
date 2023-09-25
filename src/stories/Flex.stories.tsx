import type { Meta, StoryObj } from '@storybook/react';

import Flex from '../components/Flex';

const meta = {
  title: 'Example/Flex',
  component: Flex,
  parameters: {
    docs: {
      description: {
        component: 'CSS Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    justify: 'space-between',
    children: (
      <>
        <div style={{ backgroundColor: '#81D4FA' }}>Item 1</div>
        <div style={{ backgroundColor: '#4FC3F7' }}>Item 2</div>
        <div style={{ backgroundColor: '#29B6F6' }}>Item 3</div>
        <div style={{ backgroundColor: '#03A9F4' }}>Item 4</div>
        <div style={{ backgroundColor: '#039BE5' }}>Item 5</div>
        <div style={{ backgroundColor: '#0288D1' }}>Item 6</div>
        <div style={{ backgroundColor: '#0277BD' }}>Item 7</div>
        <div style={{ backgroundColor: '#01579B' }}>Item 8</div>
      </>
    ),
  },
};
