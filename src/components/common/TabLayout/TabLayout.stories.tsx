import { Meta, StoryObj } from "@storybook/react";
import TabLayout from "./TabLayout";

const meta = {
  title: "TabLayout Component",
  component: TabLayout,
  parameters: {
    docs: {
      description: {
        component:
          "TabLayout 컴포넌트는 사용자가 선택한 탭에 따라 특정 패널을 보여주는 컴포넌트입니다. (The TabLayout component is a component that displays a specific panel based on the tab selected by the user)",
      },
    },
  },
} satisfies Meta<typeof TabLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    tabs: ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5", "Tab 6"],
    children: [
      <div key={1}>Content 1</div>,
      <div key={2}>Content 2</div>,
      <div key={3}>Content 3</div>,
      <div key={4}>Content 4</div>,
      <div key={3}>Content 5</div>,
      <div key={3}>Content 6</div>,
    ],
  },

  argTypes: {
    tabs: {
      description: "각 탭의 레이블입니다.",
    },
  },
};
