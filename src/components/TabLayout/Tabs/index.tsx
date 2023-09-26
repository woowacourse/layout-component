import { CSSProperties } from 'react';

import { TabJustify, TabPosition } from '..';

import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const generateJustify = (tabPosition: TabPosition, tabJustify: TabJustify) => {
  const justifySetWithTabPosition: Record<TabPosition, CSSProperties> = {
    top: {
      justifyContent: tabJustify,
      gap: '8px',
    },
    right: {
      flexDirection: 'column',
      justifyContent: tabJustify,
      width: '80px',
      gap: '8px',
    },
    bottom: {
      justifyContent: tabJustify,
      gap: '8px',
    },
    left: {
      flexDirection: 'column',
      justifyContent: tabJustify,
      width: '80px',
      gap: '8px',
    },
  };

  return justifySetWithTabPosition[tabPosition];
};

const generateBoxShadowPosition = (tabPosition: TabPosition) => {
  const boxShadowSetWithTabPosition = {
    top: '0 -2px 0 0',
    right: '2px 0 0 0',
    bottom: '0 2px 0 0',
    left: '-2px 0 0 0',
  };

  return { '--tab-position': boxShadowSetWithTabPosition[tabPosition] };
};

interface Props {
  tabJustify: TabJustify;
  tabPosition: TabPosition;
  tabs: string[];
  activeTab: number;
  activateTab: (index: number) => void;
}

export default function Tabs({ tabJustify, tabPosition, tabs, activeTab, activateTab }: Props) {
  return (
    <ul
      className={cx('tab-button-list')}
      style={{
        ...generateBoxShadowPosition(tabPosition),
        ...generateJustify(tabPosition, tabJustify),
      }}
    >
      {tabs.map((tab, index) => {
        return (
          <li
            className={cx('item', { 'active-item': activeTab === index })}
            style={{ ...generateBoxShadowPosition(tabPosition) }}
            key={tab}
          >
            <button
              className={cx('tab-button', { 'active-tab-button': activeTab === index })}
              onClick={() => activateTab(index)}
            >
              {tab}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
