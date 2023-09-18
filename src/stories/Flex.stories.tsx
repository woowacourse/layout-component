import type { Meta, StoryObj } from "@storybook/react";
import Flex from "~/components/Flex";

const meta = {
  title: "Layout/Flex",
  component: Flex,
  parameters: {
    docs: {
      description: {
        component:
          "Flexbox를 사용하여 자식 컴포넌트들을 유연하게 배열하는 컴포넌트",
      },
    },
  },
  argTypes: {
    flexDirection: {
      control: "select",
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    flexWrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
    },
    justifyContent: {
      control: "select",
      options: [
        "start",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    alignItems: {
      control: "select",
      options: ["stretch", "center", "start", "end"],
    },
    alignContent: {
      control: "select",
      options: ["start", "center", "space-between", "space-around"],
    },
    alignSelf: {
      control: "select",
      options: ["stretch", "center", "start", "end"],
    },
    order: { control: { type: "number" } },
    flexGrow: { control: { type: "number" } },
    flexShrink: { control: { type: "number" } },
    style: {
      control: { type: "object" },
      description: "추가적인 스타일을 정의하는 방법",
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "start",
    alignItems: "stretch",
    alignContent: "start",
    alignSelf: "stretch",
    order: 0,
    flexGrow: 0,
    flexShrink: 0,
    children: (
      <>
        <div style={{ border: "1px solid black" }}>Item 1</div>
        <div style={{ border: "1px solid black" }}>Item 2</div>
        <div style={{ border: "1px solid black" }}>Item 3</div>
        <div style={{ border: "1px solid black" }}>Item 4</div>
        <div style={{ border: "1px solid black" }}>Item 5</div>
        <div style={{ border: "1px solid black" }}>Item 6</div>
      </>
    ),
    style: { maxWidth: "500px", height: "100px" },
  },
};
