import {
  ComponentPropsWithoutRef,
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';

import useContextInScope from '../hooks/useContextInScope';
import { TabProps } from './Tabs.type';

interface TabsContext extends ComponentPropsWithoutRef<'div'> {
  selectedValue: string;
  changeTab: (tabValue: string) => void;
  inScope: boolean;
}

interface TabsProviderProps {
  value: Pick<TabProps, 'defaultValue' | 'onValueChange'>;
}

const TabsContext = createContext<TabsContext>({
  selectedValue: '',
  changeTab: () => {},
  inScope: false,
});

TabsContext.displayName = 'Tabs';

const useTabsContext = () => useContextInScope(TabsContext);

const TabsProvider = (props: PropsWithChildren<TabsProviderProps>) => {
  const {
    value: { defaultValue, onValueChange },
    children,
  } = props;
  const { value, changeTab } = useTabs(defaultValue);

  const memoizedValue = useMemo(
    () => ({
      selectedValue: value,
      inScope: true,
      changeTab,
    }),
    [value]
  );

  useEffect(() => {
    onValueChange?.(value);
  }, [value]);

  return (
    <TabsContext.Provider value={memoizedValue}>
      {children}
    </TabsContext.Provider>
  );
};

const useTabs = (selectedValue: TabProps['defaultValue']) => {
  const [value, setValue] = useState(selectedValue);

  const changeTab = (tabValue: typeof value) => setValue(tabValue);

  return { value, changeTab } as const;
};

export default TabsProvider;

export { useTabsContext };
