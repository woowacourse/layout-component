import { useState, ReactNode } from "react";
import "./index.css";

type TabLayoutProps = {
  tabs: string[];
  children: ReactNode[];
};

const TabLayout = (props: TabLayoutProps) => {
  const { tabs, children } = props;
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabButtons = tabs.map((tab, index) => (
    <button
      key={index}
      className={`tab-button ${activeTab === index ? "active" : ""}`}
      aria-label="tab-button"
      onClick={() => handleTabClick(index)}
    >
      {tab}
    </button>
  ));

  return (
    <nav className="tab-layout">
      <div className="button-container">{tabButtons}</div>
      <section className="tab-content" aria-label="tab-content">
        {children[activeTab]}
      </section>
    </nav>
  );
};

export default TabLayout;
