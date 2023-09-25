import type { Meta, StoryObj } from '@storybook/react';
import { CSSProperties } from 'react';
import Flex from './Flex';

/**
 * The `Flex` component is designed for effortless flex element implementation, typically used in complex and responsive layouts. We recommend using `Grid` if you want to use fixed layouts.
 */
const meta = {
  title: 'Flex',
  component: Flex,
  argTypes: {
    children: {
      description: 'The children to display',
    },
    verticalPadding: {
      description: 'The vertical padding of the flex',
    },
    horizontalPadding: {
      description: 'The horizontal padding of the flex',
    },
    gap: {
      description: 'The gap between cells of the flex.',
    },
    rowGap: {
      description:
        'The row gap between cells of the flex. This property overwrites the `gap` property.',
    },
    columnGap: {
      description:
        'The column gap between cells of the flex. This property overwrites the `gap` property.',
    },
    direction: {
      description:
        'The direction of items wanted to be ordered. Same as the `flex-direction` property.',
    },
    justify: {
      description:
        'Alignment of items along the main axis. Same as the `justify-content` property.',
    },
    align: {
      description:
        'Alignment of items along the cross-axis. Same as the `align-items` property.',
    },
    wrap: {
      description:
        'Whether and how items should wrap to the next line when they exceed the available space along the main axis within the flex container. Same as the `flex-wrap` property.',
    },
    width: {
      description:
        'The width of the flex. It is automatically set to px if the type of the width is `number`. If not specified, it defaults to `100%.`',
    },
    height: {
      description:
        'The height of the flex. It is automatically set to px if the type of the height is `number`. If not specified, it defaults to `auto.`',
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

const itemStyles: CSSProperties = {
  display: 'block',
  height: '60px',
  background: `linear-gradient(45deg, #61215d, #b779af)`,
  color: '#eddfeb',
  border: '1px solid #ce9cc7',
  borderRadius: '5px',
  textAlign: 'center',
  fontSize: '20px',
  lineHeight: '60px',
};

const fullHeightItemStyles: CSSProperties = {
  ...itemStyles,
  height: '100%',
};

export const Default: Story = {
  args: {
    gap: 5,
    children: (
      <>
        <div style={{ ...itemStyles, width: '150px' }}>Flex Item</div>
        <div style={{ ...itemStyles, width: '350px' }}>Flex Item</div>
        <div style={{ ...itemStyles, width: '225px' }}>Flex Item</div>
      </>
    ),
  },
};

/**
 * Use the `wrap` property to create a responsive layout. Try resizing the browser width to see the changes.
 */
export const Wrap: Story = {
  args: {
    gap: 5,
    wrap: 'wrap',
    children: (
      <>
        <div style={{ ...itemStyles, width: '150px' }}>Flex Item</div>
        <div style={{ ...itemStyles, width: '350px' }}>Flex Item</div>
        <div style={{ ...itemStyles, width: '225px' }}>Flex Item</div>
      </>
    ),
  },
};

/**
 * Use nested flex to create more various layouts.
 */
export const NestedFlex: Story = {
  args: {
    gap: 5,
    direction: 'column',
    children: (
      <>
        <div style={{ ...itemStyles, width: '100%' }}>Flex Item</div>
        <Flex columnGap={5} height={350}>
          <div style={{ ...fullHeightItemStyles, width: '20%' }}>Flex Item</div>
          <div style={{ ...fullHeightItemStyles, width: '50%' }}>Flex Item</div>
          <div style={{ ...fullHeightItemStyles, width: '30%' }}>Flex Item</div>
        </Flex>
        <div style={{ ...itemStyles, width: '100%' }}>Flex Item</div>
      </>
    ),
  },
};
