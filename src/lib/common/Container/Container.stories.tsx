import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';

import { sizeArgTypes } from '@styles/size';
import { spacingArgTypes } from '@styles/spacing';

import { getTypedObjectKeys } from '@utils/getTypedObjectKeys';

import type { ContainerProps } from './Container';
import Container from './Container';
import { ALIGNMENT } from './style/container.style';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    docs: {
      description: {
        component: '화면의 폭에 따라 내용의 최대 폭을 제한하고 중앙에 배치할 수 있습니다.',
      },
    },
  },
  args: {
    position: 'center',
    fluid: false,
    gutter: false,
  },
  argTypes: {
    children: {
      control: false,
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
} satisfies Meta<typeof Container>;

export default meta;

const ContainerForStorybook = styled(Container)`
  height: 100px;
  background: #d8eaf6;
  border: 2px solid #32affd;

  & > :first-of-type {
    width: fit-content;
    height: 32px;
    padding: 4px 16px;

    font-weight: 500;

    background: #f5dce4;
    border: 2px solid #fb709f;
  }
`;

const alignmentList = getTypedObjectKeys(ALIGNMENT);

export const Default = ({ ...args }: ContainerProps) => {
  return <ContainerForStorybook {...args} />;
};

const PositionContainer = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Position = () => {
  return (
    <PositionContainer>
      {alignmentList.map((alignment, index) => {
        return (
          <div key={index} css={{ padding: 8, border: '2px solid #333' }}>
            <h3 css={{ fontWeight: 500, marginBottom: 8 }}>{alignment}</h3>
            <ContainerForStorybook position={alignment} maxWidth="sm" />
          </div>
        );
      })}
    </PositionContainer>
  );
};

export const Fluid = () => {
  return <ContainerForStorybook fluid />;
};

export const Gutter = () => {
  return <ContainerForStorybook gutter />;
};
