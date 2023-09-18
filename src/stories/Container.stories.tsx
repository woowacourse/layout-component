import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "../lib";

type Story = StoryObj<typeof Container>;

const meta: Meta<typeof Container> = {
  title: "LAYOUT/Container",
  component: Container,
};

export default meta;

export const Default: Story = {
  args: {
    minWidth: 200,
    maxWidth: 800,
    children: "Contens is here",
  },
};
