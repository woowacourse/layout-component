import type { Meta, StoryObj } from "@storybook/react";
import Grid from "~/components/Grid";

const meta = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: 3,
    columns: 3,
    children: (
      <>
        <div style={{ border: "1px solid black" }}>Item 1</div>
        <div style={{ border: "1px solid black" }}>Item 2</div>
        <div style={{ border: "1px solid black" }}>Item 3</div>
        <div style={{ border: "1px solid black" }}>Item 4</div>
        <div style={{ border: "1px solid black" }}>Item 5</div>
        <div style={{ border: "1px solid black" }}>Item 6</div>
      </>
    ),
    style: { maxWidth: "500px", height: "100px" },
  },
};
