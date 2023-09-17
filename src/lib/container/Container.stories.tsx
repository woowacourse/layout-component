import { Meta, Story } from '@storybook/react';
import Container from './Container.tsx';
import { ContainerProps } from './types.ts';

export default {
  title: 'Components/Container',
  component: Container,
} as Meta;

const Template: Story<ContainerProps> = (args) => (
  <Container {...args}>Content</Container>
);

export const Default = Template.bind({});
Default.args = {
  minWidth: '200px',
  maxWidth: '800px',
};
