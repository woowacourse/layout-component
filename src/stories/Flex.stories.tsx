import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "../lib";

type Story = StoryObj<typeof Flex>;

const meta: Meta<typeof Flex> = {
  title: "LAYOUT/Flex",
  tags: ["autodocs"],
  component: Flex,
};

export default meta;

export const Default: Story = {
  args: {
    direction: "row",
    justify: "space-between",
    align: "center",
    gap: "10px",
    children: (
      <>
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
        <div>Item4</div>
      </>
    ),
  },
  argTypes: {
    direction: {
      description: "요소의 방향을 지정합니다.",
    },
    justify: {
      description: "요소의 가로축 배치 속성을 지정합니다.",
    },
    align: {
      description: "요소의 세로축 배치 속성을 지정합니다.",
    },
    gap: {
      description: "요소 사이의 간격을 지정합니다. px 단위로 설정됩니다.",
    },
    wrap: {
      description: "요소간 줄바꿈 속성을 지정합니다.",
    },
  },
};
