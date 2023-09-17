import { Meta, Story } from '@storybook/react';
import Flex from './Flex.tsx';
import { FlexProps } from './types.ts';

export default {
  title: 'Components/Flex',
  component: Flex,
} as Meta;

const Template: Story<FlexProps> = (args) => (
  <Flex {...args}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Flex>
);

export const Default = Template.bind({});
Default.args = {
  direction: 'row',
  justify: 'center',
  align: 'center',
  gap: 10,
};
