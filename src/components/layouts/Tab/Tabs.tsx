import { CSSObject } from '@emotion/react';
import { Justify } from '../../../models/FlexTypes';
import TabsProvider from './context/TabContext';
import TabList from './TabList';
import TabPanel from './TabPanel';
import { CSSProperties } from 'react';

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
	children: React.ReactNode;
};

const Tabs: React.FC<TabsProps> & TabsComposition = ({ children }) => {
	return <TabsProvider>{children}</TabsProvider>;
};

Tabs.Lists = (props) => <TabList {...props} />;

Tabs.Contents = (props) => <TabPanel {...props} />;

export default Tabs;
