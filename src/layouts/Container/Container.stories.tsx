import type {Meta} from '@storybook/react';
import Container, {ContainerProps} from "./Container.tsx";


const meta = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  args: {
    maxWidth: 'md',
  },
  argTypes: {
    maxWidth: {
      description: '최대 가로 길이를 정합니다.',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;

export const Default = (args: ContainerProps) => (
  <>
    <Container {...args}>
      <div style={{background: 'lightblue'}}>
        <h1>Your content goes here</h1>
        <p>This is a container with dynamic maxWidth and a light blue background.</p>
      </div>
    </Container>
  </>
);

export const MaxWidth = () => (
  <>
    <Container maxWidth="xs">
      <div style={{background: 'lightblue'}}>
        <h1>Your content goes here</h1>
        <p>This is a container with dynamic maxWidth and a light blue background.</p>
      </div>
    </Container>
    <Container maxWidth="sm">
      <div style={{background: 'lightblue'}}>
        <h1>Your content goes here</h1>
        <p>This is a container with dynamic maxWidth and a light blue background.</p>
      </div>
    </Container>
    <Container maxWidth="md">
      <div style={{background: 'lightblue'}}>
        <h1>Your content goes here</h1>
        <p>This is a container with dynamic maxWidth and a light blue background.</p>
      </div>
    </Container>
    <Container maxWidth="lg">
      <div style={{background: 'lightblue'}}>
        <h1>Your content goes here</h1>
        <p>This is a container with dynamic maxWidth and a light blue background.</p>
      </div>
    </Container>
    <Container maxWidth="xl">
      <div style={{background: 'lightblue'}}>
        <h1>Your content goes here</h1>
        <p>This is a container with dynamic maxWidth and a light blue background.</p>
      </div>
    </Container>
  </>
);
