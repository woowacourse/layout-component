import { ReactElement } from 'react';
import { CSSProperties } from 'styled-components';
interface TabLayoutProps {
    tabs: string[];
    children: ReactElement[];
    bordercolor: CSSProperties['color'];
}
declare const TabLayout: ({ tabs, children, bordercolor }: TabLayoutProps) => import("react/jsx-runtime").JSX.Element;
export default TabLayout;
