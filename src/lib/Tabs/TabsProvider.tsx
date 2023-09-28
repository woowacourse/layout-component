import { PropsWithChildren, ReactNode, RefObject, createContext } from 'react';
import usePanel from './hooks/usePanel';
import useTabsScroll from './hooks/useTabsScroll';
import { Label, PanelList, ScrollState, TabsDirection } from '../types/type';

type Tabs = {
  panelList: PanelList;
  selectedPanel?: {
    label: Label;
    disabled: boolean;
    contents: ReactNode;
  };
  isOverFlow: boolean;
  scrollState: ScrollState;
  selectPanel: (label: Label) => void;
  isSelected: (label: Label) => boolean;
  handleMoveScroll: (pos: 'start' | 'end') => void;
};

export const TabsContext = createContext<Tabs | null>(null);

const TabsProvider = ({
  tabs,
  direction,
  tabsNavigation,
  children,
}: PropsWithChildren<{
  tabs: ReactNode;
  tabsNavigation: RefObject<HTMLDivElement>;
  direction: TabsDirection;
}>) => {
  const { panelList, selectedPanel, selectPanel, isSelected } = usePanel(tabs);

  const { isOverFlow, scrollState, handleMoveScroll } = useTabsScroll(
    tabsNavigation,
    direction
  );

  const value = {
    panelList,
    selectedPanel,
    isOverFlow,
    scrollState,
    selectPanel,
    isSelected,
    handleMoveScroll,
  };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

export default TabsProvider;
