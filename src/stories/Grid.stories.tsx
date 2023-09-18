import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "../lib";

type Story = StoryObj<typeof Grid>;

const meta: Meta<typeof Grid> = {
  title: "LAYOUT/Grid",
  tags: ["autodocs"],
  component: Grid,
};

export default meta;

export const Default: Story = {
  args: {
    rows: 2,
    columns: 3,
    gap: 10,
    children: (
      <>
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
        <div>Item4</div>
        <div>Item5</div>
        <div>Item6</div>
      </>
    ),
  },
  argTypes: {
    rows: {
      description: "격자의 행 수를 지정합니다.",
    },
    columns: {
      description: "격자의 열 수를 지정합니다.",
    },
    rowGap: {
      description: "행 사이의 간격을 지정합니다. px 단위로 설정됩니다.",
    },
    columnGap: {
      description: "열 사이의 간격을 지정합니다. px 단위로 설정됩니다.",
    },
    gap: {
      description: "행과 열 사이 간격을 지정합니다. px 단위로 설정됩니다.",
    },
  },
};
