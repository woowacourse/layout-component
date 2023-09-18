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
    height: 300,
    style: {
      border: "1px solid black",
    },
  },
};

export const DefaultWithChildren: Story = {
  args: {
    maxWidth: 700,
    children: (
      <div style={{ display: "flex", justifyContent: "center" }}>
        안녕하세요
      </div>
    ),
    style: {
      border: "1px solid black",
    },
  },
};
