import { css } from '@emotion/react';
import styled, { CSSObject } from '@emotion/styled';

export const Wrapper = styled.div<{ customCss?: CSSObject }>`
	width: 100%;

	${({ customCss }) => customCss && css({ ...customCss })};
`;

export const TabPanels = styled.div`
	width: 100%;
	max-width: 100%;
	margin: 20px;
`;
