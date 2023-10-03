/** @jsxImportSource @emotion/react */

import { ComponentPropsWithoutRef, ReactElement } from 'react';
import { useTabContext } from './useTab';
import { css } from '@emotion/react';

type IconDirection = 'row' | 'column';

interface Props extends ComponentPropsWithoutRef<'button'> {
  label: string;
  icon?: ReactElement;
  iconDirection?: IconDirection;
  tabId?: number;
}

const Tab = ({
  label,
  icon,
  iconDirection = 'column',
  tabId = 0,
  disabled,
  hidden = false,
}: Props) => {
  const { tabIndex, onTabIndexChange } = useTabContext();
  const isSelected = tabId === tabIndex;

  return (
    <button
      css={buttonStyle({ isSelected, hidden, iconDirection })}
      id={`tab-${tabId}`}
      disabled={disabled}
      role='tab'
      aria-selected={isSelected}
      aria-controls={`panel-${tabId}`}
      onClick={() => onTabIndexChange(tabId)}
    >
      {icon}
      {label}
    </button>
  );
};

export default Tab;

type StyleProps = {
  isSelected: boolean;
  iconDirection: IconDirection;
  hidden: boolean;
};

const buttonStyle = ({ isSelected, iconDirection, hidden }: StyleProps) => {
  return css({
    display: hidden ? 'none' : 'flex',
    flexDirection: `${iconDirection}`,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    width: '100%',
    padding: '12px 16px',
    fontSize: '14px',
    backgroundColor: isSelected ? '#fff' : 'transparent',
    border: '1px solid transparent',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in',

    '& > svg': {
      width: '16px',
    },

    '&:not(:disabled):hover': {
      backgroundColor: isSelected ? '#fff' : '#bfbfbf',
    },
  });
};
