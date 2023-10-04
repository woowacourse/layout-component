import type { Meta, StoryObj } from '@storybook/react';
import Masonry from '../../Masonry';
import { LONG_TEXT } from './utils';

const meta: Meta<typeof Masonry.Item> = {
  component: Masonry.Item,

  argTypes: {
    rowGap: {
      defaultValue: { summary: `<Masonry>의 rowGap` },
    },
  },

  args: {
    rowGap: '20rem',
  },
};

type Story = StoryObj<typeof Masonry.Item>;

/**
 * 각 `<Masonry.Item>`마다 원하는 rowGap을 줄 수도 있습니다.
 */
export const CustomRowGap: Story = {
  render: (args) => (
    <Masonry rowGap="20px" columnGap="10px" itemSize="200px">
      <Masonry.Item>
        <p style={{ margin: 0, border: '1px solid black' }}>{LONG_TEXT.slice(0, 26)}</p>
      </Masonry.Item>
      <Masonry.Item>
        <p style={{ margin: 0, border: '1px solid black' }}>{LONG_TEXT.slice(0, 50)}</p>
      </Masonry.Item>
      <Masonry.Item>
        <p style={{ margin: 0, border: '1px solid black' }}>{LONG_TEXT.slice(0, 64)}</p>
      </Masonry.Item>
      <Masonry.Item>
        <p style={{ margin: 0, border: '1px solid black' }}>{LONG_TEXT.slice(0, 134)}</p>
      </Masonry.Item>
      <Masonry.Item>
        <p style={{ margin: 0, border: '1px solid black' }}>{LONG_TEXT.slice(0, 777)}</p>
      </Masonry.Item>
      <Masonry.Item {...args}>
        <p style={{ margin: 0, border: '1px solid hotpink' }}>{LONG_TEXT.slice(0, 93)}</p>
      </Masonry.Item>
      <Masonry.Item>
        <p style={{ margin: 0, border: '1px solid black' }}>{LONG_TEXT.slice(0, 6)}</p>
      </Masonry.Item>
      <Masonry.Item>
        <p style={{ margin: 0, border: '1px solid black' }}>{LONG_TEXT.slice(0, 666)}</p>
      </Masonry.Item>
      <Masonry.Item>
        <p style={{ margin: 0, border: '1px solid black' }}>{LONG_TEXT.slice(0, 555)}</p>
      </Masonry.Item>
      <Masonry.Item>
        <p style={{ margin: 0, border: '1px solid black' }}>{LONG_TEXT.slice(0, 444)}</p>
      </Masonry.Item>
      <Masonry.Item>
        <p style={{ margin: 0, border: '1px solid black' }}>{LONG_TEXT.slice(0, 134)}</p>
      </Masonry.Item>
      <Masonry.Item>
        <p style={{ margin: 0, border: '1px solid black' }}>{LONG_TEXT.slice(0, 777)}</p>
      </Masonry.Item>
      <Masonry.Item>
        <p style={{ margin: 0, border: '1px solid black' }}>{LONG_TEXT.slice(0, 6)}</p>
      </Masonry.Item>
      <Masonry.Item>
        <p style={{ margin: 0, border: '1px solid black' }}>{LONG_TEXT.slice(0, 666)}</p>
      </Masonry.Item>
      <Masonry.Item>
        <p style={{ margin: 0, border: '1px solid black' }}>{LONG_TEXT.slice(0, 555)}</p>
      </Masonry.Item>
      <Masonry.Item>
        <p style={{ margin: 0, border: '1px solid black' }}>{LONG_TEXT.slice(0, 444)}</p>
      </Masonry.Item>
    </Masonry>
  ),
};

export default meta;
