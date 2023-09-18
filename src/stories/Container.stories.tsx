import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "../lib";

type Story = StoryObj<typeof Container>;

const meta: Meta<typeof Container> = {
  title: "LAYOUT/Container",
  tags: ["autodocs"],
  component: Container,
};

export default meta;

export const Default: Story = {
  args: {
    minWidth: 200,
    maxWidth: 800,
    children: "Contens is here",
  },
  argTypes: {
    minWidth: {
      description: "화면의 최소 너비를 정합니다. px 단위로 설정됩니다.",
    },
    maxWidth: {
      description: "화면의 최대 너비를 정합니다. px 단위로 설정됩니다.",
    },
  },
};
