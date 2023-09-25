import { Meta, StoryObj } from "@storybook/react";
import Tab from "./Tab";

const meta = {
  component: Tab,
  title: "Tab",
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
    children: (
      <>
        <div style={{ width: '100%', height: '100px', background: "red" }} />
        <div style={{ width: '100%', height: '100px', background: "orange" }} />
        <div style={{ width: '100%', height: '100px', background: "yellow" }} />
        <div style={{ width: '100%', height: '100px', background: "green" }} />
        <div style={{ width: '100%', height: '100px', background: "blue" }} />
        <div style={{ width: '100%', height: '100px', background: "purple" }} />
      </>
    ),
  },
};
