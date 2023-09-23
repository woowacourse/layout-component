import '../styles/reset.css';
import { ComponentPropsWithoutRef, ReactNode, useState } from 'react';
import TagList from '../TabList';

export interface TabLayoutProps extends ComponentPropsWithoutRef<'div'> {
  tabs: string[];
  children: ReactNode[];
}

const TabLayout = ({ tabs, children, ...props }: TabLayoutProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section {...props}>
      <ul style={{ display: 'flex' }}>
        {tabs.map((label, index) => (
          <TagList
            key={label}
            label={label}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </ul>
      {children[activeTab]}
    </section>
  );
};

export default TabLayout;
