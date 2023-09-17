import styled from '@emotion/styled';
import { CSSObject, css } from '@emotion/react';
interface WrapperProps {
	rows: number;
	cols: number;
	gap?: number;
	rowLength: string;
	colLength: string;
	customCss?: CSSObject;
}

export const Wrapper = styled.div<WrapperProps>`
	display: grid;
	grid-template-columns: repeat(
		${({ cols, colLength }) => `${cols}, ${colLength}`}
	);
	grid-template-rows: repeat(
		${({ rows, rowLength }) => `${rows}, ${rowLength}`}
	);
	${({ customCss }) => customCss && css({ ...customCss })};
	gap: ${({ gap }) => gap}px;

	width: 100%;
`;
