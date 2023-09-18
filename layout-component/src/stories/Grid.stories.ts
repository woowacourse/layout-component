import { Meta, StoryObj } from "@storybook/react";
import { Grid } from "../lib/components/Grid";

const meta = {
  title: "Components/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    rows: {
      control: { type: "text" },
      description: "rows",
      table: {
        type: { summary: "string" },
      },
    },
    columns: {
      control: { type: "text" },
      description: "columns",
      table: {
        type: { summary: "string" },
      },
    },
    gap: {
      control: { type: "text" },
      description: "gap",
      table: {
        type: { summary: "string" },
      },
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: any = {
  args: {
    rows: 3,
    columns: 3,
    gap: 3,
  },
};
