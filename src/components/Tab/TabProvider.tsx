import { PropsWithChildren, useEffect, useState } from 'react';
import { TabContext } from './useTab';

type Props = {
  width?: string;
  defaultIndex?: number;
  index?: number;
  onChange?: any;
};

const TabProvider = ({
  width = '100%',
  defaultIndex = 0,
  index,
  onChange,
  children,
}: PropsWithChildren<Props>) => {
  const [tabIndex, setTabIndex] = useState(defaultIndex);

  const onTabIndexChange = (index: number) => {
    setTabIndex(index);
    onChange?.(index);
  };

  const value = { tabIndex, onTabIndexChange };

  useEffect(() => {
    if (index) setTabIndex(index);
  }, [index]);

  return (
    <TabContext.Provider value={value}>
      <div style={{ width: `${width}` }}>{children}</div>
    </TabContext.Provider>
  );
};

export default TabProvider;
