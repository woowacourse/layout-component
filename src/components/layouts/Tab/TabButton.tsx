import styled from '@emotion/styled';
import { MIN_TAB_LENGTH } from '../../../constants';
import { CSSProperties, ComponentPropsWithoutRef } from 'react';
import useTabsContext from './hooks/useTabContext';

interface TabProps extends ComponentPropsWithoutRef<'button'> {
	title: string;
	value: number;
	disabled?: boolean;
}

const TabButton = (props: TabProps) => {
	const { title, value, disabled } = props;
	const { currentIndex, currentStyle } = useTabsContext();

	const selected = !disabled && currentIndex === value;
	const { color } = currentStyle;
	console.log(color);
	return (
		<Tab
			role='tab'
			selected={selected}
			disabled={disabled}
			data-order={value}
			color={color}
		>
			{title}
		</Tab>
	);
};

export default TabButton;

const Tab = styled.button<{ selected: boolean; color: CSSProperties['color'] }>`
	cursor: pointer;

	min-width: ${MIN_TAB_LENGTH}px;
	height: 100%;
	padding: 4px 12px;

	font-size: 1.4rem;
	line-height: 1.8rem;
	color: ${({ selected, color }) => (selected ? color : 'black')};

	background: transparent;
	border: none;
	border-bottom: solid 2px
		${({ selected, color }) => (selected ? color : 'transparent')};

	&:hover:not(:disabled) {
		background-color: color-mix(
			in srgb,
			${({ color }) => color},
			transparent 90%
		);
	}
	&:disabled {
		opacity: 0.3;
	}
`;
