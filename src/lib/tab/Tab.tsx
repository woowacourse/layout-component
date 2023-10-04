import { useContext } from 'react';
import { TabProps } from '../types.ts';
import TabContext from '../context/TabContext.ts';

const a11yProps = (value: number | string) => {
  return {
    id: `tab-${value}`,
    'aria-controls': `tabpanel-${value}`,
  };
};

const Tab = ({ children, name }: TabProps) => {
  const { setActiveIdx, initialTabRef } = useContext(TabContext);

  const tabButtonHandler = () => {
    setActiveIdx(name);
  };

  return (
    <button
      onClick={tabButtonHandler}
      ref={name === 0 ? initialTabRef : null}
      {...a11yProps(name)}
      className={'booung-tab'}
    >
      {children}
    </button>
  );
};

export default Tab;
