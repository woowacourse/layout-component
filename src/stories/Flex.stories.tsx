import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "../lib";
import React from "react";

const meta: Meta<typeof Flex> = {
  title: "Flex",
  component: Flex,
};

export default meta;

type Story = StoryObj<typeof Flex>;

const children = Array.from({ length: 8 }, (_, index) => (
  <div style={{ background: "#f2f2f2", width: "100%", textAlign: "center" }}>
    {index}
  </div>
));

export const Default: Story = {
  args: {
    children,
  },
};

export const ConfigDirection: Story = {
  args: {
    direction: "column",
    children,
  },
};

export const ConfigGap: Story = {
  args: {
    gap: 8,
    children,
  },
};
