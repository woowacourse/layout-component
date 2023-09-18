import type { Meta, StoryObj } from "@storybook/react";

import FlexBox from "../FlexBox/FlexBox";

const meta = {
  title: "FlexBox",
  component: FlexBox,
  tags: ["autodocs"],
  argTypes: {
    align: {
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
      ],
      control: { type: "radio" },
      defaultValue: 3,
      description:
        "You can specify the vertical alignment criteria for FlexBox.",
    },
    justify: {
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
      ],
      control: { type: "radio" },
      description:
        "You can specify the horizontal alignment criteria for FlexBox.",
    },
    direction: {
      options: ["row", "column", "row-reverse", "column-reverse"],
      control: { type: "radio" },
      description: "You can specify the alignment direction of FlexBox.",
    },
    gap: {
      control: "number",
      description:
        "You can specify the spacing between child elements in FlexBox.",
    },
    css: {
      description: "You can directly specify CSS properties.",
    },
  },
} satisfies Meta<typeof FlexBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContainerLayout: Story = {
  args: {
    direction: "row",
    align: "flex-start",
    justify: "flex-start",
    gap: 10,
    css: { backgroundColor: "#000", height: 600 },
    children: Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        style={{ height: 50, width: "fit-content", backgroundColor: "#FAF1E4" }}
      >
        FlexBoxItem{i}
      </div>
    )),
  },
};
