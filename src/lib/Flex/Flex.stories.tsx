import type { Meta, StoryObj } from '@storybook/react';
import Flex from './Flex';

type Story = StoryObj<typeof Flex>;

const meta: Meta<typeof Flex> = {
  title: 'LAYOUT/Flex',
  component: Flex,
  argTypes: {
    direction: {
      control: { type: 'select' },
    },
  },
};

export default meta;

const customFlexItemStyle = {
  background: 'rgba(245, 245, 245)',
  padding: '10px',
  borderRadius: '5px',
};

export const DefaultFlex: Story = {
  render: () => {
    return (
      <Flex gap="10px" direction="column">
        <Flex.Item style={customFlexItemStyle}>Item1</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item2</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item3</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item4</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item5</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item6</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item7</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item8</Flex.Item>
      </Flex>
    );
  },
};

export const ColumnDirectionFlex: Story = {
  render: () => {
    return (
      <Flex direction="column" gap="10px">
        <Flex.Item style={customFlexItemStyle}>Item1</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item2</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item3</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item4</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item5</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item6</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item7</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item8</Flex.Item>
      </Flex>
    );
  },
};

export const JustifySpaceAroundFlex: Story = {
  render: () => {
    return (
      <Flex gap="10px" justify="space-around">
        <Flex.Item style={customFlexItemStyle}>Item1</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item2</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item3</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item4</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item5</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item6</Flex.Item>
      </Flex>
    );
  },
};

export const JustifySpaceBetweenFlex: Story = {
  render: () => {
    return (
      <Flex gap="10px" justify="space-between">
        <Flex.Item style={customFlexItemStyle}>Item1</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item2</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item3</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item4</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item5</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item6</Flex.Item>
      </Flex>
    );
  },
};

export const NoWarpFlex: Story = {
  render: () => {
    return (
      <Flex gap="10px">
        {Array.from({ length: 32 }).map((_, index) => (
          <Flex.Item key={index} style={customFlexItemStyle}>
            {`Item${index}`}
          </Flex.Item>
        ))}
      </Flex>
    );
  },
};

export const WarpFlex: Story = {
  render: () => {
    return (
      <Flex gap="10px" wrap="wrap">
        {Array.from({ length: 32 }).map((_, index) => (
          <Flex.Item key={index} style={customFlexItemStyle}>
            {`Item${index}`}
          </Flex.Item>
        ))}
      </Flex>
    );
  },
};

export const AlginSelfEndFlex: Story = {
  render: () => {
    return (
      <Flex gap="10px" justify="space-between" direction="column">
        <Flex.Item style={customFlexItemStyle} align="flex-start">
          Item1 - align flex-start
        </Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item2</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item3</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item4</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item5</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item6</Flex.Item>
      </Flex>
    );
  },
};

export const GenerateErrorFlexItem: Story = {
  render: () => {
    return (
      <Flex gap="10px">
        <Flex.Item style={customFlexItemStyle}>Item1</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item2</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item3</Flex.Item>
        <div style={customFlexItemStyle}>Item4 - error</div>
        <Flex.Item style={customFlexItemStyle}>Item5</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item6</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item7</Flex.Item>
        <div style={customFlexItemStyle}>Item8 - error</div>
      </Flex>
    );
  },
};
