import { PropsWithChildren, useState } from 'react';
import { TabContext } from './context';

interface TabProviderProps {
  tabIdx?: number;
}

export const TabProvider = ({
  tabIdx = 0,
  children,
}: PropsWithChildren<TabProviderProps>) => {
  const [focusTabIdx, setFocusTabIdx] = useState(tabIdx);

  return (
    <TabContext.Provider
      value={{
        focusTabIdx,
        setFocusTabIdx,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};
