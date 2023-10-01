import styled from '@emotion/styled';
import { MIN_TAB_LENGTH } from '../../../constants';
import { ComponentPropsWithoutRef } from 'react';
import useTabsContext from './hooks/useTabContext';

interface TabProps extends ComponentPropsWithoutRef<'button'> {
	title: string;
	value: number;
	disabled?: boolean;
}

const TabButton = (props: TabProps) => {
	const { title, value, disabled } = props;
	const { currentIndex } = useTabsContext();

	const selected = !disabled && currentIndex === value;

	return (
		<Tab role='tab' selected={selected} disabled={disabled} data-order={value}>
			{title}
		</Tab>
	);
};

export default TabButton;

const Tab = styled.button<{ selected: boolean }>`
	cursor: pointer;

	min-width: ${MIN_TAB_LENGTH}px;
	height: 100%;
	padding: 4px 12px;

	font-size: 1.4rem;
	line-height: 1.8rem;
	color: ${({ selected }) => (selected ? 'green' : 'black')};

	background: transparent;
	border: none;
	border-bottom: solid 2px
		${({ selected }) => (selected ? 'green' : 'transparent')};

	&:hover:not(:disabled) {
		background: rgb(233, 253, 233);
	}
	&:disabled {
		opacity: 0.3;
	}
`;
