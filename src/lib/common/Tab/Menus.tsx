import type { PropsWithChildren } from 'react';
import { useContext } from 'react';

import FlexContainer from '../FlexContainer';
import type { FlexContainerProps } from '../FlexContainer/FlexContainer';
import { TabContext } from './Tab';
import { menuContainerStyle } from './styles/menus.style';

export interface MenusProps extends FlexContainerProps {
  /** 선택된 탭 메뉴를 강조하는 색깔 변경 가능
   * @default #000
   */
  highlightColor?: string;
  /** 선택된 탭 메뉴 아래에 선 제거 가능
   * @default false
   */
  noUnderline?: boolean;
}

const Menus = ({
  highlightColor = '#000',
  children,
  gap,
  noUnderline = false,
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
      css={menuContainerStyle({ highlightColor, noUnderline, vertical })}
      {...attributes}
    >
      {children}
    </FlexContainer>
  );
};

export default Menus;
