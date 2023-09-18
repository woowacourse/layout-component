import { CSSProperties } from 'react';

interface GridLayoutProps {
  row?: CSSProperties['gridTemplateRows'];
  col?: CSSProperties['gridTemplateColumns'];
  gap?: CSSProperties['gap'];
  children: React.ReactNode;
}

const defaultStyle: CSSProperties = {
  display: 'grid',
  gap: '4px',
  gridTemplateColumns: `repeat(12, minmax(0, 1fr))`,
  placeItems: 'center',
};

function GridLayout({ gap, children }: GridLayoutProps) {
  return (
    <div
      style={{
        ...defaultStyle,
        gap,
      }}
    >
      {children}
    </div>
  );
}

export default GridLayout;
