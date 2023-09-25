import { css } from '@emotion/react';

import type { ChangeEvent } from 'react';
import { useContext, type ReactNode } from 'react';

import { TabContext } from './Tab';

interface MenuProps {
  /** 메뉴 이름 */
  label?: string;
  /** 메뉴 아이콘 */
  icon?: ReactNode;
  /** 메뉴 항목 */
  index: number;
}

const Menu = ({ label, icon, index }: MenuProps) => {
  const { id, initialIndex, setActiveTab } = useContext(TabContext);

  const handleCheckMenu = ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
    if (checked) {
      setActiveTab(`menu-${index}`);
    }
  };

  return (
    <button role="tab" css={tabMenuStyle}>
      <label htmlFor={`menu-${label}-${index}`} className={`menu-${index}`} css={menuLabelStyle}>
        <input
          type="radio"
          id={`menu-${label}-${index}`}
          name={`${id}-tab-menu`}
          value={label}
          defaultChecked={index === initialIndex}
          onChange={handleCheckMenu}
        />
        {icon}
        {label}
      </label>
    </button>
  );
};

const tabMenuStyle = css`
  flex: 1;
  text-align: center;
`;

const menuLabelStyle = css`
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 4px 0;
`;

export default Menu;
