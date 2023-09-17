import type { Meta, StoryObj } from '@storybook/react';
import Grid from '../../components/layouts/Grid';
import Box from '../../components/Box';

const meta = {
	title: 'Layout/Grid',
	component: Grid,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		tag: 'div',
		rows: 3,
		cols: 3,
		gap: '5px',
		customCss: {},
	},
	render: (args) => {
		return (
			<Grid {...args}>
				{Array.from({ length: 10 }).map(() => (
					<Box />
				))}
			</Grid>
		);
	},
};
