import React, { ReactNode, useState } from "react";
import {
  tabLayoutContainer,
  rowMenuContainer,
  columnMenuContainer,
  unselectedRowMenuItem,
  selectedRowMenuItem,
  unselectedColumnMenuItem,
  selectedColumnMenuItem,
  rowContent,
  columnContent,
} from "./style";

interface TabItem {
  name: string;
  key: string;
  content: ReactNode;
}

interface TabLayoutProps {
  menuPlace: "row" | "column";
  itemList: TabItem[];
}

export default function TabLayout({ itemList, menuPlace }: TabLayoutProps) {
  const [nowTabKey, setNowTabKey] = useState(itemList[0].key);
  const isRow = menuPlace === "row";

  return (
    <div style={!isRow ? tabLayoutContainer : {}}>
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
      <div style={isRow ? rowContent : columnContent}>
        {itemList.find((item) => item.key === nowTabKey)?.content}
      </div>
    </div>
  );
}
