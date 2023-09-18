import { Grid as GridPat } from 'react-layout-component-pat'

interface GridProps {
  rows: number
  columns: number
  gap: number
}

const Grid = ({ rows, columns, gap }: GridProps) => {
  return (
    <GridPat rows={rows} columns={columns} gap={gap}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
      <div>Item 6</div>
    </GridPat>
  )
}

export default Grid
