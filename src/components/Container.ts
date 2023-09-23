import { styled } from 'styled-components'

export interface ContainerProps {
  display?: 'none' | 'block' | 'inline' | 'inline-block'
  width?: number
  height?: number
  minWidth?: number
  minHeight?: number
  maxWidth?: number
  maxHeight?: number
  padding?: number
  paddingRight?: number
  paddingLeft?: number
  paddingTop?: number
  paddingBottom?: number
  margin?: number
  marginRight?: number
  marginLeft?: number
  marginTop?: number
  marginBottom?: number
  position?: string
  right?: number
  top?: number
  left?: number
  bottom?: number
  borderRadius?: number
  borderTop?: number
  borderRight?: number
  borderBottom?: number
  borderLeft?: number
  backgroundColor?: string
  backdropFilter?: string
  overflow?: string
  color?: string
  cursor?: string
  opacity?: number
  zIndex?: number
}

const Container = styled.div<ContainerProps>`
  display: ${({ display }) => display ?? 'block'};
  width: ${({ width }) => width + 'px'};
  height: ${({ height }) => height + 'px'};
  min-width: ${({ minWidth }) => minWidth + 'px'};
  min-height: ${({ minHeight }) => minHeight + 'px'};
  max-width: ${({ maxWidth }) => maxWidth + 'px'};
  max-height: ${({ maxHeight }) => maxHeight + 'px'};
  padding: ${({ padding }) => padding + 'px'};
  padding-right: ${({ paddingRight }) => paddingRight + 'px'};
  padding-left: ${({ paddingLeft }) => paddingLeft + 'px'};
  padding-top: ${({ paddingTop }) => paddingTop + 'px'};
  padding-bottom: ${({ paddingBottom }) => paddingBottom + 'px'};
  position: ${({ position }) => position};
  margin: ${({ margin }) => margin};
  margin-right: ${({ marginRight }) => marginRight};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  right: ${({ right }) => right + 'px'};
  top: ${({ top }) => top + 'px'};
  left: ${({ left }) => left + 'px'};
  bottom: ${({ bottom }) => bottom + 'px'};
  border-radius: ${({ borderRadius }) => borderRadius + 'px'};
  border-top: ${({ borderTop }) => borderTop + 'px'};
  border-right: ${({ borderRight }) => borderRight + 'px'};
  border-bottom: ${({ borderBottom }) => borderBottom + 'px'};
  border-left: ${({ borderLeft }) => borderLeft + 'px'};
  background-color: ${({ backgroundColor }) => backgroundColor};
  backdrop-filter: ${({ backdropFilter }) => backdropFilter};
  color: ${({ color }) => color && color};
  overflow: ${({ overflow }) => overflow};
  cursor: ${({ cursor }) => cursor};
  opacity: ${({ opacity }) => opacity + '%'};
  z-index: ${({ zIndex }) => zIndex};
`

export default Container
