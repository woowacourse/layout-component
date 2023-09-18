import {
  CSSProperties,
  Children,
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
} from 'react';

import { styled, css } from 'styled-components';

import GridItem from './GridItem';

type GridProps = {
  columns?: number;
  rows?: number;
  gap?: CSSProperties['gap'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyItems'];
} & HTMLAttributes<HTMLElement>;

function Grid(props: PropsWithChildren<GridProps>) {
  const { children, ...layoutProps } = props;

  const gridItemChildren = Children.map(children, (child) => {
    const item = child as ReactElement;
    if (item.type !== GridItem) {
      console.error(
        'Grid.Item 컴포넌트를 사용하면 Grid을 더욱 쉽고 편리하게 활용할 수 있습니다.'
      );
    }
    return child;
  });

  return <Layout {...layoutProps}>{gridItemChildren}</Layout>;
}

Grid.Item = GridItem;

export default Grid;

const Layout = styled.div<GridProps>`
  display: grid;

  ${({ columns, rows, gap, align, justify }) => css`
    grid-template-columns: ${`repeat(${columns}, 1fr)` || 'repeat(12, 1fr)'};
    grid-template-rows: ${`repeat(${rows}, 1fr)` || '1fr'};
    grid-gap: ${gap || '0px'};
    align-items: ${align};
    justify-items: ${justify};
  `}
`;
