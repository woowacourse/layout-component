import { CSSProperties, MutableRefObject, PropsWithChildren } from 'react';

interface FlexProps extends PropsWithChildren {
  ref?: MutableRefObject<HTMLDivElement | null>;
  css?: CSSProperties;
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  direction?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
}

export default function Flex({
  ref,
  css,
  direction = 'row',
  alignItems = 'start',
  flexWrap = 'nowrap',
  justifyContent = 'start',
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
        ...css,
      }}
    >
      {children}
    </div>
  );
}
