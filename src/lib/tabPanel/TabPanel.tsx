import { TabPanelProps } from '../types.ts';
import { useContext } from 'react';
import TabContext from '../context/TabContext.ts';

const TabPanel = ({ children, name, index }: TabPanelProps) => {
  const { activeIdx } = useContext(TabContext);

  const shouldDisplay = activeIdx === name || activeIdx === index;

  return <div style={{ display: shouldDisplay ? 'block' : 'none' }}>{children}</div>;
};

export default TabPanel;
