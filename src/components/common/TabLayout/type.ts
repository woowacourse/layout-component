import { ReactNode } from "react";

export interface TabLayoutProps {
  tabs: string[];
  children: ReactNode[];
}

export interface TabButtonProps {
  isActive: boolean;
}
