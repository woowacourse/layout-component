import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "../components/index";

const meta = {
  title: "common/flex",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: Array.from({ length: 9 }).map((_, index) => <button>{index + 1}</button>),
    direction: "column",
    gap: "10px",
  },
};
