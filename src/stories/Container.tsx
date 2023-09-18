import { Container as ContainerPat } from 'react-layout-component-pat'
import styled from 'styled-components'

interface ContainerProps {
  minWidth: number
  maxWidth: number
}

const Container = ({ minWidth, maxWidth }: ContainerProps) => {
  return (
    <ContainerPat minWidth={minWidth} maxWidth={maxWidth} backgroundColor="blue">
      <Box/>
    </ContainerPat>
  )
}

const Box = styled.div`
  width: 1400px;
  height: 500px;
  background-color: blue;
  opacity: 10%;
`

export default Container
