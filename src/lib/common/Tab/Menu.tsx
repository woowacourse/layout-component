import type { ComponentPropsWithoutRef } from 'react';
import { useContext, type ReactNode } from 'react';

import { TabContext } from './Tab';
import { tabMenuStyle, tabMenuWithIconStyle } from './styles/menu.style';

export type IconPosition = 'top' | 'right' | 'bottom' | 'left';
export interface MenuProps extends ComponentPropsWithoutRef<'button'> {
  /** 탭 메뉴 이름 */
  label?: string;
  /** 탭 메뉴 아이콘 */
  icon?: ReactNode;
  /** 탭 메뉴 아이콘 위치, 아이콘이 있을 때만 동작
   * @default 'left'
   */
  iconPosition?: IconPosition;
  /** 탭 메뉴의 항목, 원하는 내용의 항목과 일치시켜야 함 */
  index: number;
}

const Menu = ({ label, icon, index, iconPosition = 'left', ...attributes }: MenuProps) => {
  const { id, activeTab, setActiveTab } = useContext(TabContext);

  const handleSelectMenu = () => {
    setActiveTab(`menu-${index}`);
  };

  return (
    <button
      role="tab"
      id={`${id}-tab-${index}`}
      aria-controls={`${id}-panel-${index}`}
      aria-selected={activeTab === `menu-${index}` ? true : false}
      className={activeTab === `menu-${index}` ? 'active' : ''}
      css={[tabMenuStyle, icon && tabMenuWithIconStyle(iconPosition)]}
      {...attributes}
      onClick={handleSelectMenu}
    >
      {icon}
      {label}
    </button>
  );
};

export default Menu;
