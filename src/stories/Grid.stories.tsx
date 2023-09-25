import type { Meta, StoryObj } from '@storybook/react';

import Grid from '../components/Grid';

const meta = {
  title: 'Example/Grid',
  component: Grid,
  parameters: {
    docs: {
      description: {
        component: 'CSS Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    rows: 2,
    columns: 4,
    gap: 20,
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
