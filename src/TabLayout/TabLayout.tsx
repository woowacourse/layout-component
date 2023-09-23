import React, { ComponentPropsWithoutRef, ReactNode, useState } from 'react';
import TagList from '../TabList';

export interface TabLayoutProps extends ComponentPropsWithoutRef<'div'> {
  tabs: string[];
  children: ReactNode[];
}

const TabLayout = ({ tabs, children, ...props }: TabLayoutProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section {...props}>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        {tabs.map((label, index) => (
          <TagList
            key={label}
            label={label}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </ul>
      <div>
        {React.Children.map(children, (child, index) => (
          <div style={{ display: activeTab === index ? 'block' : 'none' }}>
            {child}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TabLayout;
