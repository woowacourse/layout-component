import { styled } from 'styled-components'
import Container, { ContainerProps } from './Container'

interface FlexProps extends ContainerProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justify: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'

  flexBasis?: number
  flexGrow?: number
  flexShrink?: number
  gap?: number
}

const Flex = styled(Container)<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};

  flex-basis: ${({ flexBasis }) => (flexBasis ? flexBasis + 'px' : 'auto')};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  gap: ${({ gap }) => gap + 'px'};
`

export default Flex
