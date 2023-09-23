import { CSSProperties, styled } from 'styled-components';
import Container, { ContainerProps } from './Container';

interface GridProps extends Omit<ContainerProps, 'display'> {
  rows: CSSProperties['gridRow'];
  columns: CSSProperties['gridColumn'];
  $alignItems?: CSSProperties['alignItems'];
  $alignContent?: CSSProperties['alignContent'];
  $justifyContent?: CSSProperties['justifyContent'];
  $justifyItems?: CSSProperties['justifyItems'];
  $gridTemplateAreas?: CSSProperties['gridTemplateAreas'];
  gap?: CSSProperties['gap'];
}

const getGridTemplateRows = (rows: number | string) =>
  typeof rows === 'number' ? `repeat(${rows}, minmax(auto, 1fr))` : rows;
const getGridTemplateColumns = (columns: number | string) =>
  typeof columns === 'number'
    ? `repeat(${columns}, minmax(auto, 1fr))`
    : columns;
const getGap = (gap: number | string) =>
  typeof gap === 'number' ? `${gap}px` : gap;

const Grid = styled(Container)<GridProps>`
  display: grid;
  justify-items: ${({ $justifyItems }) => $justifyItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  align-content: ${({ $alignContent }) => $alignContent};
  grid-template-areas: ${({ $gridTemplateAreas }) => $gridTemplateAreas};
  grid-template-rows: ${({ rows }) => rows && getGridTemplateRows(rows)};
  grid-template-columns: ${({ columns }) =>
    columns && getGridTemplateColumns(columns)};
  gap: ${({ gap }) => gap && getGap(gap)};
`;

export default Grid;
