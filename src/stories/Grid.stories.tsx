import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "../components/index";

const meta = {
  title: "common/grid",
  component: Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: Array.from({ length: 9 }).map((_, index) => <button>{index + 1}</button>),
    rows: 3,
    columns: 3,
    gap: "10px",
  },
};
