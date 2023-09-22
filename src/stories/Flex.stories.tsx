import type { Meta, StoryObj } from "@storybook/react";
import Flex from "../components/Flex";

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
      description: " Flex 컨테이너에 Flex 항목이 배치되는 방식",
      table: {
        defaultValue: { summary: "row" },
      },
    },
    flexWrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
      description:
        " Flex 항목을 한 줄로 강제할지 아니면 여러 줄로 줄 바꿈할 수 있는지를 설정",
      table: {
        defaultValue: { summary: "nowrap" },
      },
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
      description: "Flex 항목을 어떻게 정렬할 지 설정",
      table: {
        defaultValue: { summary: "start" },
      },
    },
    alignItems: {
      control: "select",
      options: ["stretch", "center", "start", "end"],
      description:
        "lex 항목의 하위 항목에 대해 축의 수직 방향을 기준으로 어떻게 정렬할 지 설정",
      table: {
        defaultValue: { summary: "stretch" },
      },
    },
    alignContent: {
      control: "select",
      options: ["start", "center", "space-between", "space-around"],
      description:
        "Flex 항목의 하위 항목에 대해 수직축의 라인을 기준으로 (두 줄 이상 일 때만) 어떻게 정렬이 정렬할 지 설정",
      table: {
        defaultValue: { summary: "start" },
      },
    },
    alignSelf: {
      control: "select",
      options: ["stretch", "center", "start", "end"],
      description: "Flex 항목에 대해 어떻게 정렬할지 설정",
      table: {
        defaultValue: { summary: "stretch" },
      },
    },
    order: {
      control: { type: "number" },
      description: "Flex 컨테이너에 Flex 항목이 배치되는 순서를 설정",
    },
    flexGrow: {
      control: { type: "number" },
      description:
        " Flex 컨테이너에 기본 크기에 할당되어야 하는 Flex 컨테이너의 남은 공간을 설정",
    },
    flexShrink: {
      control: { type: "number" },
      description: "Flex 항목의 플렉스 축소 요소를 설정",
    },
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
