import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "../lib";
import React from "react";

const meta: Meta<typeof Container> = {
  title: "Container",
  component: Container,
};

export default meta;

type Story = StoryObj<typeof Container>;

const childrenDefault = (
  <div style={{ background: "#f2f2f2", width: "100%", height: "100vh" }}>
    <div>컨테이너 영역입니다.</div>
    <div>default props가 적용되어 있습니다.</div>
  </div>
);

const childrenConfig = (
  <div style={{ background: "#f2f2f2", width: "100%", height: "100vh" }}>
    <div>컨테이너 영역입니다.</div>
    <div>
      minWidth: 300, maxWidth: 900, tag: 'main'이 props로 적용되어 있습니다.
    </div>
  </div>
);

export const Default: Story = {
  args: {
    children: childrenDefault,
  },
};

export const ConfigWidth: Story = {
  args: {
    minWidth: 300,
    maxWidth: 600,
    tag: "main",
    children: childrenConfig,
  },
};
