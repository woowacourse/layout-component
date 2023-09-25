import { ReactElement, ReactNode } from 'react';

export type TabsProps = {
  children: ReactNode;
  className?: string;
  defaultFocus?: boolean;
  defaultIdx?: string | number;
};

export type TabPanelProps = {
  children: ReactNode;
  name: number | string;
  index?: number;
};

export type TabPanelListProps = {
  children: ReactElement<TabPanelProps>[];
};

export type TabListProps = {
  children: ReactNode;
};

export type TabProps = {
  children: ReactNode;
  name: number | string;
};
