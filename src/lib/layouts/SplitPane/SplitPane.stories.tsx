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
      },
      description: "SplitPane의 기본 사이즈를 설정합니다.",
    },
    minSize: {
      control: {
        type: "text",
      },
      description: "SplitPane 좌측 영역의 최소 사이즈를 설정합니다."
    },
    maxSize: {
      control: {
        type: "text",
      },
      description: "SplitPane 좌측 영역의 최대 사이즈를 설정합니다."
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

export const WrongChildren = (args: SplitPaneProps) => (
  <SplitPane {...args}>
    <div>
      {loremIpsum}
    </div>
    <div>
      {loremIpsum}
    </div>
    <div>
      {loremIpsum}
    </div>
  </SplitPane>
);

export const Duplicated = (args: SplitPaneProps) => (
  <SplitPane {...args}>
    <div>
      {loremIpsum}
    </div>
    <SplitPane {...args}>
      <div>
        {loremIpsum}
      </div>
      <div>
        {loremIpsum}
      </div>
    </SplitPane>
  </SplitPane>
);

export const NoArgs = () => (
  <SplitPane defaultSize="20%">
    <div>
      {loremIpsum}
    </div>
    <div>
      {loremIpsum}
    </div>
  </SplitPane>
);

export const WrongArgs = () => (
  <SplitPane defaultSize="20%" minSize="10%" maxSize="110%">
    <div>
      {loremIpsum}
    </div>
    <div>
      {loremIpsum}
    </div>
  </SplitPane>
);

export const WrongArgs2 = () => (
  <SplitPane defaultSize="20%" minSize="10%" maxSize="10%">
    <div>
      {loremIpsum}
    </div>
    <div>
      {loremIpsum}
    </div>
  </SplitPane>
);

export const WrongArgs3 = () => (
  <SplitPane defaultSize="20" minSize="10%" maxSize="90%">
    <div>
      {loremIpsum}
    </div>
    <div>
      {loremIpsum}
    </div>
  </SplitPane>
);
