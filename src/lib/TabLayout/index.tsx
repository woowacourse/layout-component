import { ReactNode, useState } from "react";
import {
  rowTabLayoutContainer,
  columnTabLayoutContainer,
  rowMenuContainer,
  columnMenuContainer,
  unselectedRowMenuItem,
  selectedRowMenuItem,
  unselectedColumnMenuItem,
  selectedColumnMenuItem,
  content,
} from "./style";

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
  const isRow = menuDirection === "row";

  return (
    <div style={isRow ? rowTabLayoutContainer : columnTabLayoutContainer}>
      <div style={content}>
        {itemList.find((item) => item.key === nowTabKey)?.content}
      </div>
      <div style={isRow ? rowMenuContainer : columnMenuContainer}>
        {itemList.map(({ key, name }) => {
          if (nowTabKey !== key)
            return (
              <button
                key={key}
                style={isRow ? unselectedRowMenuItem : unselectedColumnMenuItem}
                onClick={() => setNowTabKey(key)}
              >
                {name}
              </button>
            );
          return (
            <button
              key={key}
              style={isRow ? selectedRowMenuItem : selectedColumnMenuItem}
              onClick={() => setNowTabKey(key)}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
