import { CSSObject } from '@emotion/react';
import { Wrapper } from './Grid.styles';
import { ContainerTagType } from '../../../models/TagTypes';

interface ContainerProps extends React.PropsWithChildren {
	tag?: keyof ContainerTagType;
	rows: number;
	cols: number;
	gap?: number;
	rowLength?: string;
	colLength?: string;
	customCss?: CSSObject;
}

const Grid = (props: ContainerProps) => {
	const {
		tag = 'div',
		rows,
		cols,
		gap = 0,
		rowLength = '1fr',
		colLength = '1fr',
		customCss,
		children,
	} = props;
	return (
		<Wrapper
			as={tag}
			rows={rows}
			cols={cols}
			gap={gap}
			rowLength={rowLength}
			colLength={colLength}
			customCss={customCss}
		>
			{children}
		</Wrapper>
	);
};

export default Grid;
