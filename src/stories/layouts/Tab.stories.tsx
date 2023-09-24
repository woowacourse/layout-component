import type { Meta, StoryObj } from '@storybook/react';
import TabLayout from '../../components/layouts/Tab';

const meta = {
	title: 'Layout/Tab',
	component: TabLayout,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof TabLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		tabs: ['1번탭', '2번탭', '3번탭'],
	},
	render: (args) => {
		const { tabs } = args;
		return (
			<TabLayout tabs={tabs}>
				<div>1번탭</div>
				<div>2번탭</div>
				<div>3번탭</div>
			</TabLayout>
		);
	},
};
