import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';

import { getTypedObjectEntries } from '@utils/getTypedObjectEntries';
import { getTypedObjectKeys } from '@utils/getTypedObjectKeys';

import { CONTAINER_WIDTH } from '../Container/style';
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
    layout: {
      description: 'Flex Container 안의 박스 위치 변경 가능',
    },
    direction: {
      description: `정렬 방향
      <br />- row: Flex Container 안의 박스 가로 정렬
      <br />- column: Flex Container 안의 박스 세로 정렬`,
    },
    wrap: {
      description: `감싸기 여부
      <br />- true: Flex Container 안의 박스가 Flex Container 바깥으로 나가지 않게 함
      <br />- false: Flex Container 안의 박스의 너비가 Flex Container 보다 클 경우 바깥으로 빠져 나감`,
    },
    reverse: {
      description: `Flex Container 안의 박스 순서를 거꾸로 변경 가능
      <br />- true: Flex Container 안의 박스 순서가 정반대가 됨
      <br />- false: Flex Container 안의 박스 순서가 원래와 같음`,
    },
    justify: {
      description: `Flex Container 박스 justify-content 속성 사용 가능`,
    },
    alignItems: {
      description: `Flex Container 박스 align-items 속성 사용 가능`,
    },
    alignContent: {
      description: `Flex Container 박스 align-content 속성 사용 가능`,
    },
    gap: {
      control: {
        type: 'text',
      },
      description: `Flex Container 안의 박스가 여러 개일 경우, 박스 사이의 가로/세로 여백 변경 가능
      <br />- [string] 단위까지 적어줘야 함 (ex. 8px, 10px 20px)
      <br />&nbsp; 🔶 스토리북에서는 string 🔶
      <br />- [number] 숫자만 적을 경우 px로 자동 변환`,
    },
    rowGap: {
      control: {
        type: 'text',
      },
      description: `Flex Container 안의 박스가 여러 개일 경우, 박스 사이의 가로 여백 변경 가능
      <br />- [string] 단위까지 적어줘야 함 (ex. 8px)
      <br />&nbsp; 🔶 스토리북에서는 string 🔶
      <br />- [number] 숫자만 적을 경우 px로 자동 변환`,
    },
    columnGap: {
      control: {
        type: 'text',
      },
      description: `Flex Container 안의 박스가 여러 개일 경우, 박스 사이의 세로 여백 변경 가능
      <br />- [string] 단위까지 적어줘야 함 (ex. 8px)
      <br />&nbsp; 🔶 스토리북에서는 string 🔶
      <br />- [number] 숫자만 적을 경우 px로 자동 변환`,
    },
    position: {
      description: 'Flex Container의 가로 위치 변경 가능',
    },
    maxWidth: {
      options: Object.assign(
        { none: false },
        ...getTypedObjectEntries(CONTAINER_WIDTH).map(([key, value]) => ({
          [`${key} (${value})`]: key,
        }))
      ),
      control: {
        type: 'select',
      },
      description: 'Flex Container 최대 너비 변경 가능',
    },
    minWidth: {
      options: Object.assign(
        { none: false },
        ...getTypedObjectEntries(CONTAINER_WIDTH).map(([key, value]) => ({
          [`${key} (${value})`]: key,
        }))
      ),
      description: 'Flex Container 최소 너비 변경 가능',
    },
    fluid: {
      description: 'Flex Container의 너비가 화면 너비에 맞춰 유동적으로 변함',
    },
    gutter: {
      description: 'Flex Container 양 옆에 마진(24px)이 생김',
    },
    children: {
      description: 'Flex Container 안 박스<br />- 하나 또는 여러 개의 리액트 컴포넌트 넣을 수 있음',
      control: false,
    },
    tag: {
      defaultValue: 'div',
      description: 'Flex Container 태그 변경 가능 (기본 태그: `div`)',
      control: false,
    },
    css: {
      description: 'CSS 속성을 직접 입력할 수 있습니다.',
    },
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
