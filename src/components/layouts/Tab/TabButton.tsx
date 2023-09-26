import styled from '@emotion/styled';
import { MIN_TAB_LENGTH } from '../../../constants';

interface TabProps {
	label: string;
	order: string;
	value: string;
	disabled?: boolean;
}

const TabButton = (props: TabProps) => {
	const { label, value, disabled, order } = props;
	const selected = !disabled && value === order;

	return (
		<Tab selected={selected} disabled={disabled} data-order={order}>
			{label}
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
	border-bottom: solid 2px ${({ selected }) => (selected ? 'green' : 'none')};
	&:hover {
		&:disabled:not() {
			color: green;
		}
	}

	&:disabled {
		opacity: 0.3;
	}
`;
