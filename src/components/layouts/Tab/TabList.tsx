import styled, { CSSObject } from '@emotion/styled';
import { Justify } from '../../../models/FlexTypes';
import { PropsWithChildren } from 'react';
import useTabButton from './hooks/useTabButton';
import { css } from '@emotion/react';

export interface TableListProps extends PropsWithChildren {
	justify?: Justify;
	onClick: (event: React.SyntheticEvent<HTMLDivElement, MouseEvent>) => void;
	moveButton?: boolean;
	customCss?: CSSObject;
}

const TabList = (props: TableListProps) => {
	const { justify = 'start', onClick, moveButton = false, children } = props;

	const { tabContainerRef, scrollTabHandler, showButton, tabListRef } =
		useTabButton({ children, moveButton });

	return (
		<Wrapper ref={tabContainerRef} onClick={onClick}>
			<Button
				type='button'
				onClick={scrollTabHandler}
				data-direction='prev'
				show={showButton}
			>{`<`}</Button>
			<TabContainer ref={tabListRef} justify={justify}>
				{children}
			</TabContainer>
			<Button
				type='button'
				onClick={scrollTabHandler}
				data-direction='next'
				show={showButton}
			>{`>`}</Button>
		</Wrapper>
	);
};

export default TabList;

const Wrapper = styled.div<{ customCss?: CSSObject }>`
	position: relative;

	display: flex;
	gap: 4px;

	height: 100%;
	padding: 0;

	border-bottom: solid 0.5px rgba(0, 0, 0, 0.7);
	${({ customCss }) => customCss && css(customCss)}
`;

const Button = styled.button<{ show: boolean }>`
	cursor: pointer;

	display: ${({ show }) => (show ? 'inline-flex' : 'none')};
	align-items: center;

	width: 20px;

	background: transparent;
	border: none;
`;

const TabContainer = styled.div<{
	justify: Justify;
}>`
	scroll-behavior: smooth;

	position: relative;

	overflow: auto hidden;
	display: inline-flex;
	flex: 1 1 auto;
	justify-content: ${({ justify }) => justify && justify};

	max-width: calc(100%-40px);

	white-space: nowrap;

	::-webkit-scrollbar {
		display: none;
	}
`;
