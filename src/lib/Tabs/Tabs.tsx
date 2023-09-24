/* eslint-disable react-hooks/exhaustive-deps */
import {
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import TabPanel from './TabPanel';
import { Flex } from '..';
import { styled } from 'styled-components';
import useTabs from './useTabs';
import { LeftArrow, RightArrow } from './Icons';

function Tabs({ children }: PropsWithChildren) {
  const { panelList, selectedPanel, selectPanel, isSelected } =
    useTabs(children);

  const [isOverFlow, setIsOverFlow] = useState(false);
  const [scrollState, setScrollState] = useState<
    'right' | 'left' | 'both' | null
  >(null);

  const tabsNavigation = useRef<HTMLDivElement>(null);

  const handleMoveScroll = (pos: 'start' | 'end') => {
    if (!tabsNavigation.current) return;

    const { scrollLeft, clientWidth } = tabsNavigation.current;

    tabsNavigation.current.scrollTo({
      left: pos === 'end' ? scrollLeft + clientWidth : scrollLeft - clientWidth,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (!tabsNavigation.current) return;

    const { scrollWidth, clientWidth, scrollLeft } = tabsNavigation.current;

    if (scrollLeft > 0) setScrollState('both');
    else setScrollState('right');

    if (Math.abs(scrollWidth - scrollLeft - clientWidth) < 5)
      setScrollState('left');
  };

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (!tabsNavigation.current) return;

      const { scrollWidth, clientWidth } = tabsNavigation.current;
      setIsOverFlow(scrollWidth > clientWidth);

      if (scrollWidth > clientWidth) {
        setIsOverFlow(true);
      }

      handleScroll();
    });

    if (tabsNavigation.current) {
      resizeObserver.observe(tabsNavigation.current);
    }

    return () => {
      if (tabsNavigation.current) {
        resizeObserver.unobserve(tabsNavigation.current);
      }
    };
  }, []);

  useEffect(() => {
    const { current } = tabsNavigation;

    if (current) {
      current.addEventListener('scroll', () => handleScroll());
    }
  }, []);

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
