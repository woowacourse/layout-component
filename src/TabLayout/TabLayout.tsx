import { useState, ReactNode } from "react";
import styled from "styled-components";

type TabLayoutProps = {
  /**
   * 탭 이름을 포함하는 문자열 배열을 전달합니다.
   *
   * @param {string[]}
   */
  tabs: string[];
  /**
   * 각 탭에 해당하는 콘텐츠를 포함하는 ReactNode 배열을 전달합니다.
   *
   * @param {ReactNode[]}
   */
  children: ReactNode[];
};

type TabButtonProps = {
  isActive: boolean;
};

const TabLayout = (props: TabLayoutProps) => {
  const { tabs, children } = props;
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <TabLayoutContainer>
      <ButtonContainer>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            role="tab"
            onClick={() => handleTabClick(index)}
            isActive={activeTab === index}
            aria-selected={activeTab === index ? "true" : "false"}
          >
            {tab}
          </TabButton>
        ))}
      </ButtonContainer>
      <Content>{children[activeTab]}</Content>
    </TabLayoutContainer>
  );
};

const TabLayoutContainer = styled.nav`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1%;
  border-bottom: 1px solid;
  padding-bottom: 10px;
`;

const TabButton = styled.button<TabButtonProps>`
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.isActive ? "#007BFF" : "transparent")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
`;

const Content = styled.section``;

export default TabLayout;
