import React, { HTMLAttributes, useContext, useEffect, useState } from "react";
import { createContext, PropsWithChildren } from "react";

// context
const TabContext = createContext<{
  tabs: Set<string>;
  addTab: (value: string) => void;
  currentTab: string;
  selectTab: (value: string) => void;
}>({
  tabs: new Set(),
  addTab: (value: string) => {},
  currentTab: "",
  selectTab: (value: string) => {},
});

//types
type ListType = HTMLAttributes<HTMLElement> & {};
type TriggerType = HTMLAttributes<HTMLElement> & {
  value: string;
};
type ContentType = HTMLAttributes<HTMLElement> & {
  value: string;
};

//components
export const TabBox = (props: PropsWithChildren) => {
  const { children } = props;
  const [tabs, setTabs] = useState<Set<string>>(new Set());
  const [currentTab, setCurrentTab] = useState("");

  const selectTab = (value: string) => {
    setCurrentTab(value);
  };

  const addTab = (value: string) => {
    setTabs((prev) => {
      const newTabSet = prev.add(value);
      return newTabSet;
    });
  };

  return (
    <TabContext.Provider value={{ currentTab, selectTab, tabs, addTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const List = (props: PropsWithChildren<ListType>) => {
  const { children, ...restProps } = props;

  return <section {...restProps}>{children}</section>;
};

export const Trigger = (props: PropsWithChildren<TriggerType>) => {
  const { value, ...restProps } = props;
  const { tabs, addTab, selectTab } = useContext(TabContext);

  useEffect(() => {
    if (tabs.has(value)) throw Error("Use the value without duplication.");

    addTab(value);
  }, []);

  return (
    <button onClick={() => selectTab(value)} {...restProps}>
      {value}
    </button>
  );
};

export const Content = (props: PropsWithChildren<ContentType>) => {
  const { children, value } = props;
  const { currentTab, tabs } = useContext(TabContext);

  useEffect(() => {
    if (!tabs.has(value))
      throw Error("Use the same value as the Trigger component");
  }, []);

  return currentTab === value ? <article>{children}</article> : null;
};

export const Tab = Object.assign(TabBox, {
  List,
  Trigger,
  Content,
});
