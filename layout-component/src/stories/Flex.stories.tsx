import { Meta, StoryObj } from "@storybook/react";
import { Flex } from "../lib/components/Flex";

const meta = {
  title: "Components/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["row", "row-reverse", "column", "column-reverse"],
      description: "direction",
      table: {
        type: { summary: "string" },
      },
    },
    justify: {
      control: { type: "select" },
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      description: "justify",
      table: {
        type: { summary: "string" },
      },
    },
    align: {
      control: { type: "select" },
      options: ["flex-start", "flex-end", "center", "baseline", "stretch"],
      description: "align",
      table: {
        type: { summary: "string" },
      },
    },
    gap: {
      control: { type: "select" },
      description: "gap",
      table: {
        type: { summary: "string" },
      },
    },
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
  args: {
    backgroundColor: "blue",
    width: "50vw",
    height: "100vh",
    children: [<div>item1</div>, <div>items</div>],
  },
  decorators: [(Story) => <Story />],
};
