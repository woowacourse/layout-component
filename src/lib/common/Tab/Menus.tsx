import type { PropsWithChildren } from 'react';
import { useContext } from 'react';

import FlexContainer from '../FlexContainer';
import type { FlexContainerProps } from '../FlexContainer/FlexContainer';
import { TabContext } from './Tab';
import { menuContainerStyle } from './styles/menus.style';

export interface MenusProps extends Omit<FlexContainerProps, 'layout'> {
  /** 선택된 탭 메뉴를 강조하는 색깔 변경 가능
   * @default #000
   */
  highlightColor?: string;
  /** 선택된 탭 메뉴 아래에 선 제거 가능
   * @default false
   */
  noUnderline?: boolean;
  /** [true] 메뉴 이름이 탭 메뉴의 너비보다 길 경우 말 줄임표(...) 표시
   * @default false
   */
  lineClamp?: boolean;
}

const Menus = ({
  highlightColor = '#000',
  children,
  gap,
  noUnderline = false,
  lineClamp = false,
  ...attributes
}: PropsWithChildren<MenusProps>) => {
  const { vertical } = useContext(TabContext);

  return (
    <FlexContainer
      role="tablist"
      aria-label="탭 메뉴"
      width={vertical ? 'fit-content' : '100%'}
      direction={vertical ? 'column' : 'row'}
      justify={vertical ? 'start' : 'space-between'}
      position="left"
      gap={gap}
      css={menuContainerStyle({ highlightColor, noUnderline, vertical, lineClamp })}
      {...attributes}
    >
      {children}
    </FlexContainer>
  );
};

export default Menus;
