import { TabPanelListProps } from '../types.ts';
import { Children, cloneElement, isValidElement } from 'react';

const TabPanelList = ({ children }: TabPanelListProps) => {
  const childrenWithIdxProp = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, { index });
    }
    return child;
  });

  return <>{childrenWithIdxProp}</>;
};

export default TabPanelList;
