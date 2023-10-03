import type { Meta, StoryObj } from '@storybook/react';
import SplitPane from './SplitPane';
import { Fragment } from 'react';

/**
 * `SplitPane` component is a component that allows users to adjust the sizes of two or more child components. Use the resize bar to change these sizes.
 *
 * `SplitPane` 컴포넌트는 두 개 이상의 자식 컴포넌트를 사용자가 자유로이 조절할 수 있는 컴포넌트입니다.
 */
const meta = {
  title: 'SplitPane',
  component: SplitPane,
  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '300px', boxSizing: 'border-box' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      description:
        'The children to display.<br/>내부에 표시할 자식 요소들을 의미합니다.',
    },
    defaultRatios: {
      description:
        'Ratios of the child on first render. The unit of the ratio is %. **Note that sum of the ratios must be 100, otherwise it will not work as you expected.**<br/>처음으로 자식 요소들을 랜더링할 때 각 자식 요소가 차지하게 될 비율입니다. 비율의 단위는 %입니다. **반드시 비율의 합은 100이 되어야 합니다. 그렇지 않을 경우 컴포넌트가 오작동할 수 있습니다.**',
    },
    direction: {
      description:
        'Alignment direction of children.<br/>자식 컴포넌트들이 배치되는 방향입니다.**',
      table: {
        defaultValue: { summary: 'row' },
      },
    },
    resizerThickness: {
      description:
        'Thickness of the resizers for resizing child components. You can use only `number` type, which means the pixels of thickness.<br/>자식 컴포넌트의 크기를 조절할 수 있는 손잡이의 굵기입니다. `px` 단위만 사용할 수 있습니다.**',
      table: {
        defaultValue: { summary: 15 },
      },
    },
    borderThickness: {
      description:
        'Thickness of the border of the component. You can use only `number` type, which means the pixels of thickness.<br/>윤곽선의 굵기입니다. `px` 단위만 사용할 수 있습니다.**',
      table: {
        defaultValue: { summary: 2 },
      },
    },
    minimumRatio: {
      description:
        'The minimum ratio of the child components. Child components will not shrink below this value.<br/>각 자식 컴포넌트가 가지게 될 최소 크기(비율)입니다. 손잡이를 조절하더라도 최소 크기 미만으로는 줄어들지 않습니다.**',
      table: {
        defaultValue: { summary: 0 },
      },
    },
    maximumRatio: {
      description:
        'The maximum ratio of the child components. Child components will not expand above this value.<br/>각 자식 컴포넌트가 가지게 될 최대 크기(비율)입니다. 손잡이를 조절하더라도 최대 크기보다 늘어나지 않습니다.**',
      table: {
        defaultValue: { summary: 100 },
      },
    },
    horizontalMargin: {
      description:
        'The margins for the left and right sides. Useful when you want to align multiple `SplitPane` components in a horizontal arrangement. You can use the unit of `%`, `px`, or numeric values.<br/>컴포넌트의 좌우 margin을 의미합니다. 여러 개의 `SplitPane` 컴포넌트를 가로로 배치할 때 특히 유용합니다. `%`, `px` 단위의 값을 사용하거나 정수 값을 사용할 수 있습니다.',
      table: {
        defaultValue: { summary: 0 },
      },
    },
    verticalMargin: {
      description:
        'The margins for the top and bottom sides. Useful when you want to align multiple `SplitPane` components in a vertical arrangement. You can use the unit of `%`, `px`, or numeric values.<br/>컴포넌트의 상하 margin을 의미합니다. 여러 개의 `SplitPane` 컴포넌트를 세로로 배치할 때 특히 유용합니다. `%`, `px` 단위의 값을 사용하거나 정수 값을 사용할 수 있습니다.',
      table: {
        defaultValue: { summary: 0 },
      },
    },
    width: {
      description:
        'The width of the component. You can use the unit of `%`, `px`, or numeric values.<br/>컴포넌트의 가로 길이입니다. `%`, `px` 단위의 값을 사용하거나 정수 값을 사용할 수 있습니다.',
      table: {
        defaultValue: { summary: '100%' },
      },
    },
    height: {
      description:
        'The height of the component. You can use the unit of `%`, `px`, or numeric values.<br/>컴포넌트의 세로 길이입니다. `%`, `px` 단위의 값을 사용하거나 정수 값을 사용할 수 있습니다.',
      table: {
        defaultValue: { summary: '100%' },
      },
    },
    themeColor: {
      description:
        "The theme color of the component. While the `SplitPane` component doesn't directly provide color-related properties, you can use the theme color to define the overall design of the component. If you specify the theme color, the appropriate design will be automatically applied. You can use Hex format to apply theme using a color.<br/>컴포넌트의 테마 색입니다. `SplitPane` 컴포넌트는 `color` 관련 프로퍼티를 직접적으로 제공하지는 않지만, 테마 색을 이용하여 컴포넌트의 전체적인 디자인을 정할 수 있습니다. 테마 색만 여러분이 정해주신다면 그에 걸맞는 디자인이 알아서 적용됩니다. Hex 단위의 값을 사용해 주세요.",
      table: {
        defaultValue: { summary: '#be33ff' },
      },
    },
  },
} satisfies Meta<typeof SplitPane>;

export default meta;

type Story = StoryObj<typeof meta>;

const testChildren = [
  <div style={{ backgroundColor: '#24002d', width: '100%', height: '100%' }} />,
  <div style={{ backgroundColor: '#411048', width: '100%', height: '100%' }} />,
  <div style={{ backgroundColor: '#3a243c', width: '100%', height: '100%' }} />,
  <div style={{ backgroundColor: '#240234', width: '100%', height: '100%' }} />,
];

const testChildrenWithBlueTheme = [
  <div style={{ backgroundColor: '#00012d', width: '100%', height: '100%' }} />,
  <div style={{ backgroundColor: '#211048', width: '100%', height: '100%' }} />,
  <div style={{ backgroundColor: '#2c243c', width: '100%', height: '100%' }} />,
  <div style={{ backgroundColor: '#0a0234', width: '100%', height: '100%' }} />,
];

export const DirectionRow: Story = {
  args: { children: '', defaultRatios: [] },
  render: () => (
    <SplitPane defaultRatios={[10, 20, 30, 40]} resizerThickness={15}>
      {testChildren.map((child, index) => (
        <Fragment key={index}>{child}</Fragment>
      ))}
    </SplitPane>
  ),
};

export const DirectionColumn: Story = {
  args: { children: '', defaultRatios: [] },
  render: () => (
    <SplitPane
      defaultRatios={[10, 20, 30, 40]}
      direction="column"
      resizerThickness={15}
    >
      {testChildren.map((child, index) => (
        <Fragment key={index}>{child}</Fragment>
      ))}
    </SplitPane>
  ),
};

export const MinRatio10: Story = {
  args: { children: '', defaultRatios: [] },
  render: () => (
    <SplitPane
      defaultRatios={[10, 20, 30, 40]}
      minimumRatio={10}
      resizerThickness={15}
    >
      {testChildren.map((child, index) => (
        <Fragment key={index}>{child}</Fragment>
      ))}
    </SplitPane>
  ),
};

export const MaxRatio80: Story = {
  args: { children: '', defaultRatios: [] },
  render: () => (
    <SplitPane defaultRatios={[50, 50]} maximumRatio={80} resizerThickness={15}>
      <Fragment>{testChildren[0]}</Fragment>
      <Fragment>{testChildren[1]}</Fragment>
    </SplitPane>
  ),
};

export const ThickBorder: Story = {
  args: { children: '', defaultRatios: [] },
  render: () => (
    <SplitPane
      defaultRatios={[10, 20, 30, 40]}
      borderThickness={10}
      resizerThickness={15}
    >
      {testChildren.map((child, index) => (
        <Fragment key={index}>{child}</Fragment>
      ))}
    </SplitPane>
  ),
};

export const Margin: Story = {
  args: { children: '', defaultRatios: [] },
  render: () => (
    <SplitPane defaultRatios={[10, 20, 30, 40]} horizontalMargin={40}>
      {testChildren.map((child, index) => (
        <Fragment key={index}>{child}</Fragment>
      ))}
    </SplitPane>
  ),
};

export const CustomThemeColor: Story = {
  args: { children: '', defaultRatios: [], themeColor: '#000' },
  render: () => (
    <SplitPane
      defaultRatios={[25, 25, 25, 25]}
      maximumRatio={30}
      resizerThickness={15}
      themeColor="#0004ff"
    >
      {testChildrenWithBlueTheme.map((child, index) => (
        <Fragment key={index}>{child}</Fragment>
      ))}
    </SplitPane>
  ),
};

/**
 * If you wish, you may use nested `SplitPane` component to construct more intricate layout.
 *
 * 원한다면, `SplitPane` 컴포넌트 내부에 또다른 `SplitPane` 컴포넌트를 사용해 중첩된 더 복잡한 형태의 메뉴를 구성하는 것도 가능합니다.
 */
export const Nested: Story = {
  args: { children: '', defaultRatios: [] },
  render: () => (
    <SplitPane defaultRatios={[30, 70]} direction="row" resizerThickness={15}>
      <Fragment>{testChildren[0]}</Fragment>
      <SplitPane
        defaultRatios={[50, 50]}
        direction="column"
        borderThickness={0}
        resizerThickness={15}
      >
        <Fragment>{testChildren[1]}</Fragment>
        <Fragment>{testChildren[2]}</Fragment>
      </SplitPane>
    </SplitPane>
  ),
};

export const Nested2: Story = {
  args: { children: '', defaultRatios: [] },
  render: () => (
    <SplitPane
      defaultRatios={[30, 70]}
      direction="row"
      resizerThickness={15}
      borderThickness={4}
    >
      <Fragment>{testChildren[0]}</Fragment>
      <SplitPane
        defaultRatios={[25, 25, 50]}
        direction="column"
        borderThickness={0}
        resizerThickness={15}
      >
        <Fragment>{testChildren[1]}</Fragment>
        <Fragment>{testChildren[2]}</Fragment>
        <SplitPane
          defaultRatios={[50, 50]}
          borderThickness={0}
          resizerThickness={15}
        >
          <SplitPane
            defaultRatios={[20, 30, 50]}
            borderThickness={0}
            resizerThickness={15}
            direction="column"
          >
            <Fragment>{testChildren[1]}</Fragment>
            <Fragment>{testChildren[2]}</Fragment>
            <Fragment>{testChildren[3]}</Fragment>
          </SplitPane>
          <Fragment>{testChildren[2]}</Fragment>
        </SplitPane>
      </SplitPane>
    </SplitPane>
  ),
};
