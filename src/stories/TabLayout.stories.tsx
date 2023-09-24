import type { Meta, StoryObj } from '@storybook/react';
import TabLayout from '../components/TabLayout';

const meta = {
  title: 'TabLayout',
  component: TabLayout
} satisfies Meta<typeof TabLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  render: () => (<TabLayout tabs={['항목 1', '항목 2', '항목 3']} bordercolor={'blue'}>
  <div>콘텐츠 11</div>
  <div>콘텐츠 22</div>
  <div>콘텐츠 33</div>
</TabLayout>)
};