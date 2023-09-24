import { Meta, StoryObj } from "@storybook/react";
import TabLayout from "./TabLayout";

const meta = {
  title: "TabLayout",
  component: TabLayout,
  parameters: {
    docs: {
      description: {
        component:
          "TabLayout 컴포넌트는 여러 탭 간에 콘텐츠를 전환하고 사용자에게 편리한 탭 인터페이스를 제공할 수 있습니다.",
      },
    },
  },
} satisfies Meta<typeof TabLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    tabs: ["Tab 1", "Tab 2", "Tab 3"],
    children: [
      <div key={1}>Content for Tab 1</div>,
      <div key={2}>Content for Tab 2</div>,
      <div key={3}>Content for Tab 3</div>,
    ],
  },
};
