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
  /**
   * 버튼이 활성화 되었을 때 스타일입니다.
   */
  activeStyle?: {
    /**
     * 활성화 되었을 때 글자색입니다.
     */
    color?: string;
    /**
     * 활성화 되었을 때 배경색입니다.
     */
    backgroundColor?: string;
    /**
     * 활성화 되었을 때 테두리색입니다.
     */
    borderColor?: string;
    /**
     * 활성화 되었을 때 글자의 굵기입니다.
     */
    fontWeight?: string;
  };
  /**
   * 버튼이 비활성화 되었을 때 스타일입니다.
   */
  inactiveStyle?: {
    /**
     * 비활성화 되었을 때 글자색입니다.
     */
    color?: string;
    /**
     * 비활성화 되었을 때 배경색입니다.
     */
    backgroundColor?: string;
    /**
     * 비활성화 되었을 때 테두리색입니다.
     */
    borderColor?: string;
    /**
     * 활성화 되었을 때 글자의 굵기입니다.
     */
    fontWeight?: string;
  };
  /**
   * 버튼의 padding 값을 조절할 수 있습니다.
   */
  padding?: string;
  /**
   * 버튼의 글자 크기를 조절할 수 있습니다.
   */
  fontSize?: string;
  /**
   * 버튼의 이름입니다.
   */
  label: string;
  /**
   * 버튼이 활성화 됐는지 여부입니다.
   */
  isActive: boolean;
  /**
   * 버튼 클릭 이벤트 핸들러입니다.
   */
  onClick: () => void;
}

const TabList = ({
  activeStyle = defaultActiveStyle,
  inactiveStyle = defaultInactiveStyle,
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
        width: '100%',
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
          backgroundColor: isActive
            ? activeStyle.backgroundColor
            : inactiveStyle.backgroundColor,
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
