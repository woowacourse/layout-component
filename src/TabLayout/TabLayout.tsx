import '../styles/reset.css';

import { ComponentPropsWithoutRef, ReactNode, useState } from 'react';
import TagList from '../TabList';

export interface TabLayoutProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Tab 버튼에 들어갈 목록입니다.
   * Tab 버튼 이름을 지정할 수 있습니다.
   */
  tabs: string[];
  /**
   * Tab 버튼 리스트의 길이를 조절할 수 있습니다.
   */
  width?: string;
  /**
   * Tab 버튼 리스트 내부에 들어갈 스타일을 지정할 수 있습니다.
   */
  tabListStyles?: {
    /**
     * 버튼이 활성화 되었을 때 스타일입니다.
     */
    activeStyle?: {
      /**
       * 활성화 되었을 때 글자색입니다.
       */
      color?: string;
      /**
       * 활성화 되었을 때 배경색입니다.
       */
      backgroundColor?: string;
      /**
       * 활성화 되었을 때 테두리색입니다.
       */
      borderColor?: string;
      /**
       * 활성화 되었을 때 글자의 굵기입니다.
       */
      fontWeight?: string;
    };
    /**
     * 버튼이 비활성화 되었을 때 스타일입니다.
     */
    inactiveStyle?: {
      /**
       * 비활성화 되었을 때 글자색입니다.
       */
      color?: string;
      /**
       * 비활성화 되었을 때 배경색입니다.
       */
      backgroundColor?: string;
      /**
       * 비활성화 되었을 때 테두리색입니다.
       */
      borderColor?: string;
      /**
       * 활성화 되었을 때 글자의 굵기입니다.
       */
      fontWeight?: string;
    };
    /**
     * 버튼의 padding 값을 조절할 수 있습니다.
     */
    padding?: string;
    /**
     * 버튼의 글자 크기를 조절할 수 있습니다.
     */
    fontSize?: string;
  };
  /**
   * TabLayout의 자식 컴포넌트입니다.
   * Tab의 콘텐츠를 지정할 수 있습니다.
   */
  children: ReactNode[];
}

const TabLayout = ({
  tabs,
  width = '100%',
  tabListStyles,
  children,
  ...props
}: TabLayoutProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section {...props}>
      <ul style={{ display: 'flex', width }}>
        {tabs.map((label, index) => (
          <TagList
            key={label}
            label={label}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
            activeStyle={tabListStyles?.activeStyle}
            inactiveStyle={tabListStyles?.inactiveStyle}
            padding={tabListStyles?.padding}
            fontSize={tabListStyles?.fontSize}
          />
        ))}
      </ul>
      {children[activeTab]}
    </section>
  );
};

export default TabLayout;
