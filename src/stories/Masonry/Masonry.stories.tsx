import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Masonry from '../../Masonry';

import { LONG_TEXT, getRandomHSL, getRandom2DList, getRandom1DList } from './utils';

const meta: Meta<typeof Masonry> = {
  component: Masonry,

  argTypes: {
    as: {
      defaultValue: { summary: '<div>' },
    },
    rowGap: {
      defaultValue: { summary: 0 },
    },
    columnGap: {
      defaultValue: { summary: 0 },
    },
    itemSize: {
      defaultValue: { summary: '25%' },
    },
    fluidResize: {
      defaultValue: { summary: false },
    },
  },

  args: {
    as: 'div',
    fluidResize: true,
    itemSize: '250px',
    rowGap: '1rem',
    columnGap: 10,
  },
};

export default meta;

type Story = StoryObj<typeof Masonry>;

const RandomImages = (props: { sizeList: Array<[number, number]> }) => {
  const { sizeList } = props;
  return (
    <>
      {sizeList.map(([width, height], index) => (
        <Masonry.Item key={index}>
          <img
            src={`https://source.unsplash.com/random/${width}x${height}`}
            alt={`가로 ${width}픽셀, 세로 ${height}픽셀의 무작위 사진`}
            loading="lazy"
            style={{
              objectFit: 'cover',
              width: '100%',
              height,
              verticalAlign: 'top',
              backgroundColor: getRandomHSL(undefined, 100, 77),
            }}
          />
        </Masonry.Item>
      ))}
    </>
  );
};

const RandomTexts = (props: { lengthList: number[] }) => {
  const { lengthList } = props;
  return (
    <>
      {lengthList.map((length, index) => (
        <Masonry.Item key={index}>
          <p style={{ margin: 0, border: '1px solid black' }}>{LONG_TEXT.slice(0, length)}</p>
        </Masonry.Item>
      ))}
    </>
  );
};

const MasonryExample = (
  props: { type: 'image' | 'text' } & React.ComponentProps<typeof Masonry>
) => {
  const { type, ...rest } = props;
  const [sizeList, setSizeList] = useState<Array<[number, number]>>(getRandom2DList(17));
  const [lengthList, setLengthList] = useState<number[]>(getRandom1DList(17));

  const addMore = () => {
    setSizeList((prev) => [...prev, ...getRandom2DList(17)]);
    setLengthList((prev) => [...prev, ...getRandom1DList(17)]);
  };

  return (
    <>
      <Masonry {...rest}>
        {type === 'image' ? (
          <RandomImages sizeList={sizeList} />
        ) : (
          <RandomTexts lengthList={lengthList} />
        )}
      </Masonry>
      <button
        type="button"
        onClick={addMore}
        style={{ width: '100%', fontSize: 'bolder', cursor: 'pointer' }}
      >
        더 보기
      </button>
    </>
  );
};

export const ImagesExample: Story = {
  render: (args) => <MasonryExample type="image" {...args} />,
};

export const TextsExample: Story = {
  render: (args) => <MasonryExample type="text" {...args} />,
};
