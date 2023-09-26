import { css } from '@emotion/react';

import type { ComponentPropsWithoutRef } from 'react';
import { useContext, type ReactNode } from 'react';

import { TabContext } from './Tab';

interface MenuProps extends ComponentPropsWithoutRef<'button'> {
  /** 메뉴 이름 */
  label?: string;
  /** 메뉴 아이콘 */
  icon?: ReactNode;
  /** 메뉴 항목 */
  index: number;
}

const Menu = ({ label, icon, index, ...attributes }: MenuProps) => {
  const { activeTab, setActiveTab } = useContext(TabContext);

  const handleCheckMenu = () => {
    setActiveTab(`menu-${index}`);
  };

  return (
    <button
      role="tab"
      className={activeTab === `menu-${index}` ? 'active' : ''}
      css={tabMenuStyle}
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

export default Menu;
