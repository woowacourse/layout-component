import type {Meta} from "@storybook/react";
import Container from "./Grid.tsx";
import Grid, {GridProps} from "./Grid.tsx";

const meta = {
  title: "Components/Grid",
  component: Container,
  tags: ["autodocs"],
  args: {
    rows: 3,
    columns: 3,
    gap: 3,
  },
  argTypes: {
    rows: {
      control: {
        type: "range",
        min: 1,
        max: 10,
      },
      description: "행 수",
    },
    columns: {
      control: {
        type: "range",
        min: 1,
        max: 10,
      },
      description: "열 수",
    },
    gap: {
      control: {
        type: "range",
        min: 1,
        max: 10,

      },
      description: "컴포넌트 사이의 간격",
    }
  },
} satisfies Meta<typeof Grid>;

export default meta;

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate nunc eu tempor tempor. Maecenas ipsum nisi, placerat sit amet arcu eu, egestas luctus orci. Etiam sed ante eu metus aliquet dapibus. Nullam eget dolor diam. Praesent et lobortis massa. Proin ornare, risus quis pretium vulputate, lacus lacus vehicula ex, eleifend vestibulum sapien augue et quam. Nulla id augue felis. Quisque vitae elit felis. Vestibulum vitae rhoncus elit. Duis imperdiet tortor vitae tellus vulputate, et sagittis est ullamcorper. Fusce dignissim ultricies tristique. Nullam congue mi ut venenatis pellentesque. Proin egestas sodales volutpat.`;

const LoremIpsumComponent = () => {
  return (
    <div style={{background: "lightblue"}}>
      <p>{loremIpsum}</p>
    </div>
  );
};


export const Default = (args: GridProps) => (
  <div style={{background: 'yellow'}}>
    <Container {...args}>
      {
        Array.from({length: 30}, (_, i) => i).map((i) => (
          <LoremIpsumComponent key={i}/>
        ))
      }
    </Container>
  </div>
);

