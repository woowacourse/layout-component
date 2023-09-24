import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';
import { styled } from 'styled-components';

type TabPanelProps = {
  label: string;
} & ComponentPropsWithoutRef<ElementType>;

function TabPanel({ children }: PropsWithChildren<TabPanelProps>) {
  return <Layout>{children}</Layout>;
}

export default TabPanel;

const Layout = styled.div`
  padding: 16px;
`;
