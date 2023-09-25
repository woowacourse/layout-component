import { ReactNode, useState } from "react";
import { styled } from "styled-components";
import TabMenu from "./TabMenu";

interface TabLayoutProps {
  tabs: ReactNode[];
  tabsMenu: string[];

  tabWidth?: string;
  tabMenuHeight?: string;
  tabMenuFontSize?: string;
  tabMenuBorderBottomColor?: string;
  defaultTabIndex?: number;
}

const TabLayout = ({
  tabs,
  tabsMenu,
  tabWidth = "100%",
  tabMenuFontSize = "16px",
  tabMenuBorderBottomColor = "black",
  defaultTabIndex = 0,
}: TabLayoutProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(defaultTabIndex);

  const changeTabIndex = (index: number) => () => {
    setCurrentTabIndex(index);
  };

  return (
    <>
      <TabsMenuContainer $tabWidth={tabWidth}>
        {tabsMenu.map((tabMenu, index) => (
          <TabMenu
            onClick={changeTabIndex(index)}
            $isCurrentTab={currentTabIndex === index}
            $tabMenuFontSize={tabMenuFontSize}
            $tabMenuBorderBottomColor={tabMenuBorderBottomColor}
          >
            {tabMenu}
          </TabMenu>
        ))}
      </TabsMenuContainer>
      <TabContainer $tabWidth={tabWidth}>{tabs[currentTabIndex]}</TabContainer>
    </>
  );
};

const TabsMenuContainer = styled.header<{ $tabWidth: string }>`
  display: flex;
  width: ${({ $tabWidth }) => $tabWidth};
`;

const TabContainer = styled.section<{ $tabWidth: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: pink;
  padding: 10px;
  width: ${({ $tabWidth }) => $tabWidth};
`;

export default TabLayout;
