import styled from '@emotion/styled';
import { CSSObject, css } from '@emotion/react';
import { ValueUnit } from '../../../models/utils';
interface WrapperProps {
	minWidth: ValueUnit;
	maxWidth: ValueUnit;
	customCss?: CSSObject;
}

export const Wrapper = styled.div<WrapperProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	min-width: ${(props) => props.minWidth};
	max-width: ${(props) => props.maxWidth};

	${({ customCss }) => customCss && css({ ...customCss })};
`;
