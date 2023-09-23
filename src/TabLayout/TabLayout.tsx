import React, { ReactNode, useState } from 'react';

interface TabLayoutProps {
  tabs: string[];
  children: ReactNode[];
}

const TabLayout = ({ tabs, children }: TabLayoutProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            style={{
              padding: '10px 20px',
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              color: activeTab === index ? 'blue' : 'black',
              fontWeight: activeTab === index ? 'bold' : 'normal',
            }}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {React.Children.map(children, (child, index) => (
          <div style={{ display: activeTab === index ? 'block' : 'none' }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabLayout;
