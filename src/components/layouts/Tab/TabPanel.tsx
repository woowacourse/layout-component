import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface TabPanelProps extends PropsWithChildren {
	order: string;
	value: string;
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, order } = props;

	return <Wrapper hidden={value !== order}>{children}</Wrapper>;
};

export default TabPanel;

const Wrapper = styled.div`
	padding: 12px;
`;
