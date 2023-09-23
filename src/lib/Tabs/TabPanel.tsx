import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

type TabPanelProps = {
  label: string;
} & ComponentPropsWithoutRef<ElementType>;

function TabPanel({ children }: PropsWithChildren<TabPanelProps>) {
  return <div>{children}</div>;
}

export default TabPanel;
