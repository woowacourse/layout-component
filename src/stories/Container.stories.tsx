// Button.stories.ts|tsx

import type { Meta } from "@storybook/react";
import React from "react";

import Container from "../layout/Container";

const meta: Meta<typeof Container> = {
  component: Container,
};

export default meta;
export const Primary = {
  render: () => (
    <Container
      w-300
      h-300
      style={{ backgroundColor: "#000000", color: "#ffffff" }}
    >
      <div>Hi~ Light!</div>
    </Container>
  ),
};

export const MaxSize = {
  render: () => (
    <Container
      mxw-300
      mxh-300
      style={{
        backgroundColor: "#000000",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "400px",
          color: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Max size is 300px
      </div>
    </Container>
  ),
};

export const MinSize = {
  render: () => (
    <Container
      mmw-300
      mnh-300
      style={{
        backgroundColor: "#000000",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "200px",
          color: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Min size is 300px
      </div>
    </Container>
  ),
};
