import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Flex from "../Flex";

const meta: Meta<typeof Flex> = {
  component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Column: Story = {
  render: () => (
    <Flex direction="column" gap={10}>
      {new Array(5).fill(0).map((_) => {
        return (
          <div
            style={{
              backgroundColor: "royalblue",
              height: "100px",
            }}
          />
        );
      })}
    </Flex>
  ),
};

export const Rows: Story = {
  render: () => (
    <Flex direction="row" justify="flex-end" gap={10} flexWrap="wrap">
      {new Array(10).fill(0).map((_) => {
        return (
          <div
            style={{
              backgroundColor: "royalblue",
              height: "100px",
              width: "100px",
            }}
          />
        );
      })}
    </Flex>
  ),
};
