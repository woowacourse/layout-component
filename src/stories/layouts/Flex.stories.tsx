import type { Meta, StoryObj } from '@storybook/react';
import Flex from '../../components/layouts/Flex';
import Box from '../../components/Box';
import { ALIGNS, DIRECTIONS, JUSTIFIES, WRAPS } from '../../models/FlexTypes';

const meta = {
	title: 'Layout/Flex',
	component: Flex,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		direction: {
			control: { type: 'select' },
			options: DIRECTIONS,
			description: 'Flex의 방향',
			defaultValue: '300px',
		},
		justify: {
			control: { type: 'select' },
			options: JUSTIFIES,
			description: 'Flex의 좌우 정렬',
			defaultValue: '300px',
		},
		align: {
			control: { type: 'select' },
			options: ALIGNS,
			description: 'Flex의 상하 정렬',
			defaultValue: '300px',
		},
		wrap: {
			control: { type: 'select' },
			options: WRAPS,
			description:
				'Flex 자식들을 한 줄에 적용할 것인지 여러 줄에 적용할 것인지 선택',
			defaultValue: '300px',
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
		gap: '5px',
		customCss: {},
	},
	render: (args) => {
		return (
			<Flex {...args}>
				{Array.from({ length: 10 }).map((_, idx) => (
					<Box>{idx + 1}번 박스</Box>
				))}
			</Flex>
		);
	},
};
