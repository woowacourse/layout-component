import { Global } from '@emotion/react';

import { reset } from '@styles/reset';
import type { Size } from '@styles/size';
import { sizeStyle } from '@styles/size';
import type { Spacing } from '@styles/spacing';
import { spacingStyle } from '@styles/spacing';

import type { CommonProps } from '../types/common';
import type { Alignment } from './style/container.style';
import { positionStyle, widthStyle } from './style/container.style';

export interface WidthStyle {
  /** 너비가 부모 박스 너비에 맞춰(100%) 유동적으로 변함
   * @default false
   */
  fluid?: boolean;
  /** 양 옆에 마진(24px)이 생김
   * @default false
   */
  gutter?: boolean;
}
export interface ContainerProps extends WidthStyle, Size, Spacing, CommonProps {
  /** Container의 가로 위치 변경 가능
   * @default 'center'
   */
  position?: Alignment;
}

const Container = ({
  tag = 'div',
  position = 'center',
  fluid = false,
  gutter = false,
  children,
  ...attributes
}: ContainerProps) => {
  const Tag = tag;

  return (
    <>
      <Global styles={reset} />
      <Tag
        css={[
          positionStyle(position),
          widthStyle({ fluid, gutter }),
          sizeStyle({ ...attributes }),
          spacingStyle({ ...attributes }),
        ]}
        {...attributes}
      >
        {children}
      </Tag>
    </>
  );
};

export default Container;
