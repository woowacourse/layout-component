import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Flex from "../lib/Flex";

const meta: Meta<typeof Flex> = {
  component: Flex,
  args: {
    direction: "row",
    justify: "center",
    align: "center",
    flexWrap: "wrap",
    gap: 1,
  },
  argTypes: {
    gap: {
      description: "간격 속성을 정합니다.",
      control: {
        type: "range",
        min: 0,
        max: 10,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  render: (args) => (
    <Flex {...args}>
      {new Array(10).fill(0).map((_, index) => {
        return (
          <div
            style={{
              backgroundColor: `#35${index}88${index}`,
              height: "55px",
              width: "35px",
              color: "white",
            }}
          >
            {index}
          </div>
        );
      })}
    </Flex>
  ),
};
