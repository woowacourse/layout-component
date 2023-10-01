import { CSSProperties, Children } from 'react';

import { ContainerProps } from '../../types/component';
import { useTabLayout } from './useTabLayout';

import '../../styles/reset.css';
import '../../styles/global.css';
import styles from './index.module.css';
import classNames from 'classnames/bind';

import Tabs from './Tabs';
import Panels from './Panels';

const cx = classNames.bind(styles);

const directionSetWithTabPosition: Record<TabPosition, CSSProperties> = {
  top: { flexDirection: 'column' },
  right: { flexDirection: 'row-reverse' },
  bottom: { flexDirection: 'column-reverse' },
  left: { flexDirection: 'row' },
};

export type TabJustify = 'start' | 'center' | 'end';
export type TabPosition = 'top' | 'right' | 'left' | 'bottom';
export type TabButtonWidth = 'small' | 'large';

interface Props
  extends Omit<
    ContainerProps,
    | 'display'
    | 'padding'
    | 'border'
    | 'borderRadius'
    | 'backgroundColor'
    | 'color'
    | 'cursor'
    | 'overflow'
  > {
  tabs: string[];
  tabJustify?: TabJustify;
  tabPosition?: TabPosition;
  tabButtonWidth?: TabButtonWidth;
}

export default function TabLayout({
  tabs,
  tabButtonWidth = 'large',
  tabJustify = 'start',
  tabPosition = 'top',
  position,
  top,
  right,
  bottom,
  left,
  width = '100%',
  height = '100%',
  minWidth,
  maxWidth = '100%',
  margin,
  opacity,
  zIndex,
  children,
  ...rest
}: Props) {
  const { activeTab, activateTab } = useTabLayout({
    tabs: tabs.length,
    panel: Children.count(children),
  });

  return (
    <div
      className={cx('container')}
      style={{
        position,
        top,
        right,
        bottom,
        left,
        width,
        height,
        minWidth,
        maxWidth,
        margin,
        opacity,
        zIndex,
        ...directionSetWithTabPosition[tabPosition],
      }}
      {...rest}
    >
      <Tabs
        tabButtonWidth={tabButtonWidth}
        tabJustify={tabJustify}
        tabPosition={tabPosition}
        tabs={tabs}
        activeTab={activeTab}
        activateTab={activateTab}
      />
      <Panels activeTab={activeTab}>{children}</Panels>
    </div>
  );
}
