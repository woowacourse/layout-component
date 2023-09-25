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
        type: { summary: "number" },
      },
    },
    columns: {
      control: { type: "text" },
      description: "columns",
      table: {
        type: { summary: "number" },
      },
    },
    gap: {
      control: { type: "text" },
      description: "gap",
      table: {
        type: { summary: "number" },
      },
    },
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof Grid>;

export const GridDefault: Story = {
  args: {
    backgroundColor: "red",
    width: "50vw",
    height: "50vh",
    children: [
      <div>item1</div>,
      <div>item2</div>,
      <div>item3</div>,
      <div>item4</div>,
    ],
  },
  decorators: [(Story) => <Story />],
};
