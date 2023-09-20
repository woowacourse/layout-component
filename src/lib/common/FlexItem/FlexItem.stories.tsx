import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';

import FlexContainer from '../FlexContainer';
import { sizeArgTypes } from '../styles/size';
import { spacingArgTypes } from '../styles/spacing';
import type { FlexItemProps } from './FlexItem';
import FlexItem from './FlexItem';

const meta = {
  title: 'Layout/Flex/FlexItem',
  component: FlexItem,
  parameters: {
    docs: {
      description: {
        component:
          'Flex Container의 자식 컴포넌트입니다. 각각의 너비와 위치 등을 조절할 수 있습니다.',
      },
    },
  },
  args: {
    children: 'Box',
    order: 0,
  },
  argTypes: {
    flex: {
      description: `Flex Item 크기를 조절할 수 있음
      <br />숫자 하나만 입력할 경우 (flex="8"),
      <br />-&nbsp; **flex-grow**
      <br />단위 포함 숫자 하나만 입력할 경우 (flex="8px"),
      <br />-&nbsp; **flex-basis** 
      <br />숫자만 두 개 입력할 경우 (flex="2 2"),
      <br />-&nbsp; **flex-grow | flex-shrink** 
      <br />단위 포함 숫자 두 개를 입력할 경우 (flex="1 30px"),
      <br />-&nbsp; **flex-grow | flex-basis** 
      <br />세 개를 입력할 경우 (flex="1 2 30px"),
      <br />-&nbsp; **flex-grow | flex-shrink | flex-basis**`,
    },
    children: {
      control: {
        type: 'text',
      },
    },
    tag: {
      control: false,
    },
    css: {
      description: 'CSS 속성을 직접 입력할 수 있습니다.',
    },
    ...sizeArgTypes,
    ...spacingArgTypes,
  },
} satisfies Meta<typeof FlexItem>;

export default meta;

const ContainerForStorybook = styled(FlexContainer)`
  height: 100px;
  border: 2px solid #32affd;

  & > * {
    width: fit-content;
    padding: 4px 16px;
    border: 2px solid #fb709f;
  }
`;

export const Default = ({ children, ...args }: FlexItemProps) => {
  return (
    <ContainerForStorybook layout="center" gap={8}>
      {Array.from({ length: 4 }, (_, index) => {
        return (
          <FlexItem order={index + 1} grow={1} shrink={1}>
            {children}
            {index + 1}
          </FlexItem>
        );
      })}
      <FlexItem children="Control Me!" {...args} />
    </ContainerForStorybook>
  );
};

export const DirectionColumn = ({ children, ...args }: FlexItemProps) => {
  return (
    <ContainerForStorybook layout="center" direction="column" gap={8} css={{ height: 180 }}>
      {Array.from({ length: 2 }, (_, index) => {
        return (
          <FlexItem order={index + 1} shrink={1}>
            {children}
            {index + 1}
          </FlexItem>
        );
      })}
      <FlexItem children="Control Me!" {...args} />
    </ContainerForStorybook>
  );
};
