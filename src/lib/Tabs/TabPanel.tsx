import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

type TabPanelProps = {
  /**
   * Tab의 이름을 나타내는 속성, 해당 값은 고유한 값
   *
   */
  label: string;
  /**
   * Tab의 비활성 여부를 정하는 속성
   *
   */
  disabled?: boolean;
} & ComponentPropsWithoutRef<'div'>;

function TabPanel({ children }: PropsWithChildren<TabPanelProps>) {
  return <Layout>{children}</Layout>;
}

export default TabPanel;

const Layout = styled.div`
  padding: 16px;
`;
