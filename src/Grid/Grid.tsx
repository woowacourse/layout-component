import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import { convertToPixel, generateDirectionStyle } from '../utils';
import { ElementBasicStyleType } from '../types/styles';
import { Combine, SCProps } from '../types/utility';

type GridStyleProps = {
  row?: number;
  column?: number;
  gap?: {
    row?: number;
    column?: number;
  };
};

type GridContainerProps = ElementBasicStyleType & GridStyleProps;

type GridProps = Combine<GridContainerProps, ComponentPropsWithoutRef<'div'>>;

const Grid = (props: GridProps) => {
  const {
    children,
    minWidth,
    maxWidth,
    margin,
    padding,
    row,
    column,
    gap,
    ...restProps
  } = props;

  return (
    <GridWrapper
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $row={row}
      $column={column}
      $gap={gap}
      $margin={margin}
      $padding={padding}
      {...restProps}
    >
      {children}
    </GridWrapper>
  );
};

export default Grid;

type GirdSCProps = SCProps<GridContainerProps>;

const GridWrapper = styled.div<GirdSCProps>`
  display: grid;

  min-width: ${({ $minWidth }) => convertToPixel($minWidth) ?? 0};
  max-width: ${({ $maxWidth }) => convertToPixel($maxWidth) ?? 'unset'};

  ${({ $padding }) => generateDirectionStyle('padding', $padding)}
  ${({ $margin }) => generateDirectionStyle('margin', $margin)};

  grid-template-rows: ${({ $row }) =>
    $row ? `repeat(${$row}, 1fr)` : 'initial'};
  grid-template-columns: ${({ $column }) =>
    $column ? `repeat(${$column}, 1fr)` : 'initial'};
  grid-row-gap: ${({ $gap }) =>
    ($gap && convertToPixel($gap.row)) ?? 'initial'};
  grid-column-gap: ${({ $gap }) =>
    ($gap && convertToPixel($gap.column)) ?? 'initial'};
`;
