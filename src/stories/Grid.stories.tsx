import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Grid from "../lib/Grid";

const meta: Meta<typeof Grid> = {
  component: Grid,
  args: {
    rows: 5,
    columns: 2,
    gap: 1,
  },
  argTypes: {
    gap: {
      description: "간격 속성을 정합니다.",
      control: {
        type: "range",
        min: 0,
        max: 10,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: (args) => (
    <Grid {...args}>
      {new Array(10).fill(0).map((_, index) => {
        return (
          <div
            style={{
              backgroundColor: `#35${index}88${index}`,
              height: "50px",
              width: "100%",
              color: "white",
            }}
          >
            {index}
          </div>
        );
      })}
    </Grid>
  ),
};
