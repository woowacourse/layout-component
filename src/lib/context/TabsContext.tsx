import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { TabAlign, TabDirection, TabsProps } from '../components/Tabs/Tabs';

interface TabsContext {
  selectedTabId: string;
  changeTab: (selectedTabId: string) => void;
  direction: TabDirection;
  align: TabAlign;
}

const TabsContext = createContext<TabsContext>({
  selectedTabId: '',
  changeTab: () => {},
  direction: 'horizontal',
  align: 'between',
});

TabsContext.displayName = 'Tabs';

export const useTabsContext = () => useContext(TabsContext);

interface TabsProviderProps extends TabsProps {}

const TabsProvider = (props: TabsProviderProps) => {
  const { defaultTabId, direction = 'horizontal', align = 'between', children } = props;
  const [tabId, setTabId] = useState(defaultTabId);

  const changeTab = useCallback((selectedTabId: typeof tabId) => setTabId(selectedTabId), []);

  const memoizedValue = useMemo(
    () => ({
      selectedTabId: tabId,
      changeTab,
      direction,
      align,
    }),
    [tabId, direction, align],
  );

  return <TabsContext.Provider value={memoizedValue}>{children}</TabsContext.Provider>;
};

export default TabsProvider;
