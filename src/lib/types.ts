import { ReactElement, ReactNode } from 'react';

// 공통 속성을 가진 BaseProps 선언
type BaseProps = {
  children: ReactNode;
};

// 기본적으로 포커스를 가질 수 있는 타입
type FocusableProps = BaseProps & {
  defaultFocus?: boolean;
};

// 이름과 인덱스를 가질 수 있는 타입
type NamedProps = {
  name: string | number;
  index?: number;
};

export type TabsProps = FocusableProps & {
  className?: string;
  defaultIdx?: string | number;
};

export type TabPanelProps = BaseProps & NamedProps;

export type TabPanelListProps = {
  children: ReactElement<TabPanelProps>[];
};

export type TabListProps = BaseProps;

export type TabProps = BaseProps & NamedProps;
