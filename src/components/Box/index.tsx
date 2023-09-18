import { PropsWithChildren } from 'react';

const Box = ({ children }: PropsWithChildren) => {
	return (
		<div
			style={{
				width: 100,
				height: 100,
				background: 'red',
			}}
		>
			{children}
		</div>
	);
};

export default Box;
