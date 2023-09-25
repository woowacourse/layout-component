import { useEffect, useState } from 'react';

export const useTabLayout = (length: { tabs: number; panel: number }) => {
  const initialTab = 0;
  const [activeTab, setActiveTab] = useState(initialTab);

  const activateTab = (index: number) => setActiveTab(index);

  useEffect(() => {
    if (length.tabs !== length.panel) throw new Error('Tabs와 패널의 개수가 다릅니다.');
  }, [length]);

  return { activeTab, activateTab };
};
