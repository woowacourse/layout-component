import React from "react";
import { MasonryLayout } from "../lib";
import type { Meta, StoryObj } from "@storybook/react";
import { getRandomNumberInRange } from "../lib/utils";

const meta: Meta<typeof MasonryLayout> = {
  title: "MasonryLayout",
  component: MasonryLayout,
};

export default meta;

type Story = StoryObj<typeof MasonryLayout>;

const childrenDefault: React.ReactElement[] = Array.from(
  { length: 100 },
  (_, index) => (
    <div
      key={index}
      style={{
        background: `#${getRandomNumberInRange(100000, 999999)}`,
        height: `${getRandomNumberInRange(100, 400)}px`,
      }}
    />
  )
);

export const Default: Story = {
  args: {
    children: childrenDefault,
    direction: "column",
    gap: 4,
    line: 4,
  },
};

export const ConfigGap: Story = {
  args: {
    children: childrenDefault,
    direction: "column",
    gap: { row: 8, column: 20 },
    line: 3,
  },
};
