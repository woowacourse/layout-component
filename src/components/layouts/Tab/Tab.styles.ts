import { css } from '@emotion/react';
import styled, { CSSObject } from '@emotion/styled';

export const Wrapper = styled.div<{ customCss?: CSSObject }>`
	width: 100%;

	${({ customCss }) => customCss && css({ ...customCss })};
`;

export const TabList = styled.div`
	display: flex;
	gap: 4px;

	max-width: 100%;
	padding: 0;

	list-style-type: none;

	border-bottom: solid 0.5px rgba(0, 0, 0, 0.7);
`;

export const TabPanels = styled.div`
	width: 100%;
	max-width: 100%;
`;
