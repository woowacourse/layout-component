import type { Meta, StoryObj } from "@storybook/react";

import Container from "../Container/Container";

const meta = {
  title: "Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
    maxWidth: {
      control: "number",
      description: "You can specify the maximum width of the container.",
    },
    minWidth: {
      control: "number",
      description: "You can specify the minimum width of the container.",
    },
    css: {
      description: "You can directly specify CSS properties",
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContainerLayout: Story = {
  args: {
    maxWidth: 1250,
    minWidth: 600,
    css: { backgroundColor: "#FAF1E4" },
    children: "This is the container",
  },
};
