import {
  Children,
  ComponentPropsWithoutRef,
  ElementType,
  CSSProperties,
  ReactElement,
  PropsWithChildren,
} from 'react';

import { styled, css } from 'styled-components';

import FlexItem from './FlexItem';
import { calculateResponsiveStyle, isCommonStyle } from '../utils';
import { ResponsiveStyleType } from '../type';

type FlexProps = {
  /**
   * HTML Tag를 지정하는 속성
   *
   *  * @default 'div'
   */
  tag?: ElementType;
  /**
   * Flex Container 내의 아이템을 배치할 때 사용할 주축 및 방향을 지정하는 속성
   *
   *  * @default 'row'
   */
  direction?:
    | CSSProperties['flexDirection']
    | ResponsiveStyleType<CSSProperties['flexDirection']>;
  /**
   * Flex Item 요소들이 강제로 한줄에 배치되게 할 것인지, 또는 가능한 영역 내에서 벗어나지 않고 여러행으로 나누어 표현 할 것인지 결정하는 속성
   *
   *  * @default 'nowrap'
   */
  wrap?:
    | CSSProperties['flexWrap']
    | ResponsiveStyleType<CSSProperties['flexWrap']>;
  /**
   * 브라우저가 콘텐츠 항목 사시의 주변과 공간을 main-axis을 기준으로 어떻게 정렬할 것인지 결정하는 속성
   *
   *  * @default 'start'
   */
  justify?:
    | CSSProperties['justifyContent']
    | ResponsiveStyleType<CSSProperties['justifyContent']>;
  /**
   * Flex Item의 수직 방향 정렬 방식을 결정하는 속성
   *
   *  * @default 'stretch'
   */
  align?:
    | CSSProperties['alignItems']
    | ResponsiveStyleType<CSSProperties['alignItems']>;
  /**
   * 행과 열 사이의 간격을 설정하는 속성
   *
   *  * @default "0px"
   */
  gap?: CSSProperties['gap'] | ResponsiveStyleType<CSSProperties['gap']>;
} & ComponentPropsWithoutRef<ElementType>;

function Flex({
  children,
  tag = 'div',
  direction = 'row',
  wrap = 'nowrap',
  justify = 'start',
  align = 'stretch',
  gap = '0px',
  ...rest
}: PropsWithChildren<FlexProps>) {
  const styleProps = { direction, wrap, justify, align, gap };

  const flexItemChildren = Children.map(children, (child) => {
    const item = child as ReactElement;
    if (item.type !== FlexItem) {
      console.warn(
        'Flex.Item 컴포넌트를 사용하면 Flex을 더욱 쉽고 편리하게 활용할 수 있습니다.'
      );
    }
    return child;
  });

  return (
    <Layout as={tag} {...rest} {...styleProps}>
      {flexItemChildren}
    </Layout>
  );
}

Flex.Item = FlexItem;

export default Flex;

const Layout = styled.div<FlexProps>`
  display: flex;

  ${({ direction, gap, align, justify, wrap }) => css`
    flex-direction: ${isCommonStyle<CSSProperties['flexDirection']>(
      direction
    ) && direction};
    flex-wrap: ${isCommonStyle<CSSProperties['flexWrap']>(wrap) && wrap};
    gap: ${isCommonStyle<CSSProperties['gap']>(gap) && gap};
    align-items: ${isCommonStyle<CSSProperties['alignItems']>(align) && align};
    justify-content: ${isCommonStyle<CSSProperties['justifyContent']>(
      justify
    ) && justify};

    ${calculateResponsiveStyle('flex-direction', direction)}
    ${calculateResponsiveStyle('flex-wrap', wrap)}
    ${calculateResponsiveStyle('gap', gap)}
    ${calculateResponsiveStyle('align-items', align)}
    ${calculateResponsiveStyle('justify-content', justify)}
  `}
`;
