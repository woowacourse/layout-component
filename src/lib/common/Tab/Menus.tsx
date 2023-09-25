import { css } from '@emotion/react';

import { useContext, type PropsWithChildren } from 'react';

import FlexContainer from '../FlexContainer';
import type { FlexContainerProps } from '../FlexContainer/FlexContainer';
import { TabContext } from './Tab';

export interface MenusProps extends FlexContainerProps {
  /** 선택된 메뉴를 강조하는 색깔 변경 가능
   * @default '#000'
   */
  highlightColor?: string;
}

const Menus = ({
  highlightColor = '#000',
  children,
  gap,
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
      css={menuStyle(highlightColor)}
      {...attributes}
    >
      {children}
    </FlexContainer>
  );
};

const menuStyle = (highlightColor: string) => css`
  input[type='radio'] {
    display: none;
  }

  label:has(input[type='radio']:checked) {
    font-weight: 600;
    color: ${highlightColor};

    box-shadow: 0 2px 0 0 ${highlightColor};

    fill: ${highlightColor};
    stroke: ${highlightColor};
  }
`;

export default Menus;
