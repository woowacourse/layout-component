// Button.stories.ts|tsx

import type { Meta } from "@storybook/react";
import React from "react";

import Grid from "../layout/Grid";

const meta: Meta<typeof Grid> = {
  component: Grid,
};

export default meta;
export const Primary = {
  render: () => (
    <Grid
      gtc-1fr_1fr_1fr
      gtr-1fr_1fr_1fr
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        width: "300px",
        height: "200px",
      }}
    >
      <div style={{ backgroundColor: "gray" }}>1</div>
      <div style={{ backgroundColor: "gray" }}>2</div>
      <div style={{ backgroundColor: "gray" }}>3</div>
      <div style={{ backgroundColor: "gray" }}>4</div>
      <div style={{ backgroundColor: "gray" }}>5</div>
      <div style={{ backgroundColor: "gray" }}>6</div>
    </Grid>
  ),
};

export const Gap = {
  render: () => (
    <Grid
      gtc-1fr_1fr_1fr
      gtr-1fr_1fr_1fr
      rg-10px
      cg-10px
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        width: "300px",
        height: "200px",
      }}
    >
      <div style={{ backgroundColor: "gray" }}>1</div>
      <div style={{ backgroundColor: "gray" }}>2</div>
      <div style={{ backgroundColor: "gray" }}>3</div>
      <div style={{ backgroundColor: "gray" }}>4</div>
      <div style={{ backgroundColor: "gray" }}>5</div>
      <div style={{ backgroundColor: "gray" }}>6</div>
    </Grid>
  ),
};
