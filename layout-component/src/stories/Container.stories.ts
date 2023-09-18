import { Meta, StoryObj } from "@storybook/react";
import { Container } from "../lib/components/Container";

const meta = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
    display: {
      control: { type: "select" },
      options: ["flex", "block", "inline-block", "inline-flex"],
      description: "display",
      table: {
        type: { summary: "string" },
      },
    },
    padding: {
      control: { type: "text" },
      description: "padding",
      table: {
        type: { summary: "string" },
      },
    },
    width: {
      control: { type: "text" },
      description: "width",
      table: {
        type: { summary: "string | number" },
      },
    },
    height: {
      control: { type: "text" },
      description: "height",
      table: {
        type: { summary: "string | number" },
      },
    },
    maxWidth: {
      control: { type: "text" },
      description: "maxWidth",
      table: {
        type: { summary: "string | number" },
      },
    },
    maxHeight: {
      control: { type: "text" },
      description: "maxHeight",
      table: {
        type: { summary: "string | number" },
      },
    },
    minWidth: {
      control: { type: "text" },
      description: "minWidth",
      table: {
        type: { summary: "string | number" },
      },
    },
    minHeight: {
      control: { type: "text" },
      description: "minHeight",
      table: {
        type: { summary: "string | number" },
      },
    },
    overflow: {
      control: { type: "select" },
      options: ["visible", "hidden", "scroll", "auto"],
      description: "overflow",
      table: {
        type: { summary: "string" },
      },
    },
    backgroundColor: {
      control: { type: "color" },
      description: "배경색",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    width: 600,
    height: 400,
  },
};
