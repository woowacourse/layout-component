import { PropsWithChildren } from 'react';

interface FlexProps extends PropsWithChildren {
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
  children,
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
    >
      {children}
    </div>
  );
}
