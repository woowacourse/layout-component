import { styled } from 'styled-components';
import { Flex } from '../..';
import { RefObject } from 'react';
import { Label, PanelList } from '../hooks/useTabs';
import TabsNavigationScrollButton from './TabsNavigationScrollButton';

type TabsNavigationProps = {
  isOverFlow: boolean;
  scrollState: 'left' | 'right' | 'both' | null;
  handleMoveScroll: (pos: 'end' | 'start') => void;
  tabsNavigation: RefObject<HTMLDivElement>;
  selectPanel: (label: Label) => void;
  isSelected: (label: Label) => boolean;
  panelList: PanelList;
};

function TabsNavigation({
  isOverFlow,
  scrollState,
  handleMoveScroll,
  tabsNavigation,
  selectPanel,
  isSelected,
  panelList,
}: TabsNavigationProps) {
  return (
    <Layout>
      <TabsNavigationScrollButton
        isOverFlow={isOverFlow}
        scrollState={scrollState}
        handleMoveScroll={handleMoveScroll}
      >
        <TabsList ref={tabsNavigation}>
          <Flex tag="ul">
            {panelList.map(({ label }) => {
              return (
                <Flex.Item
                  tag="li"
                  key={label}
                  onClick={() => selectPanel(label)}
                  style={{
                    color: isSelected(label) ? '#3b82f6' : '#000000',
                  }}
                >
                  {label}
                  {isSelected(label) && <SelectedLine />}
                </Flex.Item>
              );
            })}
          </Flex>
        </TabsList>
      </TabsNavigationScrollButton>
    </Layout>
  );
}

export default TabsNavigation;

const Layout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TabsList = styled.div`
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  border-bottom: 1.5px solid #d0d0d0;

  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;

    & > li {
      padding: 12px 16px;
      position: relative;

      transition: color 0.2s ease;

      cursor: pointer;
    }
  }
`;

const SelectedLine = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  height: 2px;

  background-color: #3b82f6;
`;
