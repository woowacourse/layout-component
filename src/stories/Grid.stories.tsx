import type { Meta, StoryObj } from '@storybook/react';
import Grid from '../Grid';

const meta: Meta<typeof Grid> = {
  component: Grid,

  argTypes: {
    rows: {
      description: '열의 개수',
    },
    columns: {
      description: '행의 개수',
    },
    gap: {
      description: '각 행과 열 사이의 간격',
      defaultValue: { summary: "''" },
    },
  },

  args: {
    rows: 4,
    columns: 3,
    gap: '10px',
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

const getRandomSize = () => `${50 + Math.floor(Math.random() * 200)}px`;
const SquareBox = (props: React.PropsWithChildren) => {
  const { children } = props;
  return (
    <p style={{ margin: '0', width: '100px', height: '100px', border: '1px solid black' }}>
      {children}
    </p>
  );
};

export const Example: Story = {
  render: (args) => (
    <Grid style={{ border: '2px solid hotpink' }} {...args}>
      <SquareBox>가을 햇살</SquareBox>
      <SquareBox>오광수</SquareBox>
      <SquareBox>등 뒤에서 살짝</SquareBox>
      <SquareBox>안는 이 누구신가요?</SquareBox>
      <SquareBox>설레는 마음에</SquareBox>
      <SquareBox>뒤돌아보니</SquareBox>
      <SquareBox>산모퉁이 돌아온</SquareBox>
      <SquareBox>가을 햇살이</SquareBox>
      <SquareBox>아슴아슴 남아있는</SquareBox>
      <SquareBox>그 사람 되어</SquareBox>
      <SquareBox>단풍 조막손 내밀며</SquareBox>
      <SquareBox>걷자 합니다</SquareBox>
    </Grid>
  ),
};

export const RandomSizedChildrenExample: Story = {
  render: (args) => (
    <Grid style={{ border: '2px solid hotpink' }} {...args}>
      {Array.from({ length: 12 }).map((_, index) => {
        const width = getRandomSize();
        const height = getRandomSize();

        return (
          <div key={index} style={{ border: '1px solid black', width, height }}>
            {width} * {height}
          </div>
        );
      })}
    </Grid>
  ),
};
