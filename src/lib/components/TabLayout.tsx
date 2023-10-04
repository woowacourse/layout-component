import React, { PropsWithChildren, useCallback, useState } from 'react';
import { TabPosition, Tabs } from '../types';

interface TabLayoutProps extends PropsWithChildren {
  tabs: Tabs;
  className?: string;
  tabPosition?: TabPosition;
  activeButtonColor?: string;
}

const TabLayout = ({
  tabs,
  tabPosition = 'top',
  activeButtonColor,
  className,
  children,
}: TabLayoutProps) => {
  const [selectedTab, setSelectedTap] = useState(0);

  const getFlexConfigCss = useCallback((position: TabPosition) => {
    switch (position) {
      case 'right':
        return 'flex-row-reverse';
      case 'bottom':
        return 'flex-col flex-col-reverse';
      case 'left':
        return '';
      default:
        return 'flex-col';
    }
  }, []);

  const childrenNodes = React.Children.toArray(children);

  if (tabs.length !== childrenNodes.length) {
    return <div className='font-bold text-red-500'>탭의 개수와 컨텐츠의 개수는 같아야합니다</div>;
  }

  return (
    <div className='inline-block h-full w-full'>
      <div className={`flex ${getFlexConfigCss(tabPosition)} ${className}`}>
        <div
          className={`flex ${(tabPosition === 'right' || tabPosition === 'left') && 'flex-col'}`}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setSelectedTap(index)}
              className='flex-1'
              style={{
                ...(selectedTab === index && { color: activeButtonColor }),
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div>{childrenNodes[selectedTab]}</div>
      </div>
    </div>
  );
};

export default TabLayout;
