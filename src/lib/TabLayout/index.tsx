import { ReactNode, useState } from "react";
import { getStyle } from "./style";

interface TabItem {
  name: string;
  key: string;
  content: ReactNode;
}

interface TabLayoutProps {
  menuDirection: "row" | "column";
  itemList: TabItem[];
}

export default function TabLayout({ itemList, menuDirection }: TabLayoutProps) {
  const [nowTabKey, setNowTabKey] = useState(itemList[0].key);
  const {
    layout,
    menuContainer,
    selectedMenuItem,
    unselectedMenuItem,
    content,
  } = getStyle(menuDirection);

  const minWidth = itemList.length * 40 - 12;
  const contentStyle =
    menuDirection === "row" ? { ...content, minWidth } : content;

  return (
    <div style={layout}>
      <div style={menuContainer}>
        {itemList.map(({ key, name }) => {
          return (
            <button
              key={key}
              style={nowTabKey !== key ? unselectedMenuItem : selectedMenuItem}
              onClick={() => setNowTabKey(key)}
            >
              {name}
            </button>
          );
        })}
      </div>
      <div style={contentStyle}>
        {itemList.find((item) => item.key === nowTabKey)?.content}
      </div>
    </div>
  );
}
