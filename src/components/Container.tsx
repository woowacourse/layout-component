import type { ComponentPropsWithoutRef, ElementType } from 'react';

import type { Interpolation, Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { centerStyle } from '@styles/index';

interface ContainerProps extends ComponentPropsWithoutRef<ElementType> {
  /**
   * Container 컴포넌트가 사용할 HTML 태그
   *
   * @default 'div'
   */
  tag?: ElementType;
  /**
   * Container 컴포넌트 내 아이템의 중앙 위치 여부
   *
   * @default false
   */
  centerContent?: boolean;
  /**
   * Container 컴포넌트의 너비
   */
  width?: string | number;
  /**
   * Container 컴포넌트의 높이
   */
  height?: string | number;
  /**
   * Container 컴포넌트의 최대 너비
   *
   * @default '100%'
   */
  maxWidth?: string | number;
  /**
   * Container 컴포넌트의 최대 높이
   *
   * @default '100%'
   */
  maxHeight?: string | number;
  /**
   * Container 컴포넌트의 최소 너비
   */
  minWidth?: string | number;
  /**
   * Container 컴포넌트의 최소 높이
   */
  minHeight?: string | number;
  /**
   * Container 컴포넌트의 margin 크기
   */
  margin?: string | number;
  /**
   * Container 컴포넌트의 padding 크기
   */
  padding?: string | number;
  /**
   * Container 컴포넌트의 borderRadius 크기
   */
  borderRadius?: string | number;
  /**
   * Container 컴포넌트의 배경 색상
   *
   * @default 'white'
   */
  backgroundColor?: string;
}

function Container({
  tag = 'div',
  centerContent = false,
  width,
  height,
  maxWidth = '100%',
  maxHeight = '100%',
  minWidth,
  minHeight,
  margin,
  padding,
  borderRadius,
  backgroundColor = 'white',
  children,
  ...attributes
}: ContainerProps) {
  const Tag = tag;

  const centerContentStyle: Interpolation<Theme> = centerContent ? centerStyle : {};

  return (
    <Tag
      css={[
        css({
          width,
          height,
          maxWidth,
          maxHeight,
          minWidth,
          minHeight,
          margin,
          padding,
          borderRadius,
          backgroundColor,
        }),
        centerContentStyle,
      ]}
      {...attributes}
    >
      {children}
    </Tag>
  );
}

export default Container;
