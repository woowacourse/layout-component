import {
  CSSProperties,
  Children,
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
} from 'react';

import { styled, css } from 'styled-components';

import FlexItem from './FlexItem';

type FlexProps = {
  direction?: CSSProperties['flexDirection'];
  wrap?: CSSProperties['flexWrap'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  gap?: CSSProperties['gap'];
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
    flex-direction: ${direction || 'row'};
    flex-wrap: ${wrap || 'nowrap'};
    grid-gap: ${gap || '0px'};
    align-items: ${align};
    justify-content: ${justify};
  `}
`;
