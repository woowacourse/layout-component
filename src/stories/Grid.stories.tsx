import type { Meta, StoryObj } from '@storybook/react';
import Grid from '../components/Grid';
import GridItem from '../components/GridItem';

const meta = {
  title: 'Grid',
  component: Grid,
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

interface StoryGridItemsProps {
  isCustom: boolean;
}
const StoryGridItems = ({ isCustom }: StoryGridItemsProps) => {
  return (
    <>
      <GridItem gridRow={isCustom ? '1/3' : 'auto'}>A</GridItem>
      <GridItem>B</GridItem>
      <GridItem>C</GridItem>
      <GridItem>D</GridItem>
      <GridItem>E</GridItem>
    </>
  );
};
export const Default: Story = {
  args: {
    columns: 3,
    gap: 10,
    children: <StoryGridItems isCustom={false} />,
  },
};

export const Custom: Story = {
  args: {
    columns: 3,
    gap: 10,
    children: <StoryGridItems isCustom={true} />,
  },
};
