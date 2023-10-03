import { useContext } from 'react';
import { TabsContext, TabsContextProps } from '../context/TabContext';

const useTabsContext = (): TabsContextProps => {
	const context = useContext(TabsContext);
	if (context === undefined || context === null) {
		throw new Error('useTabs must be used within a TabsProvider');
	}
	return context;
};

export default useTabsContext;
