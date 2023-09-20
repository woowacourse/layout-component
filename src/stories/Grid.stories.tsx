import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "../lib";
import React from "react";

const meta: Meta<typeof Grid> = {
  title: "Grid",
  component: Grid,
};

export default meta;

type Story = StoryObj<typeof Grid>;

const children = Array.from({ length: 20 }, (_, index) => (
  <div style={{ background: "#f2f2f2", width: "100%", textAlign: "center" }}>
    {index}
  </div>
));

export const Default: Story = {
  args: {
    rows: 4,
    columns: 4,
    gap: 4,
    children,
  },
};

export const ConfigGap: Story = {
  args: {
    rows: 4,
    columns: 4,
    gap: { row: 4, column: 12 },
    children,
  },
};
