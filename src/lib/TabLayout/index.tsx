import { ReactNode, useState } from "react";
import { styled } from "styled-components";
import { NumberUnitType } from "../../types";
import TabMenu from "./TabMenu";

interface TabLayoutProps {
  tabsMenu: string[];
  children?: ReactNode[];
  tabWidth?: NumberUnitType;
  tabMenuHeight?: NumberUnitType;
  tabMenuFontSize?: string;
  tabMenuBorderBottomColor?: string;
  defaultTabIndex?: number;
}

const TabLayout = ({
  tabsMenu,
  tabWidth = "100%",
  tabMenuHeight = "45px",
  tabMenuFontSize = "16px",
  tabMenuBorderBottomColor = "black",
  defaultTabIndex = 0,
  children = [],
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
            $tabMenuHeight={tabMenuHeight}
            $tabMenuFontSize={tabMenuFontSize}
            $tabMenuBorderBottomColor={tabMenuBorderBottomColor}
          >
            {tabMenu}
          </TabMenu>
        ))}
      </TabsMenuContainer>
      <TabContainer $tabWidth={tabWidth}>
        {children[currentTabIndex]}
      </TabContainer>
    </>
  );
};

const TabsMenuContainer = styled.header<{ $tabWidth: string }>`
  display: flex;
  width: ${({ $tabWidth }) => $tabWidth};
`;

const TabContainer = styled.div<{ $tabWidth: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $tabWidth }) => $tabWidth};

  padding: 10px;
  box-sizing: border-box;
`;

export default TabLayout;
