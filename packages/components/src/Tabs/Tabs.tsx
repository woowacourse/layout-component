import { assignInlineVars } from "@vanilla-extract/dynamic";
import { PropsWithHTMLElement } from "../types";
import {
  root,
  tabButtons,
  vars,
} from "./Tabs.css";
import React, {
  PropsWithChildren,
  ReactNode,
  cloneElement,
  useState,
} from "react";
import TabButton from "./TabButton";

function resolveChildren(children: PropsWithChildren["children"]) {
  return children &&
    typeof children === "object" &&
    "type" in children &&
    children.type === React.Fragment
    ? children.props.children
    : children;
}

export type TabsProps<TElementType extends React.ElementType> =
  PropsWithHTMLElement<
    {
      wrap?: boolean;
    },
    TElementType
  >;

const Tabs = <TElementType extends React.ElementType = "div">(
  props: TabsProps<TElementType>
) => {
  const {
    as: Element = "div",
    wrap,
    children,
    ...restProps
  } = props;

  const [focusedTab, setFocusedTab] = useState<number>(0);
  const resolvedChildren = React.Children.toArray(resolveChildren(children));

  const activeTab = resolvedChildren[focusedTab];
  const buttons = resolvedChildren
    .map(
      (child) =>
        typeof child === "object" &&
        "props" in child &&
        "button" in child.props &&
        child.props.button
    )
    .filter((button): button is ReactNode => !!button)
    .map((button) =>
      typeof button === "string" ? <TabButton>{button}</TabButton> : button
    );

  return (
    <Element
      {...restProps}
      className={root}
      style={{
        ...restProps.style,
        ...assignInlineVars({
          [vars.flexWrap]: wrap ? 'wrap' : 'initial',
        }),
      }}
    >
      <ul className={tabButtons}>
        {buttons.map((button, index) => (
          <li key={index} onClick={() => setFocusedTab(index)}>
            {button && typeof button === "object" && "props" in button
              ? cloneElement(button, { active: focusedTab === index })
              : button}
          </li>
        ))}
      </ul>
      <div>{activeTab}</div>
    </Element>
  );
};

export default Tabs;
