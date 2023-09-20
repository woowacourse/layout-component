import styled from 'styled-components';
import Container, { Props as ContainerProps } from './Container';

type JustifyItems = 'start' | 'end' | 'center' | 'stretch';
type JustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';
type AlignItems = 'start' | 'end' | 'center' | 'stretch';
type AlignContent =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';
type JustifySelf = 'start' | 'end' | 'center' | 'stretch';
type AlignSelf = 'start' | 'end' | 'center' | 'stretch';

interface Props extends ContainerProps {
  row: number | string;
  column: number | string;
  $justifyItems?: JustifyItems;
  $justifyContent?: JustifyContent;
  $alignItems?: AlignItems;
  $alignContent?: AlignContent;
  $justifySelf?: JustifySelf;
  $alignSelf?: AlignSelf;
  $gridTemplateAreas?: string;
  $gridTemplateColumns?: string;
  $gridTemplateRows?: string;
  gap?: string;
}

const Grid = styled(Container)<Props>`
  display: grid;
  grid-row: ${({ row }) => row};
  grid-column: ${({ column }) => column};
  justify-items: ${({ $justifyItems }) => $justifyItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  align-content: ${({ $alignContent }) => $alignContent};
  justify-self: ${({ $justifySelf }) => $justifySelf};
  align-self: ${({ $alignSelf }) => $alignSelf};
  grid-template-areas: ${({ $gridTemplateAreas }) => $gridTemplateAreas};
  grid-template-columns: ${({ $gridTemplateColumns }) => $gridTemplateColumns};
  grid-template-rows: ${({ $gridTemplateRows }) => $gridTemplateRows};
  gap: ${({ gap }) => gap};
`;

export default Grid;
