import { ReactNode } from "react";
interface TabItem {
    name: string;
    key: string;
    content: ReactNode;
}
interface TabLayoutProps {
    menuDirection: "row" | "column";
    itemList: TabItem[];
}
export default function TabLayout({ itemList, menuDirection }: TabLayoutProps): import("react/jsx-runtime").JSX.Element;
export {};
