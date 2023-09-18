import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "../lib";

type Story = StoryObj<typeof Grid>;

const meta: Meta<typeof Grid> = {
  title: "LAYOUT/Grid",
  component: Grid,
};

export default meta;

export const Default: Story = {
  args: {
    rows: 2,
    columns: 3,
    gap: 10,
    children: (
      <>
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
        <div>Item4</div>
        <div>Item5</div>
        <div>Item6</div>
      </>
    ),
  },
};
