import type { Meta, StoryObj } from "@storybook/react";
import Container from "~/components/Container";

const meta = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxWidth: 700,
    height: "100vh",
    style: {
      border: "1px solid black",
    },
  },
};
