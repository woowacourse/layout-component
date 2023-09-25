import { assignInlineVars } from "@vanilla-extract/dynamic";
import { PropsWithHTMLElement } from "../types";
import { activeTabControl, root, tabControl, tabControls, tabs, vars } from "./Tab.css";
import React, { PropsWithChildren, useState } from "react";

export type TabProps<TElementType extends React.ElementType> =
  PropsWithHTMLElement<
    {
      tabs: string[];
    },
    TElementType
  >;

const Tab = <TElementType extends React.ElementType = "div">(
  props: TabProps<TElementType>
) => {
  const {
    as: Element = "div",
    tabs: tabItems,
    rows,
    columns,
    gap,
    children,
    ...restProps
  } = props;

  const [focusedTab, setFocusedTab] = useState<number>(0);

  function resolveChildren(children: PropsWithChildren["children"]) {
    return children &&
      typeof children === "object" &&
      "type" in children &&
      children.type === React.Fragment
      ? children.props.children
      : children;
  }

  const child = React.Children.toArray(resolveChildren(children))[focusedTab];

  return (
    <Element
      {...restProps}
      className={root}
      style={{
        ...restProps.style,
        ...assignInlineVars({
          [vars.focusedTab]: String(focusedTab + 1),
        }),
      }}
    >
      <ul className={tabControls}>
        {tabItems.map((tab, index) => (
          <li key={tab}>
            <button
              className={[focusedTab === index ? activeTabControl : undefined, tabControl].join(' ')}
              onClick={() => setFocusedTab(index)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
      <div className={tabs}>{child}</div>
    </Element>
  );
};

export default Tab;
