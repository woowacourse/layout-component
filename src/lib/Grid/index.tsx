import { CSSProperties, MutableRefObject, PropsWithChildren } from 'react';

interface GridProps extends PropsWithChildren {
  /**
   * This prop is used when the container needs events
   */
  ref?: MutableRefObject<HTMLDivElement | null>;
  /**
   * This prop is used when you want to set CSS options
   */
  css?: CSSProperties;
  /**
   * This prop is used when you want to specify the rows,
   * repeat(${rows}, 1fr)
   */
  rows?: number;
  /**
   * This prop is used when you want to specify the columns,
   * repeat(${columns}, 1fr)
   */
  columns?: number;
  /**
   * This prop is used when you want to specify the columns,
   * ${gapX}px
   */
  gapX?: number;
  /**
   * This prop is used when you want to specify the columns,
   * ${gapY}px
   */
  gapY?: number;
}

export default function Grid({
  ref,
  css,
  rows = 1,
  columns = 1,
  gapX = 0,
  gapY = 0,
  children,
}: GridProps) {
  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: `${gapY}px ${gapX}px`,
        ...css,
      }}
    >
      {children}
    </div>
  );
}
