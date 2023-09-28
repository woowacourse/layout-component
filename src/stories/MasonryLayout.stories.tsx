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

const childrenRow: React.ReactElement[] = Array.from(
  { length: 100 },
  (_, index) => (
    <div
      key={index}
      style={{
        background: `#${getRandomNumberInRange(100000, 999999)}`,
        width: `${getRandomNumberInRange(100, 400)}px`,
        height: "30vh",
      }}
    />
  )
);

export const Default: Story = {
  args: {
    children: childrenDefault,
    direction: "column",
    gap: 4,
    lane: 4,
  },
};

export const ConfigGap: Story = {
  args: {
    children: childrenDefault,
    direction: "column",
    gap: { row: 8, column: 20 },
    lane: 3,
  },
};

export const ConfigRow: Story = {
  args: {
    children: childrenRow,
    direction: "row",
    gap: 8,
    lane: 3,
  },
};
