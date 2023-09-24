/* eslint-disable react-hooks/exhaustive-deps */
import { PropsWithChildren, useRef } from 'react';
import TabPanel from './TabPanel';
import { styled } from 'styled-components';
import useTabs from './hooks/useTabs';
import useTabsScroll from './hooks/useTabsScroll';
import TabsNavigation from './components/TabsNavigation';

function Tabs({ children }: PropsWithChildren) {
  const tabsNavigation = useRef<HTMLDivElement>(null);

  const { panelList, selectedPanel, selectPanel, isSelected } =
    useTabs(children);

  const { isOverFlow, scrollState, handleMoveScroll } =
    useTabsScroll(tabsNavigation);

  return (
    <Layout>
      <TabsNavigation
        isOverFlow={isOverFlow}
        scrollState={scrollState}
        handleMoveScroll={handleMoveScroll}
        tabsNavigation={tabsNavigation}
        selectPanel={selectPanel}
        isSelected={isSelected}
        panelList={panelList}
      />
      {selectedPanel?.contents}
    </Layout>
  );
}

Tabs.Panel = TabPanel;

export default Tabs;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
