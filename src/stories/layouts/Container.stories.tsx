import type { Meta, StoryObj } from '@storybook/react';
import Container from '../../components/layouts/Container';
import Box from '../../components/Box';

const meta = {
	title: 'Layout/Container',
	component: Container,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		maxWidth: {
			control: { type: 'text' },
			description: 'Container의 최대 길이',
			defaultValue: '300px',
		},
		minWidth: {
			control: { type: 'text' },
			description: 'Container의 최소 길이',
			defaultValue: '100px',
		},
		tag: {
			control: { type: 'select' },
			options: ['div', 'section', 'main', 'header'],
			description: 'Container의 시맨틱 태그',
			defaultValue: 'div',
		},
		customCss: {
			control: { type: 'object' },
			description: '위에 속성 외에 개인적으로 설정할 값들',
			defaultValue: {
				width: '512px',
				height: '512px',
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		maxWidth: '300px',
		minWidth: '100px',
		tag: 'section',
	},
	render: ({ ...args }) => {
		return (
			<Container {...args}>
				{Array.from({ length: 10 }).map((_, idx) => (
					<Box>{idx + 1}번 박스</Box>
				))}
			</Container>
		);
	},
};
