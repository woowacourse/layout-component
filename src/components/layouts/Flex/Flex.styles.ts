import styled from '@emotion/styled';
import { CSSObject, css } from '@emotion/react';
import { Align, Direction, Justify, Wrap } from '../../../models/FlexTypes';
interface WrapperProps {
	direction: Direction;
	justify: Justify;
	align: Align;
	wrap: Wrap;
	gap?: number;
	customCss?: CSSObject;
}

export const Wrapper = styled.div<WrapperProps>`
	display: flex;
	flex-direction: ${({ direction }) => direction};
	flex-wrap: ${({ wrap }) => wrap};
	gap: ${({ gap }) => gap}px;
	align-items: ${({ align }) => align};
	justify-content: ${({ justify }) => justify};

	width: 100%;

	${({ customCss }) => customCss && css({ ...customCss })};
`;
