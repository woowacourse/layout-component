import { PropsWithChildren } from 'react';

const Box = ({ children }: PropsWithChildren) => {
	const background = '#' + Math.round(Math.random() * 0xffffff).toString(16);
	return (
		<div
			style={{
				width: 200,
				height: 200,
				opacity: 0.7,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				color: 'white',
				font: '600 1.6rem/2rem',
				background,
			}}
		>
			{children}
		</div>
	);
};

export default Box;
