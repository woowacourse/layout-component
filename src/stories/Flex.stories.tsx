// Button.stories.ts|tsx

import type { Meta } from "@storybook/react";
import React from "react";

import Flex from "../layout/Flex";

const meta: Meta<typeof Flex> = {
  component: Flex,
};

export default meta;
export const Primary = {
  render: () => (
    <Flex
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        width: "300px",
        height: "200px",
      }}
    >
      <div style={{ backgroundColor: "gray" }}>First</div>
      <div style={{ backgroundColor: "gray" }}>Second</div>
    </Flex>
  ),
};

export const Justify = {
  render: () => (
    <Flex
      jc-center
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        width: "300px",
        height: "200px",
      }}
    >
      <div style={{ backgroundColor: "gray" }}>First</div>
      <div style={{ backgroundColor: "gray" }}>Second</div>
    </Flex>
  ),
};

export const Align = {
  render: () => (
    <Flex
      ai-center
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        width: "300px",
        height: "200px",
      }}
    >
      <div style={{ backgroundColor: "gray" }}>First</div>
      <div style={{ backgroundColor: "gray" }}>Second</div>
    </Flex>
  ),
};
