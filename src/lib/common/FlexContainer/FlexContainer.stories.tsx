import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';

import { getTypedObjectKeys } from '@utils/getTypedObjectKeys';

import { sizeArgTypes } from '../styles/size';
import { spacingArgTypes } from '../styles/spacing';
import type { FlexContainerProps } from './FlexContainer';
import FlexContainer from './FlexContainer';
import { LAYOUT } from './style';

const generateChildrenBoxes = () => {
  const BOX_COUNT = 6;

  const boxes = Array.from({ length: BOX_COUNT }, (_, index) => {
    return <div key={index}>Box{index + 1}</div>;
  });

  return boxes;
};

const meta = {
  title: 'Layout/Flex/FlexContainer',
  component: FlexContainer,
  parameters: {
    docs: {
      description: {
        component: 'CSS Flex 속성을 이용해 자식 컴포넌트들을 유연하게 배열할 수 있습니다.',
      },
    },
  },
  args: {
    direction: 'row',
    wrap: false,
    reverse: false,
    gap: '0px',
    maxWidth: 'sm',
    fluid: false,
    gutter: false,
    position: 'center',
    children: generateChildrenBoxes(),
  },
  argTypes: {
    gap: {
      control: {
        type: 'text',
      },
      description: `Flex Container 안의 박스가 여러 개일 경우, 박스 사이의 행/열 여백 변경 가능
      <br />- [string] 단위까지 적어줘야 함 (ex. 8px, 10px 20px)
      <br />&nbsp; 🔶 스토리북에서는 string 🔶
      <br />- [number] 숫자만 적을 경우 px로 자동 변환`,
    },
    rowGap: {
      control: {
        type: 'text',
      },
      description: `Flex Container 안의 박스가 여러 개일 경우, 박스 사이의 행 여백 변경 가능
      <br />- [string] 단위까지 적어줘야 함 (ex. 8px)
      <br />&nbsp; 🔶 스토리북에서는 string 🔶
      <br />- [number] 숫자만 적을 경우 px로 자동 변환`,
    },
    columnGap: {
      control: {
        type: 'text',
      },
      description: `Flex Container 안의 박스가 여러 개일 경우, 박스 사이의 열 여백 변경 가능
      <br />- [string] 단위까지 적어줘야 함 (ex. 8px)
      <br />&nbsp; 🔶 스토리북에서는 string 🔶
      <br />- [number] 숫자만 적을 경우 px로 자동 변환`,
    },
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
} satisfies Meta<typeof FlexContainer>;

export default meta;

const ContainerForStorybook = styled(FlexContainer)`
  height: 100px;
  border: 2px solid #32affd;

  & > * {
    width: fit-content;
    height: 32px;
    padding: 4px 16px;
    border: 2px solid #fb709f;
  }
`;

export const Default = ({ ...args }: FlexContainerProps) => {
  return <ContainerForStorybook {...args} />;
};

const ContainerWithNoHeightBoxes = styled(ContainerForStorybook)`
  & > * {
    height: initial;
  }
`;

export const DefaultWithNoHeightBoxes = ({ ...args }: FlexContainerProps) => {
  return <ContainerWithNoHeightBoxes {...args} />;
};

const layoutList = getTypedObjectKeys(LAYOUT);
const SubTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #035d95;
`;

export const Layout = () => {
  return (
    <>
      <SubTitle>➡️&nbsp; Direction: Row</SubTitle>
      <FlexContainer tag="section" gap="28px 12px" wrap mb={72}>
        {layoutList.map((layout, index) => {
          return (
            <div key={index}>
              <h3 css={{ fontWeight: 500, marginBottom: 8 }}>{layout}</h3>
              <ContainerForStorybook layout={layout} css={{ minWidth: 200 }}>
                <p>Box</p>
                <p>Box</p>
              </ContainerForStorybook>
            </div>
          );
        })}
      </FlexContainer>

      <SubTitle>⬇️&nbsp; Direction: Column</SubTitle>
      <FlexContainer tag="section" gap="28px 12px" wrap>
        {layoutList.map((layout, index) => {
          return (
            <div key={index}>
              <h3 css={{ fontWeight: 500, marginBottom: 8 }}>{layout}</h3>
              <ContainerForStorybook layout={layout} direction="column" css={{ minWidth: 200 }}>
                <p>Box</p>
                <p>Box</p>
              </ContainerForStorybook>
            </div>
          );
        })}
      </FlexContainer>
    </>
  );
};

export const ExampleHeader = () => {
  return (
    <ContainerForStorybook tag="header" layout="centerLeft" columnGap={12} px={16}>
      <h1 css={{ fontWeight: 600, fontSize: 16 }}>로고</h1>
      {Array.from({ length: 4 }, (_, index) => (
        <p key={index}>메뉴{index + 1}</p>
      ))}
      <button type="button" aria-label="로그인" css={{ marginLeft: 'auto' }}>
        로그인
      </button>
    </ContainerForStorybook>
  );
};
