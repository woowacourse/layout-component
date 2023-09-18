import type { Meta, StoryObj } from "@storybook/react";
import Container from "~/components/Container";

const meta = {
  title: "Layout/Container",
  component: Container,
  parameters: {
    docs: {
      description: {
        component:
          "화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치하는 레이아웃 컴포넌트",
      },
    },
  },
  argTypes: {
    maxWidth: { control: "text" },
    minWidth: { control: "text" },
    width: { control: "text" },
    maxHeight: { control: "text" },
    minHeight: { control: "text" },
    height: { control: "text" },
    margin: { control: "text" },
    marginTop: { control: "text" },
    marginBottom: { control: "text" },
    marginLeft: { control: "text" },
    marginRight: { control: "text" },
    padding: { control: "text" },
    paddingTop: { control: "text" },
    paddingBottom: { control: "text" },
    paddingLeft: { control: "text" },
    paddingRight: { control: "text" },
    style: {
      control: { type: "object" },
      description: "추가적인 스타일을 정의하는 방법",
    },
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxWidth: "100%",
    minWidth: 100,
    width: 500,
    maxHeight: "100%",
    minHeight: 100,
    height: 500,
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    style: {
      border: "1px solid black",
    },
  },
};

export const DefaultWithChildren: Story = {
  args: {
    maxWidth: "100%",
    minWidth: 100,
    width: 500,
    maxHeight: "100%",
    minHeight: 100,
    height: 500,
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    children: (
      <div style={{ display: "flex", justifyContent: "center" }}>
        안녕하세요
      </div>
    ),
    style: {
      border: "1px solid black",
    },
  },
};
