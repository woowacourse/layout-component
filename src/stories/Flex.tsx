import { Flex as FlexPat } from 'react-layout-component-pat'

type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined
type Justify = "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | undefined
type Align = "center" | "flex-start" | "flex-end" | "stretch" | "baseline" | undefined

interface FlexProps {
  direction: Direction
  justify: Justify
  align: Align
}

const Flex = ({direction, justify, align}:FlexProps) => {
  return (
    <FlexPat direction={direction} justify={justify} align={align} gap={5}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </FlexPat>
  )
}

export default Flex
