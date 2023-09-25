import styled from "styled-components";

interface TabMenuProps {
  $isCurrentTab: boolean;
  $tabMenuBorderBottomColor: string;
  $tabMenuFontSize: string;
}

const TabMenu = styled.button<TabMenuProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;

  color: ${({ $isCurrentTab }) => !$isCurrentTab && "gray"};
  font-weight: ${({ $isCurrentTab }) => $isCurrentTab && "700"};
  font-size: ${({ $tabMenuFontSize }) => $tabMenuFontSize};

  background: transparent;
  border: none;
  border-bottom: ${({ $isCurrentTab, $tabMenuBorderBottomColor }) =>
    $isCurrentTab && `3px solid  ${$tabMenuBorderBottomColor}`};

  transition: all ease 0.3s;

  cursor: pointer;
  &:hover {
    opacity: 60%;
    transition: scale(0.98);
  }
`;

export default TabMenu;
