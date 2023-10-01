import styled, { CSSObject } from '@emotion/styled';
import { Justify } from '../../../models/FlexTypes';
import useTabButton from './hooks/useTabButton';
import { css } from '@emotion/react';
import { TabListProps } from './Tabs';
import TabButton from './TabButton';
import useTabsContext from './hooks/useTabContext';
import useChangeTab from './hooks/useChangeTab';
import { useLayoutEffect } from 'react';
import { Direction } from '../../../models/TabTypes';

const TabList = (props: TabListProps) => {
	const {
		justify = 'start',
		moveButton = false,
		items,
		color = 'green',
	} = props;

	const {
		currentIndex,
		currentStyle: { direction = 'horizon' },
		setCurrentIndex,
		setCurrentStyle,
	} = useTabsContext();

	useLayoutEffect(() => {
		setCurrentStyle((prev) => ({ ...prev, color }));
	}, [color, setCurrentStyle]);

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
		<Wrapper ref={tabContainerRef} onClick={handleClick} direction={direction}>
			<Button
				type='button'
				onClick={scrollTabHandler}
				data-direction='prev'
				show={showButton}
			>
				{direction === 'horizon' ? `◀️` : `🔼`}
			</Button>
			<TabContainer ref={tabListRef} justify={justify} direction={direction}>
				{buttons}
			</TabContainer>
			<Button
				type='button'
				onClick={scrollTabHandler}
				data-direction='next'
				show={showButton}
			>
				{direction === 'horizon' ? `▶️` : `🔽`}
			</Button>
		</Wrapper>
	);
};

export default TabList;

const Wrapper = styled.div<{
	direction: Direction;
	customCss?: CSSObject;
}>`
	position: relative;

	display: flex;
	flex-direction: ${({ direction }) =>
		direction === 'horizon' ? 'row' : 'column'};
	gap: 4px;

	height: 100%;
	padding: 0;

	${({ direction }) => {
		if (direction === 'horizon') {
			return css({
				borderBottom: 'solid 0.5px rgba(0, 0, 0, 0.7)',
			});
		} else {
			return css({
				borderRight: 'solid 0.5px rgba(0, 0, 0, 0.7)',
			});
		}
	}}

	${({ customCss }) => customCss && css(customCss)}
`;

const Button = styled.button<{ show: boolean }>`
	cursor: pointer;

	display: ${({ show }) => (show ? 'inline-flex' : 'none')};
	align-items: center;

	width: 20px;
	margin: 0 auto;

	background: transparent;
	border: none;
`;

const TabContainer = styled.div<{
	justify: Justify;
	direction: Direction;
}>`
	scroll-behavior: smooth;

	position: relative;

	overflow: auto hidden;
	display: inline-flex;
	flex: 1 1 auto;
	flex-direction: ${({ direction }) =>
		direction === 'horizon' ? 'row' : 'column'};
	justify-content: ${({ justify }) => justify && justify};

	max-width: calc(100%-40px);

	white-space: nowrap;

	::-webkit-scrollbar {
		display: none;
	}
`;
