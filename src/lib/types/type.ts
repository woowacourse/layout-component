import { ReactNode } from 'react';

export type ResponsiveStyleType<T> = Partial<{
  desktop: T;
  tablet: T | [number, T];
  mobile: T | [number, T];
}>;

export type Label = string | number;

export type PanelList = {
  label: Label;
  disabled: boolean;
  contents: ReactNode;
}[];

export type TabsDirection = 'horizontal' | 'vertical';

export type ScrollPositionState = 'start' | 'end' | 'both' | null;
