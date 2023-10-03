import styled from '@emotion/styled';
import useTabsContext from './hooks/useTabContext';
import { TabPanelProps } from './Tabs';

const TabPanel = (props: TabPanelProps) => {
	const { items } = props;
	const { currentIndex } = useTabsContext();
	const { id, content } = items[currentIndex];
	return (
		<Wrapper
			key={id}
			id={`tab-content-${id}`}
			role='tabpanel'
			aria-labelledby={`tab-control-${id}`}
		>
			{content}
		</Wrapper>
	);
};

export default TabPanel;

const Wrapper = styled.div`
	overflow: auto;
	min-width: 100px;
	padding: 12px;
`;
