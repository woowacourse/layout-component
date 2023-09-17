import { Meta, StoryObj } from "@storybook/react";
import { Grid } from "..";

const meta = {
  component: Grid,
  title: "Grid",
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: 3,
    columns: 2,
    gap: 20,
    style: {
      width: '300px',
      height: '200px',
    },
    children: (
      <>
        <div style={{ background: "red" }} />
        <div style={{ background: "orange" }} />
        <div style={{ background: "yellow" }} />
        <div style={{ background: "green" }} />
        <div style={{ background: "blue" }} />
        <div style={{ background: "purple" }} />
      </>
    ),
  },
};
