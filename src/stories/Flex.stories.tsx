import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "../lib";

type Story = StoryObj<typeof Flex>;

const meta: Meta<typeof Flex> = {
  title: "LAYOUT/Flex",
  component: Flex,
};

export default meta;

export const Default: Story = {
  args: {
    direction: "row",
    justify: "space-between",
    align: "center",
    gap: 10,
    children: (
      <>
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
        <div>Item4</div>
      </>
    ),
  },
};
