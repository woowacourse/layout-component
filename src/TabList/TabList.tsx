import { ComponentPropsWithoutRef } from 'react';

const defaultActiveStyle = {
  color: '#6B6B6B',
  borderColor: '#6B6B6B',
  fontWeight: 'bold',
};

const defaultInactiveStyle = {
  color: '#A0A0A0',
  borderColor: '#DDDDDD',
  fontWeight: 'normal',
};

interface TabListProps extends ComponentPropsWithoutRef<'li'> {
  activeStyle?: {
    color?: string;
    backGroundColor?: string;
    borderColor?: string;
    fontWeight?: string;
  };
  inactiveStyle?: {
    color?: string;
    backGroundColor?: string;
    borderColor?: string;
    fontWeight?: string;
  };
  listWidth?: string;
  padding?: string;
  fontSize?: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabList = ({
  activeStyle = defaultActiveStyle,
  inactiveStyle = defaultInactiveStyle,
  listWidth = '100%',
  padding = '20px',
  fontSize = '16px',
  label,
  isActive,
  onClick,
  ...props
}: TabListProps) => {
  return (
    <li
      style={{
        width: listWidth,
        borderBottom: '2px solid',
        borderColor: isActive
          ? activeStyle.borderColor
          : inactiveStyle.borderColor,
      }}
      {...props}
    >
      <button
        type='button'
        style={{
          width: '100%',
          padding,
          fontSize,
          color: isActive ? activeStyle.color : inactiveStyle.color,
          fontWeight: isActive
            ? activeStyle.fontWeight
            : inactiveStyle.fontWeight,
          textAlign: 'center',
        }}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  );
};

export default TabList;
