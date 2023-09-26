import { styled } from 'styled-components';
import { MasonryLayoutProps } from '../types/type';
import React from 'react';
import MasonryItem from './MasonryItem';

const MasonryLayout = ({
  column,
  width,
  columnGap,
  rowGap,
  itemWidth,
  borderRadius,
  children,
}: React.PropsWithChildren<MasonryLayoutProps>) => {
  const arrayByChildren = React.Children.toArray(children);

  return (
    <Style.LayoutContainer
      $column={column}
      $width={width}
      $columnGap={columnGap}
      $itemWidth={itemWidth}
    >
      {arrayByChildren?.map((child, index) => (
        <MasonryItem key={index} rowGap={rowGap} borderRadius={borderRadius}>
          {child}
        </MasonryItem>
      ))}
    </Style.LayoutContainer>
  );
};

export default MasonryLayout;

const Style = {
  LayoutContainer: styled.ul<{
    $width?: string | number;
    $itemWidth?: string | number;
    $columnGap?: string | number;
    $column: number | 'auto-fit';
  }>`
    display: grid;
    grid-template-columns: ${({ $column, $itemWidth }) =>
      `repeat(${$column}, ${$itemWidth ?? '1fr'})`};
    justify-content: center;
    column-gap: ${({ $columnGap }) => $columnGap ?? 0};

    width: ${({ $width }) => $width ?? 0};
    margin: 0;
    padding: 0;

    list-style: none;
  `,
};
