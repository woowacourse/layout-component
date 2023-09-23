import { CSSProperties, styled } from 'styled-components';
import Container, { Props as ContainerProps } from './Container';

interface Props extends Omit<ContainerProps, 'display'> {
  row: CSSProperties['gridRow'];
  column: CSSProperties['gridColumn'];
  $alignItems?: CSSProperties['alignItems'];
  $alignContent?: CSSProperties['alignContent'];
  $justifyContent?: CSSProperties['justifyContent'];
  $justifyItems?: CSSProperties['justifyItems'];
  $gridTemplateAreas?: CSSProperties['gridTemplateAreas'];
  $gridTemplateColumns?: CSSProperties['gridTemplateColumns'];
  $gridTemplateRows?: CSSProperties['gridTemplateRows'];
  gap?: CSSProperties['gap'];
}

const Grid = styled(Container)<Props>`
  display: grid;
  grid-row: ${({ row }) => row};
  grid-column: ${({ column }) => column};
  justify-items: ${({ $justifyItems }) => $justifyItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  align-content: ${({ $alignContent }) => $alignContent};
  grid-template-areas: ${({ $gridTemplateAreas }) => $gridTemplateAreas};
  grid-template-columns: ${({ $gridTemplateColumns }) => $gridTemplateColumns};
  grid-template-rows: ${({ $gridTemplateRows }) => $gridTemplateRows};
  gap: ${({ gap }) => gap};
`;

export default Grid;
