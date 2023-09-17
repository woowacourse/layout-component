import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

/**
 * `Container` component is designed to center-align its inner elements, making it particularly useful when placing text content inside this component.
 */
const meta = {
  title: 'Container',
  component: Container,
  argTypes: {
    children: {
      description: 'The children to display',
    },
    maxWidth: {
      description: 'The maximum width of the content',
    },
    minWidth: {
      description: 'The minimum width of the content',
    },
    padding: {
      description: 'The padding of the container',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OnlyMaxWidth: Story = {
  args: {
    maxWidth: 720,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero lacus, gravida sed felis ac, consequat rutrum felis. Mauris et elementum velit. Praesent luctus feugiat convallis. Integer venenatis, nulla ac mattis semper, enim quam pretium sem, pretium commodo eros mi nec ligula. Nulla gravida urna vitae lectus pharetra, sed ultrices elit pellentesque. Donec vitae nisi eu ipsum pharetra fermentum a et eros. Fusce eget lacinia elit, in pellentesque lacus. Quisque pharetra laoreet libero, vel volutpat risus imperdiet eu. Donec vehicula mi in rutrum blandit. Vestibulum consequat mattis felis ac viverra. Sed bibendum tincidunt mattis. Curabitur ac tortor mollis, gravida tellus vehicula, elementum orci.',
  },
};

/**
 * Note that if the component's width is less than `minWidth`, the content width will not be reduced, which will result in the appearance of a scroll within this component.
 */
export const MinWidthAndMaxWidth: Story = {
  args: {
    maxWidth: 720,
    minWidth: 600,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero lacus, gravida sed felis ac, consequat rutrum felis. Mauris et elementum velit. Praesent luctus feugiat convallis. Integer venenatis, nulla ac mattis semper, enim quam pretium sem, pretium commodo eros mi nec ligula. Nulla gravida urna vitae lectus pharetra, sed ultrices elit pellentesque. Donec vitae nisi eu ipsum pharetra fermentum a et eros. Fusce eget lacinia elit, in pellentesque lacus. Quisque pharetra laoreet libero, vel volutpat risus imperdiet eu. Donec vehicula mi in rutrum blandit. Vestibulum consequat mattis felis ac viverra. Sed bibendum tincidunt mattis. Curabitur ac tortor mollis, gravida tellus vehicula, elementum orci.',
  },
};

/**
 * Useful when you want to arrange multiple `Container` components with gaps between them.
 */
export const MaxWidthWithPadding: Story = {
  args: {
    maxWidth: 720,
    padding: 40,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero lacus, gravida sed felis ac, consequat rutrum felis. Mauris et elementum velit. Praesent luctus feugiat convallis. Integer venenatis, nulla ac mattis semper, enim quam pretium sem, pretium commodo eros mi nec ligula. Nulla gravida urna vitae lectus pharetra, sed ultrices elit pellentesque. Donec vitae nisi eu ipsum pharetra fermentum a et eros. Fusce eget lacinia elit, in pellentesque lacus. Quisque pharetra laoreet libero, vel volutpat risus imperdiet eu. Donec vehicula mi in rutrum blandit. Vestibulum consequat mattis felis ac viverra. Sed bibendum tincidunt mattis. Curabitur ac tortor mollis, gravida tellus vehicula, elementum orci.',
  },
};
