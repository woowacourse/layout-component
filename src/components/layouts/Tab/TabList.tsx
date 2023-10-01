import styled, { CSSObject } from '@emotion/styled';
import { Justify } from '../../../models/FlexTypes';
import useTabButton from './hooks/useTabButton';
import { css } from '@emotion/react';
import { TabListProps } from './Tabs';
import TabButton from './TabButton';
import useTabsContext from './hooks/useTabContext';
import useChangeTab from './hooks/useChangeTab';

const TabList = (props: TabListProps) => {
	const { justify = 'start', moveButton = false, items } = props;

	const { currentIndex, setCurrentIndex } = useTabsContext();

	const buttons = items.map(({ id, title, disabled }, index) => (
		<TabButton
			key={id}
			id={`tab-control-${id}`}
			role='tab'
			aria-controls={`tab-content-${id}`}
			aria-selected={currentIndex === index}
			value={index}
			title={title}
			disabled={disabled}
		/>
	));

	const { handleClick } = useChangeTab({ setCurrentIndex });

	const { tabContainerRef, scrollTabHandler, showButton, tabListRef } =
		useTabButton({ children: buttons, moveButton });

	return (
		<Wrapper ref={tabContainerRef} onClick={handleClick}>
			<Button
				type='button'
				onClick={scrollTabHandler}
				data-direction='prev'
				show={showButton}
			>{`<`}</Button>
			<TabContainer ref={tabListRef} justify={justify}>
				{buttons}
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
