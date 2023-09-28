/* eslint-disable react-hooks/exhaustive-deps */
import { ComponentPropsWithoutRef, PropsWithChildren, useRef } from 'react';
import TabPanel from './TabPanel';
import { css, styled } from 'styled-components';
import TabsNavigation from './components/TabsNavigation';
import { TabsDirection } from '../types/type';
import TabsProvider from './TabsProvider';
import SelectedPanel from './components/SelectedPanel';

type TabsProps = {
  /**
   * Tabs의 Navigation의 가로폭이 화면 폭보다 길어졌을 때, 위치를 이동시킬 수 있는 버튼의 유무를 지정하는 속성
   *
   *  * @default 'true'
   */
  scrollButtons?: boolean;
  /**
   * Tabs의 정렬 방향을 지정하는 속성
   *
   *  * @default 'horizontal'
   */
  direction?: TabsDirection;
  /**
   * Tabs의 Navigation을 가운데로 정렬하는 속성
   *
   *  * @default 'false'
   */
  centered?: boolean;
  /**
   * 선택된 탭의 색깔을 지정하는 속성
   *
   *  * @default '#3b82f6'
   */
  accentColor?: string;
} & ComponentPropsWithoutRef<'div'>;

function Tabs({
  scrollButtons = true,
  direction = 'horizontal',
  centered = false,
  accentColor = '#3b82f6',
  children,
}: PropsWithChildren<TabsProps>) {
  const tabsNavigation = useRef<HTMLDivElement>(null);

  return (
    <TabsProvider
      tabs={children}
      direction={direction}
      tabsNavigation={tabsNavigation}
    >
      <Layout direction={direction}>
        <TabsNavigation
          tabsNavigation={tabsNavigation}
          scrollButtons={scrollButtons}
          direction={direction}
          centered={centered}
          accentColor={accentColor}
        />
        <SelectedPanel />
      </Layout>
    </TabsProvider>
  );
}

Tabs.Panel = TabPanel;

export default Tabs;

const LAYOUT_STYLE = {
  horizontal: css`
    flex-direction: column;
  `,
  vertical: css`
    flex-direction: row;
  `,
} as const;

const Layout = styled.div<{ direction: TabsDirection }>`
  display: flex;
  position: relative;

  height: 100%;
  max-height: 100vh;

  ${({ direction }) => LAYOUT_STYLE[direction]}

  * {
    box-sizing: content-box;
    flex-shrink: 1;
  }
`;
