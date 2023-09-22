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
	argTypes: {
		rows: {
			control: { type: 'number' },
			description: 'Grid의 row를 나타냄. 몇 번 나타낼건지 결정함.',
			defaultValue: 5,
		},
		rowLength: {
			control: { type: 'text' },
			description: 'Grid 자식들의 row의 크기를 결정함.',
			defaultValue: '1fr',
		},
		cols: {
			control: { type: 'number' },
			description: 'Grid의 column를 나타냄. 몇 번 나타낼건지 결정함.',
			defaultValue: 5,
		},
		colLength: {
			control: { type: 'number' },
			description: 'Grid의 자식들의 column 크기를 결정함.',
			defaultValue: 5,
		},
		gap: {
			control: { type: 'text' },
			description: 'Flex 자식 간 거리',
			defaultValue: '300px',
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
				{Array.from({ length: 10 }).map((_, idx) => (
					<Box>{idx + 1}번 박스</Box>
				))}
			</Grid>
		);
	},
};
