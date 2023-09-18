import { CSSProperties, MutableRefObject, PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {
  /**
   * This prop is used when the container needs events
   */
  ref?: MutableRefObject<HTMLDivElement> | null;
  /**
   * This prop is used when you want to set CSS options
   */
  css?: CSSProperties;
  /**
   * This prop is used when you want to specify the minimum width
   * ${minWidth}px
   */
  minWidth?: number;
  /**
   * This prop is used when you want to specify the maximum width
   * ${manWidth}px
   */
  maxWidth?: number;
}

/**
 * This is the container layout
 */
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
