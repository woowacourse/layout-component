import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';

import { sizeArgTypes } from '../styles/size';
import { spacingArgTypes } from '../styles/spacing';
import type { GridProps } from './Grid';
import Grid from './Grid';

const generateChildrenBoxes = () => {
  const BOX_COUNT = 6;

  const boxes = Array.from({ length: BOX_COUNT }, (_, index) => {
    return <div key={index}>Box{index + 1}</div>;
  });

  return boxes;
};

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    docs: {
      description: {
        component: 'CSS Grid 속성을 이용해 자식 컴포넌트들을 격자 형태로 배열할 수 있습니다.',
      },
    },
  },
  args: {
    gap: '0px',
    item: false,
    children: generateChildrenBoxes(),
  },
  argTypes: {
    gap: {
      control: {
        type: 'text',
      },
      description: `Grid 안의 박스가 여러 개일 경우, 박스 사이의 가로/세로 여백 변경 가능
      <br />- [string] 단위까지 적어줘야 함 (ex. 8px, 10px 20px)
      <br />&nbsp; 🔷 스토리북에서는 string 🔷
      <br />- [number] 숫자만 적을 경우 px로 자동 변환`,
    },
    rows: {
      control: {
        type: 'number',
      },
      description: `행(row)의 개수/높이 변경 가능
      <br />- [string] 단위까지 적어줘야 함 (ex. 8px | 10px 20px...) 
      <br />&nbsp; 높이 변경 가능
      <br />&nbsp; 🔷 스토리북에서는 number 🔷
      <br />- [number] 숫자만 적을 경우 행의 개수 변경 가능
      <br />&nbsp; 높이는 부모의 높이에 맞춰짐
      `,
    },
    columns: {
      control: {
        type: 'number',
      },
      description: `열(column)의 개수/너비 변경 가능
      <br />- [string] 단위까지 적어줘야 함 (ex. 8px | 10px 20px...) 
      <br />&nbsp; 너비 변경 가능
      <br />&nbsp; 🔷 스토리북에서는 number 🔷
      <br />- [number] 숫자만 적을 경우 열의 개수 변경 가능
      <br />&nbsp; 너비는 부모의 너비에 맞춰짐
      `,
    },
    rowSize: {
      control: {
        type: 'number',
      },
      description: `**rows 속성을 number로 적었을 때**, 행의(row)의 높이 변경 가능
      <br />- [string] 단위까지 적어줘야 함 (ex. 8px) 
      <br />&nbsp; 🔷 스토리북에서는 number 🔷
      <br />- [number] 숫자만 적을 경우 px로 자동 변환
      `,
    },
    columnSize: {
      control: {
        type: 'number',
      },
      description: `**columns 속성을 number로 적었을 때**, 행의(column)의 높이 변경 가능
      <br />- [string] 단위까지 적어줘야 함 (ex. 8px) 
      <br />&nbsp; 🔷 스토리북에서는 number 🔷
      <br />- [number] 숫자만 적을 경우 px로 자동 변환
      `,
    },
    rowGap: {
      control: {
        type: 'text',
      },
      description: `Grid 안의 박스가 여러 개일 경우, 박스 사이의 가로 여백 변경 가능
      <br />- [string] 단위까지 적어줘야 함 (ex. 8px)
      <br />&nbsp; 🔷 스토리북에서는 string 🔷
      <br />- [number] 숫자만 적을 경우 px로 자동 변환`,
    },
    columnGap: {
      control: {
        type: 'text',
      },
      description: `Grid 안의 박스가 여러 개일 경우, 박스 사이의 세로 여백 변경 가능
      <br />- [string] 단위까지 적어줘야 함 (ex. 8px)
      <br />&nbsp; 🔷 스토리북에서는 string 🔷
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
} satisfies Meta<typeof Grid>;

export default meta;

const ContainerForStorybook = styled(Grid)`
  border: 2px solid #32affd;

  & > * {
    padding: 4px 16px;
    border: 2px solid #fb709f;
  }
`;

export const Default = ({ ...args }: GridProps) => {
  return <ContainerForStorybook {...args} />;
};

export const Rows = ({ children }: GridProps) => {
  return <ContainerForStorybook rows={2} children={children} />;
};

export const Columns = ({ children }: GridProps) => {
  return <ContainerForStorybook columns={2} children={children} />;
};

export const RowSize = ({ children }: GridProps) => {
  return <ContainerForStorybook rows={2} rowSize={100} children={children} />;
};

export const ColumnSize = ({ children }: GridProps) => {
  return <ContainerForStorybook columns={2} columnSize={100} children={children} />;
};

export const Template = () => {
  const templateArea = `"a a b"
                        "c c b"`;

  return (
    <ContainerForStorybook templateAreas={templateArea}>
      <Grid item areaName="a" children="a" css={{ width: '100%', textAlign: 'center' }} />
      <Grid item areaName="a" children="a" css={{ width: '100%', textAlign: 'center' }} />
      <Grid item areaName="b" children="b" css={{ width: '100%', textAlign: 'center' }} />
      <Grid item areaName="c" children="c" css={{ width: '100%', textAlign: 'center' }} />
    </ContainerForStorybook>
  );
};
