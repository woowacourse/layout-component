import { useContext, type PropsWithChildren } from 'react';

import type { FlexBasicLayout } from '../FlexContainer/FlexContainer';
import FlexItem from '../FlexItem';
import { TabContext } from './Tab';

interface ContentProps {
  /** 탭 패널(내용)의 항목, 원하는 탭 항목과 일치시켜야 함 */
  index: number;
  /**
   * 탭 패널(내용)의 가로 위치 변경 가능
   * @default 'center' */
  position?: FlexBasicLayout | 'stretch';
}

const Content = ({ children, position = 'center', index }: PropsWithChildren<ContentProps>) => {
  const { activeTab } = useContext(TabContext);

  if (activeTab !== `menu-${index}`) return <></>;

  return (
    <FlexItem alignSelf={position} role="tabpanel">
      {children}
    </FlexItem>
  );
};

export default Content;
