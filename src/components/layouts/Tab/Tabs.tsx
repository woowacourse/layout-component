import { CSSObject, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Justify } from '../../../models/FlexTypes';
import TabsProvider from './context/TabContext';
import TabList from './TabList';
import TabPanel from './TabPanel';
import { CSSProperties } from 'react';
import { Direction } from '../../../models/TabTypes';

export type TabListProps = {
	items: {
		id: string;
		title: string;
		disabled?: boolean;
	}[];
	justify?: Justify;
	moveButton?: boolean;
	customCss?: CSSObject;
	color?: CSSProperties['color'];
};

export type TabPanelProps = {
	items: {
		id: string;
		content: React.ReactNode;
	}[];
};

type TabsComposition = {
	Lists: React.FC<TabListProps>;
	Contents: React.FC<TabPanelProps>;
};

type TabsProps = {
	direction?: Direction;
	children: React.ReactNode;
	customCss?: CSSObject;
};

const Tabs: React.FC<TabsProps> & TabsComposition = ({
	children,
	customCss,
	direction = 'horizon',
}) => {
	return (
		<TabsProvider direction={direction}>
			<Wrapper direction={direction} customCss={customCss}>
				{children}
			</Wrapper>
		</TabsProvider>
	);
};

Tabs.Lists = (props) => <TabList {...props} />;

Tabs.Contents = (props) => <TabPanel {...props} />;

export default Tabs;

const Wrapper = styled.div<{
	direction: Direction;
	customCss?: CSSObject;
}>`
	display: flex;
	flex-direction: ${({ direction }) =>
		direction === 'horizon' ? 'column' : 'row'};

	${({ customCss }) => customCss && css(customCss)}
`;
