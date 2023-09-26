import { css } from '@emotion/react';

import type { PropsWithChildren } from 'react';
import { useContext } from 'react';

import FlexContainer from '../FlexContainer';
import type { FlexContainerProps } from '../FlexContainer/FlexContainer';
import { TabContext } from './Tab';

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
      css={menuStyle({ highlightColor, noUnderline, vertical })}
      {...attributes}
    >
      {children}
    </FlexContainer>
  );
};

interface menuStyleProps {
  highlightColor: string;
  noUnderline: boolean;
  vertical: boolean | undefined;
}

const menuStyle = ({ highlightColor, noUnderline, vertical = false }: menuStyleProps) => css`
  ${!noUnderline && `box-shadow: 0 2px 0 0 #eee;`}

  button {
    ${vertical && `box-shadow: 0 2px 0 0 #eee;`}
  }

  button.active {
    font-weight: 600;
    color: ${highlightColor};

    ${!noUnderline && `box-shadow: 0 2px 0 0 ${highlightColor};`}

    fill: ${highlightColor};
    stroke: ${highlightColor};
  }
`;

export default Menus;
