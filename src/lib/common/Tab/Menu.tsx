import { css } from '@emotion/react';

import type { ChangeEvent, ComponentPropsWithoutRef } from 'react';
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
  const { id, initialIndex, setActiveTab } = useContext(TabContext);

  const handleCheckMenu = ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
    if (checked) {
      setActiveTab(`menu-${index}`);
    }
  };

  return (
    <button role="tab" css={tabMenuStyle} {...attributes}>
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

  color: #555;
  text-align: center;

  background: transparent;
  border: none;

  &:hover {
    color: #333;
  }
`;

const menuLabelStyle = css`
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 8px 0;
`;

export default Menu;
