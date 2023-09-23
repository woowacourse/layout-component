import { ComponentPropsWithoutRef } from 'react';

interface TabListProps extends ComponentPropsWithoutRef<'li'> {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabList = ({ label, isActive, onClick, ...props }: TabListProps) => {
  return (
    <li
      style={{
        borderBottom: '2px solid',
        borderColor: isActive ? '#6B6B6B' : '#DDDDDD',
      }}
      {...props}
    >
      <button
        type='button'
        style={{
          padding: '10px 20px',
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          color: isActive ? 'blue' : 'black',
          fontWeight: isActive ? 'bold' : 'normal',
        }}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  );
};

export default TabList;
