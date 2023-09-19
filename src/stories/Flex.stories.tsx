import type { Meta, StoryObj } from '@storybook/react';
import Flex from '../components/Flex';
import FlexItem from '../components/FlexItem';

const meta = {
  title: 'Flex',
  component: Flex,
  decorators: [
    (Story) => (
      <div
        style={{ height: '200px', width: '500px', backgroundColor: 'skyblue' }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

interface FlexExampleProps {
  isCustom: boolean;
}
const FlexExample = ({ isCustom }: FlexExampleProps) => {
  return (
    <>
      <FlexItem align={isCustom ? 'center' : 'auto'}>1</FlexItem>
      <FlexItem>2</FlexItem>
      <FlexItem>3</FlexItem>
    </>
  );
};
export const Default: Story = {
  args: {
    children: <FlexExample isCustom={false} />,
  },
};

export const Stack: Story = {
  args: {
    direction: 'column',
    justify: 'center',
    align: 'center',
    gap: 4,
    children: <FlexExample isCustom={false} />,
  },
};

export const DirectionColumn: Story = {
  args: {
    direction: 'column',
    children: <FlexExample isCustom={false} />,
  },
};

export const AlignSelf: Story = {
  args: {
    direction: 'column',
    justify: 'center',
    align: 'center',
    gap: 4,
    children: <FlexExample isCustom={true} />,
  },
};
