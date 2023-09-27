import { css } from '@emotion/react';

import type { ComponentPropsWithoutRef } from 'react';
import { useContext, type ReactNode } from 'react';

import { TabContext } from './Tab';

type IconPosition = 'top' | 'right' | 'bottom' | 'left';
export interface MenuProps extends ComponentPropsWithoutRef<'button'> {
  /** 탭 메뉴 이름 */
  label?: string;
  /** 탭 메뉴 아이콘 */
  icon?: ReactNode;
  /** 탭 메뉴 아이콘 위치
   * @default 'left'
   */
  iconPosition?: IconPosition;
  /** 탭 메뉴의 항목, 원하는 내용의 항목과 일치시켜야 함 */
  index: number;
}

const Menu = ({ label, icon, index, iconPosition = 'left', ...attributes }: MenuProps) => {
  const { activeTab, setActiveTab } = useContext(TabContext);

  const handleCheckMenu = () => {
    setActiveTab(`menu-${index}`);
  };

  return (
    <button
      role="tab"
      className={activeTab === `menu-${index}` ? 'active' : ''}
      css={[tabMenuStyle, icon && tabMenuWithIconStyle(iconPosition)]}
      {...attributes}
      onClick={handleCheckMenu}
    >
      {icon}
      {label}
    </button>
  );
};

const tabMenuStyle = css`
  flex: 1;

  padding: 8px 0;

  color: #555;
  text-align: center;

  background: transparent;
  border: none;

  &:hover {
    color: #333;
  }
`;

const getFlexDirection = (iconPosition: IconPosition) => {
  switch (iconPosition) {
    case 'top':
      return 'column';
    case 'bottom':
      return 'column-reverse';
    case 'left':
      return 'row';
    case 'right':
      return 'row-reverse';
  }
};

const tabMenuWithIconStyle = (iconPosition: IconPosition) => css`
  display: flex;
  flex-direction: ${getFlexDirection(iconPosition)};
  gap: 2px;
  align-items: center;
  justify-content: center;
`;

export default Menu;
