import { styled } from 'styled-components';
import Container, { Props as ContainerProps } from '../Container';

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around';
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type JustifyItems =
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right';

interface Props extends ContainerProps {
  $flexDirection?: FlexDirection;
  $flexWrap?: FlexWrap;
  $flexBasis?: string | number;
  $flexGrow?: number;
  $flexShrink?: number;
  $alignItems?: AlignItems;
  $alignContent?: AlignContent;
  $justifyContent?: JustifyContent;
  $justifyItems?: JustifyItems;
  flex?: string;
  $gap?: string;
}

const Flex = styled(Container)<Props>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  flex-basis: ${({ $flexBasis }) => $flexBasis};
  flex-grow: ${({ $flexGrow }) => $flexGrow};
  flex-shrink: ${({ $flexShrink }) => $flexShrink};
  align-items: ${({ $alignItems }) => $alignItems};
  align-content: ${({ $alignContent }) => $alignContent};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  justify-items: ${({ $justifyItems }) => $justifyItems};
  flex: ${({ flex }) => flex};
  gap: ${({ $gap }) => $gap};
`;

export default Flex;
