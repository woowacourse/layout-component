import styled from '@emotion/styled';
import { CSSObject, css } from '@emotion/react';
interface WrapperProps {
	minWidth: number;
	maxWidth: number;
	customCss?: CSSObject;
}

export const Wrapper = styled.div<WrapperProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	min-width: ${(props) => props.minWidth}px;
	max-width: ${(props) => props.maxWidth}px;

	${({ customCss }) => customCss && css({ ...customCss })};
`;
