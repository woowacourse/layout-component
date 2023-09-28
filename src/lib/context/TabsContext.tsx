import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { TabDirection, TabsProps } from '../components/Tabs/Tabs';

interface TabsContext {
  selectedTabId: string;
  changeTab: (selectedTabId: string) => void;
  direction: TabDirection;
  primaryColor: string;
}

const TabsContext = createContext<TabsContext>({
  selectedTabId: '',
  changeTab: () => {},
  direction: 'horizontal',
  primaryColor: 'Cornflowerblue',
});

TabsContext.displayName = 'Tabs';

export const useTabsContext = () => useContext(TabsContext);

interface TabsProviderProps extends TabsProps {}

const TabsProvider = (props: TabsProviderProps) => {
  const { defaultTabPanelId, direction = 'horizontal', primaryColor = 'Cornflowerblue', children } = props;
  const [tabId, setTabId] = useState(`${defaultTabPanelId}-tab`);

  const changeTab = useCallback((selectedTabId: typeof tabId) => setTabId(selectedTabId), []);

  const memoizedValue = useMemo(
    () => ({
      selectedTabId: tabId,
      changeTab,
      direction,
      primaryColor,
    }),
    [tabId, direction, primaryColor],
  );

  return <TabsContext.Provider value={memoizedValue}>{children}</TabsContext.Provider>;
};

export default TabsProvider;
