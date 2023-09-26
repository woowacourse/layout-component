import { useState } from "react";
import { TabLayoutProps, TabButtonProps } from "./type";
import styled from "styled-components";

const TabLayout = (props: TabLayoutProps) => {
  const { tabs, children } = props;
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabsClick = (index: number) => {
    setSelectedTab(index);
  };
  return (
    <TabLayoutContainer>
      <ButtonContainer>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            onClick={() => handleTabsClick(index)}
            isActive={selectedTab === index}
          >
            {tab}
          </TabButton>
        ))}
      </ButtonContainer>
      <Content>{children[selectedTab]}</Content>
    </TabLayoutContainer>
  );
};

const TabLayoutContainer = styled.nav`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  /* gap: 1%; */
  border-bottom: 1px solid;
  padding-bottom: 10px;
`;

const TabButton = styled.button<TabButtonProps>`
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.isActive ? "#64CCC5" : "transparent")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
`;

const Content = styled.section``;

export default TabLayout;
