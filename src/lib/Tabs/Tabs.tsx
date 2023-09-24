/* eslint-disable react-hooks/exhaustive-deps */
import { PropsWithChildren, useRef } from 'react';
import TabPanel from './TabPanel';
import { Flex } from '..';
import { styled } from 'styled-components';
import useTabs from './hooks/useTabs';
import { LeftArrow, RightArrow } from './Icons';
import useTabsScroll from './hooks/useTabsScroll';

function Tabs({ children }: PropsWithChildren) {
  const tabsNavigation = useRef<HTMLDivElement>(null);

  const { panelList, selectedPanel, selectPanel, isSelected } =
    useTabs(children);

  const { isOverFlow, scrollState, handleMoveScroll } =
    useTabsScroll(tabsNavigation);

  return (
    <Layout>
      <TabsNavigationContainer>
        {isOverFlow && (
          <ScrollButton
            $enableScroll={
              isOverFlow && (scrollState === 'both' || scrollState === 'left')
            }
          >
            <LeftArrow onClick={() => handleMoveScroll('start')} />
          </ScrollButton>
        )}
        <TabsNavigation ref={tabsNavigation}>
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
        </TabsNavigation>
        {isOverFlow && (
          <ScrollButton
            $enableScroll={
              isOverFlow && (scrollState === 'both' || scrollState === 'right')
            }
          >
            <RightArrow onClick={() => handleMoveScroll('end')} />
          </ScrollButton>
        )}
      </TabsNavigationContainer>
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

const TabsNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TabsNavigation = styled.div`
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

const ScrollButton = styled.div<{ $enableScroll: boolean }>`
  opacity: ${({ $enableScroll }) => ($enableScroll ? '1' : '0.2')};

  svg {
    cursor: pointer;

    width: 12px;
    height: 12px;

    padding: 4px;
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
