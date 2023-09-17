import styled from '@emotion/styled';
import { CSSObject, css } from '@emotion/react';
import { Align, Direction, Justify, Wrap } from '../../../models/FlexTypes';
import { ValueUnit } from '../../../models/utils';
interface WrapperProps {
	direction: Direction;
	justify: Justify;
	align: Align;
	wrap: Wrap;
	gap?: ValueUnit;
	customCss?: CSSObject;
}

export const Wrapper = styled.div<WrapperProps>`
	display: flex;
	flex-direction: ${({ direction }) => direction};
	flex-wrap: ${({ wrap }) => wrap};
	gap: ${({ gap }) => gap};
	align-items: ${({ align }) => align};
	justify-content: ${({ justify }) => justify};

	width: 100%;

	${({ customCss }) => customCss && css({ ...customCss })};
`;
