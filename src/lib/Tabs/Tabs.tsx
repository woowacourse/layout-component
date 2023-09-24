/* eslint-disable react-hooks/exhaustive-deps */
import { PropsWithChildren, useRef } from 'react';
import TabPanel from './TabPanel';
import { styled } from 'styled-components';
import useTabs from './hooks/useTabs';
import useTabsScroll from './hooks/useTabsScroll';
import TabsNavigation from './components/TabsNavigation';

type TabsProps = {
  /**
   * Tabs의 Navigation의 가로폭이 화면 폭보다 길어졌을 때, scroll을 이동시킬 수 있는 버튼의 유무를 지정하는 속성입니다.
   *
   *  * @default 'true'
   */
  scrollButtons?: boolean;
};

function Tabs({
  scrollButtons = true,
  children,
}: PropsWithChildren<TabsProps>) {
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
        scrollButtons={scrollButtons}
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
