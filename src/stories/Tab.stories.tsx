import type { Meta } from "@storybook/react";
import React from "react";
import "./tab.css";

import { Tab } from "../layout/Tab";

const meta: Meta<typeof Tab> = {
  component: Tab,
};

export default meta;
export const Primary = {
  render: () => (
    <Tab>
      <Tab.List className="list">
        <Tab.Trigger value="hi" className="trigger" />
        <Tab.Trigger value="bye" className="trigger" />
      </Tab.List>
      <Tab.Content value="hi">
        <div className="content">hi light~!</div>
      </Tab.Content>
      <Tab.Content value="bye">
        <div className="content">bye light~!</div>
      </Tab.Content>
    </Tab>
  ),
};

export const MaxSize = {
  render: () => (
    <Tab mxw-300 mxh-300>
      <div
        style={{
          width: "400px",
          height: "400px",
          color: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Max size is 300px
      </div>
    </Tab>
  ),
};

export const MinSize = {
  render: () => (
    <Tab mxw-300 mxh-300>
      <div
        style={{
          width: "400px",
          height: "200px",
          color: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Min size is 300px
      </div>
    </Tab>
  ),
};
