import Grid from "@components/Grid/Grid";
import { css } from "@emotion/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Grid",
  component: Grid,
  decorators: [
    (Story) => (
      <ul>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const backgroundStyle = css({
      backgroundColor: "#dfdfdf",
      width: "100%",
      // height: "1000px",
    });

    const boxStyle = css({
      width: "100px",
      height: "16px",
      backgroundColor: "#ffffff",
      border: "1px solid #000000",
    });

    return (
      <div>
        <h1>Example1 : rowGap - 20, columnGap - 40 && gridItems</h1>
        <Grid
          rows={3}
          columns={2}
          rowGap={20}
          columnGap={40}
          css={backgroundStyle}
        >
          <Grid.Item rows={1} css={boxStyle}>
            Box
          </Grid.Item>
          <Grid.Item rows={1} css={boxStyle}>
            Box
          </Grid.Item>
          <Grid.Item rows={1} css={boxStyle}>
            Box
          </Grid.Item>
          <Grid.Item rows={1} column={4} css={boxStyle}>
            Box2
          </Grid.Item>
          <Grid.Item rows={1} css={boxStyle}>
            Box
          </Grid.Item>
          <Grid.Item rows={2} css={boxStyle}>
            Box
          </Grid.Item>
          <Grid.Item rows={2} css={boxStyle}>
            Box
          </Grid.Item>
          <Grid.Item rows={2} css={boxStyle}>
            Box
          </Grid.Item>
          <Grid.Item rows={3} css={boxStyle}>
            Box
          </Grid.Item>
          <Grid.Item rows={4} css={boxStyle}>
            Box
          </Grid.Item>
        </Grid>
        <br />

        <h1>Playground</h1>
        <Grid
          templateAreas={args.templateAreas}
          templateRows={args.templateRows}
          templateColumns={args.templateColumns}
          rowGap={args.rowGap}
          columnGap={args.columnGap}
          gap={args.gap}
          css={backgroundStyle}
        >
          <Grid.Item
            rows={args.rows}
            columns={args.columns}
            area={args.area}
            css={boxStyle}
          >
            Box
          </Grid.Item>
          <Grid.Item
            rows={args.rows}
            columns={args.columns}
            area={args.area}
            css={boxStyle}
          >
            Box
          </Grid.Item>
          <Grid.Item rows={2} columns={1} css={boxStyle}>
            Box
          </Grid.Item>
          <Grid.Item rows={2} columns={1} css={boxStyle}>
            Box
          </Grid.Item>
          <Grid.Item rows={2} columns={1} css={boxStyle}>
            Box
          </Grid.Item>
          <Grid.Item rows={2} columns={1} css={boxStyle}>
            Box
          </Grid.Item>
          <Grid.Item rows={args.rows} columns={args.columns} css={boxStyle}>
            Box2
          </Grid.Item>
          <Grid.Item rows={2} columns={1} css={boxStyle}>
            Box
          </Grid.Item>
          <Grid.Item rows={2} columns={1} css={boxStyle}>
            Box
          </Grid.Item>
          <Grid.Item rows={2} columns={1} css={boxStyle}>
            Box
          </Grid.Item>
        </Grid>
      </div>
    );
  },
  argTypes: {
    templateAreas: {
      type: "string",
    },
    templateRows: {
      type: "string",
    },
    templateColumns: {
      type: "string",
    },
    rowGap: {
      type: "string",
      defaultValue: 0,
    },
    columnGap: {
      type: "string",
      defaultValue: 0,
    },
    gap: {
      type: "string",
      defaultValue: "auto",
    },

    rows: {
      type: "string",
    },
    columns: {
      type: "string",
      defaultValue: "auto",
    },
    area: {
      type: "string",
      defaultValue: "auto",
    },
  },
};
