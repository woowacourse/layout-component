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

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate nunc eu tempor tempor. Maecenas ipsum nisi, placerat sit amet arcu eu, egestas luctus orci. Etiam sed ante eu metus aliquet dapibus. Nullam eget dolor diam. Praesent et lobortis massa. Proin ornare, risus quis pretium vulputate, lacus lacus vehicula ex, eleifend vestibulum sapien augue et quam. Nulla id augue felis. Quisque vitae elit felis. Vestibulum vitae rhoncus elit. Duis imperdiet tortor vitae tellus vulputate, et sagittis est ullamcorper. Fusce dignissim ultricies tristique. Nullam congue mi ut venenatis pellentesque. Proin egestas sodales volutpat.`;

export const Default = (args: SplitPaneProps) => (
  <SplitPane {...args}>
    <div style={{backgroundColor: 'yellow', height: '100px'}}/>
    <div style={{backgroundColor: 'yellowgreen', height: '100px'}}/>
  </SplitPane>
);

export const Texts = (args: SplitPaneProps) => (
  <SplitPane {...args}>
    <div>
      {loremIpsum}
    </div>
    <div>
      {loremIpsum}
    </div>
  </SplitPane>
);
