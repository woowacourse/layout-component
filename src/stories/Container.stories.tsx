import type { Meta, StoryObj } from "@storybook/react";
import Container from "../components/Container";

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
    maxWidth: {
      control: "text",
      description: "Container 컴포넌트의 최대 너비",
      table: {
        defaultValue: { summary: "100%" },
      },
    },
    minWidth: {
      control: "text",
      description: "Container 컴포넌트의 최소 너비",
    },
    width: {
      control: "text",
      description: "Container 컴포넌트의 너비",
    },
    maxHeight: {
      control: "text",
      table: {
        defaultValue: { summary: "100%" },
      },
      description: "Container 컴포넌트의 최대 높이",
    },
    minHeight: {
      control: "text",
      description: "Container 컴포넌트의 최소 높이",
    },
    height: {
      control: "text",
      description: "Container 컴포넌트의 높이",
    },
    margin: {
      control: "text",
      description: "Container 컴포넌트의 margin 크기",
    },
    marginTop: {
      control: "text",
      description: "Container 컴포넌트의 margin top 크기",
    },
    marginBottom: {
      control: "text",
      description: "Container 컴포넌트의 margin bottom 크기",
    },
    marginLeft: {
      control: "text",
      description: "Container 컴포넌트의 margin left 크기",
    },
    marginRight: {
      control: "text",
      description: "Container 컴포넌트의 margin right 크기",
    },
    padding: {
      control: "text",
      description: "Container 컴포넌트의 padding 크기",
    },
    paddingTop: {
      control: "text",
      description: "Container 컴포넌트의 padding top 크기",
    },
    paddingBottom: {
      control: "text",
      description: "Container 컴포넌트의 padding bottom 크기",
    },
    paddingLeft: {
      control: "text",
      description: "Container 컴포넌트의 padding left 크기",
    },
    paddingRight: {
      control: "text",
      description: "Container 컴포넌트의 padding right 크기",
    },
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
