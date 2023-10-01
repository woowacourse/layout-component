/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '../../components/layouts/Tab/Tabs';

const meta = {
	title: 'Layout/Tab',
	component: Tabs,
	parameters: {
		layout: 'centered',
	},
	args: {
		children: <></>,
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const tabs = Array.from({ length: 3 }).map((_, index) => ({
			id: `${index}`,
			title: `${index + 1}번 탭`,
			content: `${index + 1}번 탭`,
		}));

		return (
			<Tabs>
				<Tabs.Lists items={tabs} />
				<Tabs.Contents
					items={tabs.map(({ id, content }) => ({ id, content }))}
				/>
			</Tabs>
		);
	},
};

export const Disable: Story = {
	render: () => {
		const tabs = [
			{ id: '0', title: 'active' },
			{ id: '3', title: 'disable', disabled: true },
			{ id: '2', title: 'active' },
		];

		return (
			<Tabs>
				<Tabs.Lists items={tabs} />
			</Tabs>
		);
	},
};

export const JustifyTab: Story = {
	render: () => {
		const tabs = Array.from({ length: 4 }).map((_, index) => ({
			id: `${index}`,
			title: `${index + 1}번 탭`,
		}));

		return (
			<Tabs>
				<Tabs.Lists items={tabs} justify='center' />
			</Tabs>
		);
	},
};

export const TabOverFLow: Story = {
	render: () => {
		const tabs = Array.from({ length: 20 }).map((_, index) => ({
			id: `${index}`,
			title: `${index + 1}번 탭`,
			content: `${index + 1}번 탭`,
		}));

		return (
			<div style={{ width: 520 }}>
				<Tabs>
					<Tabs.Lists items={tabs} moveButton />
					<Tabs.Contents
						items={tabs.map(({ id, content }) => ({ id, content }))}
					/>
				</Tabs>
			</div>
		);
	},
};

export const TabOverFLowNoButton: Story = {
	render: () => {
		const tabs = Array.from({ length: 20 }).map((_, index) => ({
			id: `${index}`,
			title: `${index + 1}번 탭`,
			content: `${index + 1}번 탭`,
		}));

		return (
			<div style={{ width: 520 }}>
				<Tabs>
					<Tabs.Lists items={tabs} />
					<Tabs.Contents
						items={tabs.map(({ id, content }) => ({ id, content }))}
					/>
				</Tabs>
			</div>
		);
	},
};

export const TabOtherColor: Story = {
	render: () => {
		const tabs = Array.from({ length: 20 }).map((_, index) => ({
			id: `${index}`,
			title: `${index + 1}번 탭`,
			content: `${index + 1}번 탭`,
		}));

		return (
			<div style={{ width: 520 }}>
				<Tabs>
					<Tabs.Lists items={tabs} color='blue' />
					<Tabs.Contents
						items={tabs.map(({ id, content }) => ({ id, content }))}
					/>
				</Tabs>
			</div>
		);
	},
};
