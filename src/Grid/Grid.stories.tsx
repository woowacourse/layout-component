import { Meta, StoryObj } from "@storybook/react";
import Grid from "./Grid";

const meta = {
  title: "Grid",
  component: Grid,
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: "repeat(3, 100px)",
    columns: "1fr 2fr",
    gap: "20px",
    style: { backgroundColor: "lightblue", padding: "20px" },
    children: (
      <>
        <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>
          Item 1
        </div>
        <div style={{ backgroundColor: "lightpink", padding: "10px" }}>
          Item 2
        </div>
        <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>
          Item 3
        </div>
        <div style={{ backgroundColor: "lightsalmon", padding: "10px" }}>
          Item 4
        </div>
      </>
    ),
  },
};
