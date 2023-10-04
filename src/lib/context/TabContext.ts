import { createContext, Dispatch, RefObject, SetStateAction } from 'react';

type TabContextType = {
  activeIdx: number | string;
  setActiveIdx: Dispatch<SetStateAction<number | string>>;
  initialTabRef: RefObject<HTMLButtonElement> | null;
  defaultIdx?: number | string;
};

const TabContext = createContext<TabContextType>({
  activeIdx: 0,
  setActiveIdx: () => {},
  initialTabRef: null,
  defaultIdx: 0,
});

export default TabContext;
