interface FlexProps {
  justifyContent?:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'stretch' | 'center' | 'start' | 'end';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'wrap-reverse' | 'wrap' | 'nowrap';
}

export default function Flex({
  flexDirection = 'row',
  alignItems = 'start',
  flexWrap = 'nowrap',
  justifyContent = 'start',
}: FlexProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent,
        alignItems,
        flexWrap,
        flexDirection,
      }}
    ></div>
  );
}
