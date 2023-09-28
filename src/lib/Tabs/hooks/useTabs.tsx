import { useContext } from 'react';
import { TabsContext } from '../TabsProvider';

const useTabs = () => {
  const value = useContext(TabsContext);

  if (!value) throw new Error('tab provider 오류');

  return value;
};

export default useTabs;
