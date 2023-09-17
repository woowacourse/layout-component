import { CSSProperties, MutableRefObject, PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {
  ref?: MutableRefObject<HTMLDivElement> | null;
  css?: CSSProperties;
  minWidth?: number;
  maxWidth?: number;
}

export default function Container({
  ref,
  css,
  minWidth = 0,
  maxWidth = 0,
  children,
}: ContainerProps) {
  return (
    <div
      ref={ref}
      style={{
        width: '100vw',
        minWidth: minWidth ? `${minWidth}px` : '',
        maxWidth: maxWidth ? `${maxWidth}px` : '',
        ...css,
      }}
    >
      {children}
    </div>
  );
}
