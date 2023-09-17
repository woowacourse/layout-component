import type { Meta, StoryObj } from '@storybook/react';

import Flex from './Flex';
import { css, styled } from 'styled-components';

const meta = {
  title: 'Components/Flex',
  component: Flex,
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
          width: '100%',
          height: '100%',
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
    display: 'flex',
    direction: 'row',
    justify: 'flex-start',
    align: 'stretch',
    gap: '2rem',
    wrap: 'nowrap',
  },
  argTypes: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: {
    display: 'flex',
    align: 'center',
    css: css`
      height: 5rem;
      padding: 1rem;
      margin-bottom: 2rem;

      background-color: white;
      border: 1px solid #636363;
      border-radius: 4px;
    `,
  },

  render: (args) => {
    return (
      <>
        <h4>display: {args.display}</h4>
        <FlexWrapper>
          <Flex {...args} display={args.display}>
            I'm a flexbox container that uses {args.display}!
          </Flex>
        </FlexWrapper>
      </>
    );
  },
};

export const FlexDirection: Story = {
  args: {
    direction: 'row',
  },
  render: (args) => {
    return (
      <>
        <h4>flex-direction: {args.direction}</h4>
        <FlexWrapper>
          <Flex {...args} direction={args.direction}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Flex>
        </FlexWrapper>
      </>
    );
  },
};

export const FlexWrap: Story = {
  args: {
    wrap: 'nowrap',
    css: css`
      background-color: #fff;
      padding: 2rem;
      font-size: 1.4rem;
    `,
  },
  render: (args) => {
    return (
      <>
        <h4>flex-wrap: {args.wrap}</h4>
        <FlexWrapper width='40rem'>
          <Flex {...args} wrap={args.wrap}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
            <Item>Item 4</Item>
            <Item>Item 5</Item>
            <Item>Item 6</Item>
            <Item>Item 7</Item>
            <Item>Item 8</Item>
            <Item>Item 9</Item>
            <Item>Item 10</Item>
          </Flex>
        </FlexWrapper>
      </>
    );
  },
};

export const JustifyContent: Story = {
  args: {
    justify: 'flex-start',
  },
  render: (args) => {
    return (
      <>
        <h4>justify-content: {args.justify}</h4>
        <FlexWrapper>
          <Flex {...args} justify={args.justify}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Flex>
        </FlexWrapper>
      </>
    );
  },
};

export const AlignItems: Story = {
  args: {
    align: 'flex-start',
    css: css`
      height: 100%;
    `,
  },
  render: (args) => {
    return (
      <>
        <h4>align-items: {args.align}</h4>
        <FlexWrapper height='16rem'>
          <Flex {...args} align={args.align}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Flex>
        </FlexWrapper>
      </>
    );
  },
};

const FlexWrapper = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => (width ? width : '80rem')};
  height: ${({ height }) => (height ? height : 'auto')};
  background-color: #fff;

  padding: 2rem;
  border-radius: 4px;

  margin-bottom: 2rem;
`;

const Item = styled.div<{ minHeight?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 10rem;
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '5rem')};

  background-color: #fbfcff;

  border: 1px solid #636363;
  border-radius: 4px;
`;
