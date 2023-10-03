import {
  Children,
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
} from 'react';

export const TabContext = createContext<{
  tabIndex: number;
  onTabIndexChange: (index: number) => void;
} | null>(null);

export const useTabContext = () => {
  const value = useContext(TabContext);

  if (!value) throw Error('TabContext가 존재하지 않습니다.');

  return value;
};

export const createChildrenWithId = (children: ReactNode) =>
  Children.map(children, (child, index) => {
    if (!child || !isValidElement(child)) return null;

    return cloneElement(child as ReactElement, { tabId: index });
  });
