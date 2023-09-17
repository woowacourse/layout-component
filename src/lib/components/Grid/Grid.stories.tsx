import type { Meta, StoryObj } from '@storybook/react';

import Grid from './Grid';
import { css, styled } from 'styled-components';

const meta = {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          color: '#636363',
          fontSize: '2rem',
          fontWeight: 'bold',
          backgroundColor: 'inherit',
          margin: '1rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  args: {
    css: css``,
  },
  argTypes: {},
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FlexibleGrid: Story = {
  args: {
    rows: 3,
    columns: 3,
    gap: '2rem',
    css: css`
      width: 100%;
      height: 100%;
      background-color: #fff;
    `,
  },

  render: (args) => {
    return (
      <>
        <h4>Flexible grids with the fr unit</h4>
        <GridWrapper height='80rem'>
          <Grid {...args}>
            <Item backgroundColor='#f6efff'>Item1</Item>
            <Item backgroundColor='#eee1ff'>Item2</Item>
            <Item backgroundColor='#e7d5ff'>Item3</Item>
            <Item backgroundColor='#def2ff'>Item4</Item>
            <Item backgroundColor='#c3e7ff'>Item5</Item>
            <Item backgroundColor='#b4e1ff'>Item6</Item>
            <Item backgroundColor='#fffdec'>Item7</Item>
          </Grid>
        </GridWrapper>
      </>
    );
  },
};

export const GridAutoRows: Story = {
  args: {
    columns: 3,
    autoRows: 'minmax(20rem, auto)',
    gap: '2rem',
    css: css`
      width: 100%;
      height: 100%;
      background-color: #fff;
    `,
  },

  render: (args) => {
    return (
      <>
        <h4>Positioning with grid-auto-rows</h4>
        <GridWrapper>
          <Grid {...args}>
            <Item backgroundColor='#f6efff'>Item1</Item>
            <Item backgroundColor='#eee1ff'>Item2</Item>
            <Item backgroundColor='#e7d5ff'>Item3</Item>
            <Item backgroundColor='#def2ff'>Item4</Item>
            <Item backgroundColor='#c3e7ff'>Item5</Item>
            <Item backgroundColor='#b4e1ff'>Item6</Item>
            <Item backgroundColor='#fffdec'>Item7</Item>
            <LongHeightItem>LongItem</LongHeightItem>
          </Grid>
        </GridWrapper>
      </>
    );
  },
};

export const GridAutoColumns: Story = {
  args: {
    rows: 3,
    autoColumns: 'minmax(1rem, auto)',
    gap: '2rem',
    css: css`
      width: 100%;
      height: 100%;
      background-color: #fff;
    `,
  },

  render: (args) => {
    return (
      <>
        <h4>Positioning with grid-auto-columns</h4>
        <GridWrapper height='80rem'>
          <Grid {...args}>
            <Item backgroundColor='#f6efff'>Item1</Item>
            <Item backgroundColor='#eee1ff'>Item2</Item>
            <Item backgroundColor='#e7d5ff'>Item3</Item>
            <Item backgroundColor='#def2ff'>Item4</Item>
            <Item backgroundColor='#c3e7ff'>Item5</Item>
            <Item backgroundColor='#b4e1ff'>Item6</Item>
            <Item backgroundColor='#fffdec'>Item7</Item>
          </Grid>
        </GridWrapper>
      </>
    );
  },
};

export const GridTemplateAreas: Story = {
  args: {
    columns: 3,
    gap: '2rem',
    areas: `"a b b" "a c d" "a c d"`,
    css: css`
      width: 100%;
      height: 100%;
      background-color: #fff;
    `,
  },

  render: (args) => {
    return (
      <>
        <h4>Positioning with grid-template-areas</h4>
        <GridWrapper height='80rem'>
          <Grid {...args}>
            <Item backgroundColor='#f6efff' area='a'>
              Item1
            </Item>
            <Item backgroundColor='#eee1ff' area='b'>
              Item2
            </Item>
            <Item backgroundColor='#e7d5ff' area='c'>
              Item3
            </Item>
            <Item backgroundColor='#def2ff' area='d'>
              Item4
            </Item>
          </Grid>
        </GridWrapper>
      </>
    );
  },
};

const GridWrapper = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => (width ? width : '80rem')};
  height: ${({ height }) => (height ? height : 'auto')};
  background-color: #fff;

  padding: 2rem;
  border-radius: 4px;

  margin-bottom: 2rem;
`;

const Item = styled.div<{
  minWidth?: string;
  minHeight?: string;
  backgroundColor?: string;
  area?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: ${({ minWidth }) => (minWidth ? minWidth : '5rem')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '5rem')};

  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '#fbfcff')};

  border: 1px solid #636363;
  border-radius: 4px;

  grid-area: ${({ area }) => (area ? area : '')};
`;

const LongHeightItem = styled.div<{ backgroundColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 30rem;

  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '#fbfcff')};

  border: 1px solid #636363;
  border-radius: 4px;
`;
