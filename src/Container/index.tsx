import { PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {
  minWidth?: number;
  maxWidth?: number;
  paddingX?: number;
  paddingY?: number;
  marginX?: number;
  marginY?: number;
}

export default function Container({
  minWidth = 0,
  maxWidth = 0,
  paddingX = 0,
  paddingY = 0,
  marginX = 0,
  marginY = 0,
  children,
}: ContainerProps) {
  return (
    <div
      style={{
        width: '100vw',
        minWidth: minWidth ? `${minWidth}px` : '',
        maxWidth: maxWidth ? `${maxWidth}px` : '',
        padding: `${paddingY}px ${paddingX}px`,
        margin: `${marginY}px ${marginX}px`,
      }}
    >
      {children}
    </div>
  );
}
