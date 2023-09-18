import { CSSProperties } from 'react';

interface FlexProps {
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  width?: CSSProperties['width'];
  gap?: CSSProperties['gap'];
  children: React.ReactNode;
}

const defaultStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
};

function Flex({ width, direction, justify, align, gap, children }: FlexProps) {
  return (
    <div
      style={{
        ...defaultStyle,
        width: width,
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap,
      }}
    >
      {children}
    </div>
  );
}

export default Flex;
