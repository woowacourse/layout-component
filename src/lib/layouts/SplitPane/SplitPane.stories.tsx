import type {Meta} from "@storybook/react";
import SplitPane from "./index.ts";
import {SplitPaneProps} from "./SplitPane.tsx";

const meta = {
  title: "Components/SplitPane",
  component: SplitPane,
  tags: ["autodocs"],
  args: {
    defaultSize: "20%",
    minSize: "10%",
    maxSize: "90%",
  },
  argTypes: {
    defaultSize: {
      control: {
        type: "text",
      }
    },
    minSize: {
      control: {
        type: "text",
      }
    },
    maxSize: {
      control: {
        type: "text",
      }
    }
  },
} satisfies Meta<typeof SplitPane>;

export default meta;


export const Default = (args: SplitPaneProps) => (
  <SplitPane {...args}>
    <div style={{backgroundColor: 'yellow', height: '100px'}}/>
    <div style={{backgroundColor: 'yellowgreen', height: '100px'}}/>
  </SplitPane>
);
