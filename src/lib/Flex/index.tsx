import { CSSProperties, MutableRefObject, PropsWithChildren } from 'react';

interface FlexProps extends PropsWithChildren {
  /**
   * This prop is used when the container needs events
   */
  ref?: MutableRefObject<HTMLDivElement | null>;
  /**
   * This prop is used when you want to set CSS options
   */
  css?: CSSProperties;
  /**
   * This prop is used when you want to specify the justify-content
   * ${minWidth}px
   */
  justifyContent?: CSSProperties['justifyContent'];
  /**
   * This prop is used when you want to specify the align-items
   */
  alignItems?: CSSProperties['alignItems'];
  /**
   * This prop is used when you want to specify the flex-direction
   */
  direction?: CSSProperties['flexDirection'];
  /**
   * This prop is used when you want to specify the flex-wrap
   */
  flexWrap?: CSSProperties['flexWrap'];
  /**
   * This prop is used when you want to specify the gap
   */
  gap?: number;
}

export default function Flex({
  ref,
  css,
  direction = 'row',
  alignItems = 'start',
  flexWrap = 'nowrap',
  justifyContent = 'start',
  gap = 0,
  children,
}: FlexProps) {
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        justifyContent,
        alignItems,
        flexWrap,
        flexDirection: direction,
        gap: `${gap}px`,
        ...css,
      }}
    >
      {children}
    </div>
  );
}
