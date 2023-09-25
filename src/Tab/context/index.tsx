import { createContext, useContext } from 'react';

interface TabContextProps {
  focusTabIdx: number;
  setFocusTabIdx: React.Dispatch<React.SetStateAction<number>>;
}

export const TabContext = createContext<TabContextProps | null>(null);

export const useTabContext = () => {
  const state = useContext(TabContext);
  if (!state) throw new Error('Cannot find TabContextProvider');
  return state;
};
