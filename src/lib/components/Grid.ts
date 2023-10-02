import styled from 'styled-components'
import Container, { ContainerProps } from './Container'

interface GridProps extends ContainerProps {
  justifyItems?: 'start' | 'end' | 'center' | 'stretch'
  alignContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
  justifySelf?: 'start' | 'end' | 'center' | 'stretch'
  alignSelf?: 'start' | 'end' | 'center' | 'stretch'

  gridTemplateAreas?: string
  rows?: number
  columns?: number
  gap?: number
}

const Grid = styled(Container)<GridProps>`
  display: grid;
  justify-items: ${({ justifyItems }) => justifyItems};
  align-content: ${({ alignContent }) => alignContent};
  justify-self: ${({ justifySelf }) => justifySelf};
  align-self: ${({ alignSelf }) => alignSelf};

  grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas};
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  gap: ${({ gap }) => gap + 'px'};
`

export default Grid
