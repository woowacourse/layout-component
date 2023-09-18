import { CSSProperties } from 'react';

interface GridItemProps {
  xs: 1 | 2 | 3 | 4 | 6 | 8 | 12;
  children: React.ReactNode;
}

const defaultStyle: CSSProperties = {
  gridColumn: `auto / span 4`,
};

function GridItem({ xs, children }: GridItemProps) {
  return (
    <div
      style={{
        ...defaultStyle,
        gridColumn: `auto / span ${xs}`,
      }}
    >
      {children}
    </div>
  );
}

export default GridItem;
