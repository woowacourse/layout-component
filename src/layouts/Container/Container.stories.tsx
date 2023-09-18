import type {Meta} from "@storybook/react";
import Container, {ContainerProps} from "./Container.tsx";
import {SizeType} from "../../types";
import {Fragment} from "react";

const meta = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
  args: {
    maxWidth: "md",
    minWidth: "md",
  },
  argTypes: {
    maxWidth: {
      description: "최대 가로 너비를 정합니다. 사이즈로는 sm, md, lg, xl, xxl을 사용할 수 있습니다. 숫자로 값을 직접 입력할 수도 있습니다. 이 경우에는 px 단위로 적용됩니다.",
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl", "xxl"],
      }
    },
    minWidth: {
      description: "최소 가로 너비를 정합니다. 사이즈로는 sm, md, lg, xl, xxl을 사용할 수 있습니다. 숫자로 값을 직접 입력할 수도 있습니다. 이 경우에는 px 단위로 적용됩니다.",
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl", "xxl"],
      }
    }
  },
} satisfies Meta<typeof Container>;

export default meta;

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate nunc eu tempor tempor. Maecenas ipsum nisi, placerat sit amet arcu eu, egestas luctus orci. Etiam sed ante eu metus aliquet dapibus. Nullam eget dolor diam. Praesent et lobortis massa. Proin ornare, risus quis pretium vulputate, lacus lacus vehicula ex, eleifend vestibulum sapien augue et quam. Nulla id augue felis. Quisque vitae elit felis. Vestibulum vitae rhoncus elit. Duis imperdiet tortor vitae tellus vulputate, et sagittis est ullamcorper. Fusce dignissim ultricies tristique. Nullam congue mi ut venenatis pellentesque. Proin egestas sodales volutpat.

Aliquam lorem justo, consequat a neque et, ornare mollis augue. Mauris tincidunt lorem ante, auctor tincidunt sem porta vel. Mauris id lectus lectus. Maecenas tempus feugiat purus, non auctor felis malesuada ut. Sed ultricies dolor sit amet justo sodales ornare. Etiam tortor massa, vulputate ut nibh ut, accumsan condimentum nisl. Quisque quis mollis quam, eu lobortis dolor.

Nam tempor condimentum orci, non feugiat nisl congue in. Nam vitae ultricies mauris. Suspendisse in malesuada ante. Maecenas hendrerit risus vitae elit tincidunt vehicula. Nullam ligula arcu, porta ut odio vitae, cursus ultrices tellus. Etiam at mi a massa blandit pretium. Suspendisse ornare libero augue, non luctus mi varius pharetra. Sed vitae elit eget risus aliquet pharetra tempor sit amet est. Suspendisse et ante ex. Vestibulum vehicula commodo magna eget vehicula. Nullam molestie blandit quam. Mauris laoreet nisi sed ante imperdiet, ut consectetur augue commodo.

Morbi at orci mattis, consectetur enim id, pulvinar enim. Curabitur aliquam, erat sed varius consectetur, odio ligula aliquet elit, nec volutpat quam magna sed nisi. Donec ornare, metus quis eleifend congue, eros mi posuere quam, vel finibus elit ex at libero. Aenean ut sollicitudin lacus, a pharetra felis. Sed eget nibh feugiat, rhoncus metus vel, ultricies justo. Quisque molestie pellentesque urna, nec pellentesque turpis lacinia vitae. Sed at massa non leo vestibulum aliquet. Integer facilisis semper risus. Sed euismod quis eros vitae venenatis. Aenean vitae faucibus tortor, eu ultricies augue. Aliquam quis felis eget justo pulvinar gravida dictum sed erat. Praesent dignissim vehicula scelerisque. Nullam sed risus nunc. Nullam varius tortor nec ultrices blandit. Pellentesque leo mi, eleifend suscipit leo nec, sodales finibus elit.`;

const LoremIpsumComponent = () => {
  return (
    <div style={{background: "lightblue"}}>
      <h1>Lorem Ipsum</h1>
      <p>{loremIpsum}</p>
    </div>
  );
};

const sizes: SizeType[] = ["sm", "md", "lg", "xl", "xxl"];

export const Default = (args: ContainerProps) => (
  <>
    <Container {...args}>
      <LoremIpsumComponent/>
    </Container>
  </>
);

export const MaxWidth = () => (
  <>
    {sizes.map((size) => (
      <Fragment key={size}>
        <div>{size}</div>
        <Container maxWidth={size}>
          <LoremIpsumComponent/>
        </Container>
      </Fragment>
    ))}
  </>
);

export const MinWidth = () => (
  <>
    {sizes.map((size) => (
      <Fragment key={size}>
        <div>{size}</div>
        <Container minWidth={size}>
          <LoremIpsumComponent/>
        </Container>
      </Fragment>
    ))}
  </>
);
