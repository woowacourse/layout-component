import type { Meta, StoryObj } from "@storybook/react";

import Grid from "../Grid/Grid";

const meta = {
  title: "Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    row: {
      control: "number",
      description: "You can specify the number of rows in the grid.",
    },
    column: {
      control: "number",
      description: "You can specify the number of column in the grid.",
    },
    gap: {
      control: "number",
      description: "You can specify the spacing between grid child elements.",
    },
    css: {
      description: "You can directly specify CSS properties.",
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContainerLayout: Story = {
  args: {
    column: 3,
    row: 3,
    gap: 10,
    css: { backgroundColor: "#000" },
    children: Array.from({ length: 10 }).map((_, i) => (
      <div key={i} style={{ height: 50, backgroundColor: "#FAF1E4" }}>
        GridItem{i}
      </div>
    )),
  },
};
