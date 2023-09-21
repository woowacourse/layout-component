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

const responsiveStyle = {
  ...customFlexItemStyle,
  width: '100%',
};

/**
 * 반응형이 적용된 Flex Layout 입니다.
 * 데스크탑 환경: direction = row
 * 테블릿 환경: direction = row
 * 모바일 환경: direction = column
 */
export const ResponsiveFlex1: Story = {
  render: () => {
    return (
      <Flex
        gap="10px"
        direction={{ desktop: 'row', tablet: 'row', mobile: 'column' }}
      >
        <Flex.Item style={responsiveStyle}>Item1</Flex.Item>
        <Flex.Item style={responsiveStyle}>Item2</Flex.Item>
        <Flex.Item style={responsiveStyle}>Item3</Flex.Item>
        <Flex.Item style={responsiveStyle}>Item4</Flex.Item>
        <Flex.Item style={responsiveStyle}>Item5</Flex.Item>
        <Flex.Item style={responsiveStyle}>Item6</Flex.Item>
        <Flex.Item style={responsiveStyle}>Item7</Flex.Item>
        <Flex.Item style={responsiveStyle}>Item8</Flex.Item>
      </Flex>
    );
  },
};

/**
 * 반응형이 적용된 Flex Layout 입니다.
 * 기기에 따라 자식의 align 정렬이 바뀝니다.
 */
export const ResponsiveFlex2: Story = {
  render: () => {
    return (
      <Flex gap="10px" direction="column">
        <Flex.Item
          align={{
            desktop: 'stretch',
            tablet: 'flex-end',
            mobile: 'flex-start',
          }}
          style={customFlexItemStyle}
        >
          Item1
        </Flex.Item>
        <Flex.Item
          align={{
            desktop: 'stretch',
            tablet: 'flex-end',
            mobile: 'flex-start',
          }}
          style={customFlexItemStyle}
        >
          Item2
        </Flex.Item>
        <Flex.Item
          align={{
            desktop: 'stretch',
            tablet: 'flex-end',
            mobile: 'flex-start',
          }}
          style={customFlexItemStyle}
        >
          Item3
        </Flex.Item>
        <Flex.Item
          align={{
            desktop: 'stretch',
            tablet: 'flex-end',
            mobile: 'flex-start',
          }}
          style={customFlexItemStyle}
        >
          Item4
        </Flex.Item>
        <Flex.Item
          align={{
            desktop: 'stretch',
            tablet: 'flex-end',
            mobile: 'flex-start',
          }}
          style={customFlexItemStyle}
        >
          Item5
        </Flex.Item>
        <Flex.Item
          align={{
            desktop: 'stretch',
            tablet: 'flex-end',
            mobile: 'flex-start',
          }}
          style={customFlexItemStyle}
        >
          Item6
        </Flex.Item>
        <Flex.Item
          align={{
            desktop: 'stretch',
            tablet: 'flex-end',
            mobile: 'flex-start',
          }}
          style={customFlexItemStyle}
        >
          Item7
        </Flex.Item>
        <Flex.Item
          align={{
            desktop: 'stretch',
            tablet: 'flex-end',
            mobile: 'flex-start',
          }}
          style={customFlexItemStyle}
        >
          Item8
        </Flex.Item>
      </Flex>
    );
  },
};
