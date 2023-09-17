import type { Meta, StoryObj } from '@storybook/react';
import Flex from '../../components/layouts/Flex';
import Box from '../../components/Box';

const meta = {
	title: 'Layout/Flex',
	component: Flex,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		tag: 'div',
		direction: 'column',
		justify: 'center',
		align: 'center',
		wrap: 'nowrap',
		gap: 5,
		customCss: {},
	},
	render: (args) => {
		return (
			<Flex {...args}>
				{Array.from({ length: 10 }).map(() => (
					<Box />
				))}
			</Flex>
		);
	},
};
