import { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import TabButton, { TabButtonProps } from "./TabButton";

const meta = {
  component: Tabs,
  title: "Tabs",
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ["red", "orange", "yellow", "green", "blue", "purple"].map(
      (color) => (
        <Tab
          key={color}
          button={color}
          style={{ width: "100%", height: "100px", background: color }}
        />
      )
    ),
  },
};

export const TabButtonsWithScroll: Story = {
  args: {
    children: Array(30)
      .fill(undefined)
      .map((_, index) => (
        <Tab
          button={`Tab ${index + 1}`}
          style={{
            width: "100%",
            height: "100px",
            background: `hsl(${index * 12}, 100%, 50%)`,
          }}
        />
      )),
  },
};

export const TabButtonsWithWrap: Story = {
  args: {
    wrap: true,
    children: Array(30)
      .fill(undefined)
      .map((_, index) => (
        <Tab
          key={index}
          button={`Tab ${index + 1}`}
          style={{
            width: "100%",
            height: "100px",
            background: `hsl(${index * 12}, 100%, 50%)`,
          }}
        />
      )),
  },
};

const CustomTabButton = (props: TabButtonProps<"button">) => (
  <TabButton
    as="button"
    startIcon="📌"
    style={{
      borderBottomWidth: '6px',
      ...(props.active ? { borderColor: "orange" } : { borderColor: "transparent" })
    }}
    {...props}
  />
);

export const CustomTabButtons: Story = {
  args: {
    children: ["red", "orange", "yellow", "green", "blue", "purple"].map(
      (color) => (
        <Tab
          key={color}
          button={
            <CustomTabButton>{color}</CustomTabButton>
          }
          style={{ width: "100%", height: "100px", background: color }}
        />
      )
    ),
  },
};
