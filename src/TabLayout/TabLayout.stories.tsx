import { Meta, StoryObj } from "@storybook/react";
import TabLayout from "./TabLayout";

const meta = {
  title: "TabLayout",
  component: TabLayout,
} satisfies Meta<typeof TabLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: ["Tab 1", "Tab 2", "Tab 3"],
    children: [
      <div key={1}>Content for Tab 1</div>,
      <div key={2}>Content for Tab 2</div>,
      <div key={3}>Content for Tab 3</div>,
    ],
  },
};
