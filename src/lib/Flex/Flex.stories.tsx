import type { Meta, StoryObj } from '@storybook/react';
import Flex from './Flex';

type Story = StoryObj<typeof Flex>;

const customFlexItemStyle = {
  background: 'rgba(245, 245, 245)',
  padding: '10px',
  borderRadius: '5px',
};

const meta: Meta<typeof Flex> = {
  title: 'LAYOUT/Flex',
  component: Flex,
  args: {
    children: (
      <>
        <Flex.Item style={customFlexItemStyle}>Item1</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item2</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item3</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item4</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item5</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item6</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item7</Flex.Item>
        <Flex.Item style={customFlexItemStyle}>Item8</Flex.Item>
      </>
    ),
  },
  argTypes: {
    children: {
      description: 'Flex Layout의 자식 요소',
    },
    direction: {
      options: ['column', 'column-reverse', 'row', 'row-reverse'],
      control: {
        type: 'select',
      },
    },
    tag: {
      options: ['div', 'span', 'section', 'main'],
      control: {
        type: 'select',
      },
    },
    wrap: {
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      control: {
        type: 'select',
      },
    },
    justify: {
      options: [
        'space-around',
        'space-between',
        'space-evenly',
        'stretch',
        'center',
        'end',
        'flex-end',
        'flex-start',
        'start',
      ],
      control: {
        type: 'select',
      },
    },
    align: {
      options: [
        'center',
        'end',
        'flex-end',
        'flex-start',
        'self-end',
        'self-start',
        'start',
      ],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

export const DefaultFlex: Story = {
  args: {
    gap: '10px',
    direction: 'column',
  },
};

export const ColumnDirectionFlex: Story = {
  args: {
    gap: '10px',
    direction: 'column',
  },
};

export const JustifySpaceAroundFlex: Story = {
  args: {
    gap: '10px',
    justify: 'space-around',
  },
};

export const JustifySpaceBetweenFlex: Story = {
  args: {
    gap: '10px',
    justify: 'space-between',
  },
};

export const NoWarpFlex: Story = {
  args: {
    gap: '10px',
    children: (
      <>
        {Array.from({ length: 32 }).map((_, index) => (
          <Flex.Item key={index} style={customFlexItemStyle}>
            {`Item${index}`}
          </Flex.Item>
        ))}
      </>
    ),
  },
};

export const WarpFlex: Story = {
  args: {
    gap: '10px',
    wrap: 'wrap',
    children: (
      <>
        {Array.from({ length: 32 }).map((_, index) => (
          <Flex.Item key={index} style={customFlexItemStyle}>
            {`Item${index}`}
          </Flex.Item>
        ))}
      </>
    ),
  },
};

export const AlginSelfEndFlex: Story = {
  args: {
    gap: '10px',
    justify: 'space-between',
    direction: 'column',
    children: (
      <>
        {Array.from({ length: 6 }).map((_, index) => {
          if (index === 0) {
            return (
              <Flex.Item style={customFlexItemStyle} align="flex-start">
                Item1 - align flex-start
              </Flex.Item>
            );
          }

          return (
            <Flex.Item key={index} style={customFlexItemStyle}>
              {`Item${index}`}
            </Flex.Item>
          );
        })}
      </>
    ),
  },
};

export const GenerateErrorFlexItem: Story = {
  args: {
    gap: '10px',
    children: (
      <>
        {Array.from({ length: 8 }).map((_, index) => {
          if (index === 3 || index === 7) {
            return <div style={customFlexItemStyle}>Item{index} - error</div>;
          }

          return (
            <Flex.Item key={index} style={customFlexItemStyle}>
              {`Item${index}`}
            </Flex.Item>
          );
        })}
      </>
    ),
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
  args: {
    gap: '10px',
    direction: { desktop: 'row', tablet: 'row', mobile: 'column' },
    children: (
      <>
        {Array.from({ length: 8 }).map((_, index) => (
          <Flex.Item key={index} style={responsiveStyle}>
            {`Item${index}`}
          </Flex.Item>
        ))}
      </>
    ),
  },
};

/**
 * 반응형이 적용된 Flex Layout 입니다.
 * 기기에 따라 자식의 align 정렬이 바뀝니다.
 */
export const ResponsiveFlex2: Story = {
  args: {
    gap: '10px',
    direction: 'column',
    children: (
      <>
        {Array.from({ length: 8 }).map((_, index) => (
          <Flex.Item
            key={index}
            align={{
              desktop: 'stretch',
              tablet: 'flex-end',
              mobile: 'flex-start',
            }}
            style={customFlexItemStyle}
          >
            {`Item${index}`}
          </Flex.Item>
        ))}
      </>
    ),
  },
};

export const CustomResponsiveFlex: Story = {
  args: {
    gap: {
      desktop: '10px',
      mobile: [400, '20px'],
    },
    direction: {
      desktop: 'row',
      tablet: [800, 'column'],
    },
    children: (
      <>
        {Array.from({ length: 8 }).map((_, index) => (
          <Flex.Item key={index} style={responsiveStyle}>
            {`Item${index}`}
          </Flex.Item>
        ))}
      </>
    ),
  },
};
