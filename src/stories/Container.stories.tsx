import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "../components/index";

const meta = {
  title: "common/container",
  component: Container,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: Array.from({ length: 9 }).map((_, index) => <button>{index + 1}</button>),
    minWidth: "100px",
    maxWidth: "200px",
  },
};
