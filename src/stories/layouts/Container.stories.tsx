import type { Meta, StoryObj } from '@storybook/react';
import Container from '../../components/layouts/Container';
import { useState } from 'react';

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
	args: { maxWidth: '500px', minWidth: '100px', tag: 'section' },
	render: (args) => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [width, setWidth] = useState(100);

		return (
			<div
				style={{
					width: width,
					height: width,
					margin: '0 auto',
				}}
			>
				<Container
					{...args}
					customCss={{
						height: width,
						maxHeight: args.maxWidth,
						background: '#f8ade9',
					}}
				>
					박스입니다~
				</Container>
				<div
					style={{
						width: 200,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						margin: '0 auto',
					}}
				>
					<button onClick={() => setWidth((prev) => prev + 100)}>
						사이즈 업
					</button>
					<button
						onClick={() => setWidth((prev) => (prev > 100 ? prev - 100 : 100))}
					>
						사이즈 다운
					</button>
				</div>
			</div>
		);
	},
};
