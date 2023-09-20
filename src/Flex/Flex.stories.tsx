import { Meta, StoryObj } from "@storybook/react";
import Flex from "./Flex";

const meta = {
  title: "Flex",
  component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: "row",
    justify: "center",
    align: "center",
    gap: "10px",
    style: { backgroundColor: "lightblue", padding: "20px" },
    children: (
      <>
        <div style={{ flex: "1", border: "1px solid gray" }}>Item 1</div>
        <div style={{ flex: "2", border: "1px solid gray" }}>Item 2</div>
        <div style={{ flex: "1", border: "1px solid gray" }}>Item 3</div>
      </>
    ),
  },
};
