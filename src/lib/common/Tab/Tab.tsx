import type { Dispatch, SetStateAction } from 'react';
import { createContext, useState } from 'react';

import FlexContainer from '../FlexContainer';
import type { FlexContainerProps } from '../FlexContainer/FlexContainer';
import Content from './Content';
import Menu from './Menu';
import Menus from './Menus';

interface TabOptions {
  /** 고유한 탭 메뉴의 id, 여러 개의 탭을 사용할 때 구분하기 위함 */
  id: string;
  /** 초기에 선택되어 있을 메뉴 탭의 index
   * @default 0
   */
  initialIndex?: number;
  /** 탭의 정렬이 수직으로 변경 */
  vertical?: boolean;
}

interface TabContextValue extends TabOptions {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export const TabContext = createContext<TabContextValue>({
  id: '',
  initialIndex: 0,
  vertical: false,
  activeTab: 'menu-0',
  setActiveTab: () => {},
});

export interface TabProps extends TabOptions, FlexContainerProps {}

const Tab = ({ id, initialIndex = 0, vertical, children, ...attributes }: TabProps) => {
  const [activeTab, setActiveTab] = useState(`menu-${initialIndex}`);

  const contextValue = { id, initialIndex, vertical, activeTab, setActiveTab };

  return (
    <FlexContainer direction={vertical ? 'row' : 'column'} gap={10} {...attributes}>
      <TabContext.Provider value={contextValue}>{children}</TabContext.Provider>
    </FlexContainer>
  );
};

Tab.Menus = Menus;
Tab.Menu = Menu;
Tab.Content = Content;

export default Tab;
