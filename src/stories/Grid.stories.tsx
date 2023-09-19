import type { Meta, StoryObj } from "@storybook/react";
import Grid from "../components/Grid";

const meta = {
  title: "Layout/Grid",
  component: Grid,
  parameters: {
    docs: {
      description: {
        component:
          "Grid를 사용하여 자식 컴포넌트들을 격자 형태로 배열하는 레이아웃 컴포넌트",
      },
    },
  },
  argTypes: {
    rows: { control: "text" },
    columns: { control: "text" },
    rowGap: { control: "text" },
    columnGap: { control: "text" },
    gap: { control: "text" },
    style: {
      control: { type: "object" },
      description: "추가적인 스타일을 정의하는 방법",
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: 3,
    columns: 3,
    gap: 10,
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
