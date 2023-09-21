import {
  CSSProperties,
  Children,
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
} from 'react';

import { styled, css } from 'styled-components';

import FlexItem from './FlexItem';
import { calculateResponsiveStyle, isCommonStyle } from '../utils';
import { ResponsiveStyleType } from '../type';

type FlexProps = {
  direction?:
    | CSSProperties['flexDirection']
    | ResponsiveStyleType<CSSProperties['flexDirection']>;
  wrap?:
    | CSSProperties['flexWrap']
    | ResponsiveStyleType<CSSProperties['flexWrap']>;
  justify?:
    | CSSProperties['justifyContent']
    | ResponsiveStyleType<CSSProperties['justifyContent']>;
  align?:
    | CSSProperties['alignItems']
    | ResponsiveStyleType<CSSProperties['alignItems']>;
  gap?: CSSProperties['gap'] | ResponsiveStyleType<CSSProperties['gap']>;
} & HTMLAttributes<HTMLElement>;

function Flex(props: PropsWithChildren<FlexProps>) {
  const { children, ...layoutProps } = props;

  const flexItemChildren = Children.map(children, (child) => {
    const item = child as ReactElement;
    if (item.type !== FlexItem) {
      console.error(
        'Flex.Item 컴포넌트를 사용하면 Flex을 더욱 쉽고 편리하게 활용할 수 있습니다.'
      );
    }
    return child;
  });

  return <Layout {...layoutProps}>{flexItemChildren}</Layout>;
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
    ${calculateResponsiveStyle('flex-wrap', gap)}
    ${calculateResponsiveStyle('gap', align)}
    ${calculateResponsiveStyle('align-items', justify)}
    ${calculateResponsiveStyle('justify-content', wrap)}
  `}
`;
