import type { Meta, StoryObj } from '@storybook/react';
import Container from '../../components/layouts/Container';

const meta = {
	title: 'Layout/Container',
	component: Container,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		maxWidth: 300,
		minWidth: 100,
		tag: 'section',
		customCss: {
			background: 'red',
		},
	},

	render: ({ ...args }) => {
		return <Container {...args}>Cool~</Container>;
	},
};
