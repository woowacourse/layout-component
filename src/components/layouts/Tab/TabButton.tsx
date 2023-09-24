import styled from '@emotion/styled';

interface TabProps {
	label: string;
	order: string;
	selected: boolean;
	disabled?: boolean;
}

const TabButton = (props: TabProps) => {
	const { label, selected, disabled, order } = props;

	return (
		<Tab selected={selected} disabled={disabled} data-order={order}>
			{label}
		</Tab>
	);
};

export default TabButton;

const Tab = styled.button<Omit<TabProps, 'label' | 'order'>>`
	cursor: pointer;

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
