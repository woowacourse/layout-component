import styled from "styled-components";
import { NumberUnitType } from "../../../types";

interface TabMenuStyledProps {
  $isCurrentTab: boolean;
  $tabMenuBorderBottomColor: string;
  $tabMenuFontSize: string;
  $tabMenuHeight: NumberUnitType;
}

const TabMenu = styled.button<TabMenuStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ $tabMenuHeight }) => $tabMenuHeight};

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
    opacity: 50%;
    transform: scale(0.98);
  }
`;

export default TabMenu;
