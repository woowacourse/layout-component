interface GridProps {
  children: React.ReactNode;
  rows: number;
  columns: number;
  gap?: number;
}

const Grid = ({ children, rows, columns, gap = 0 }: GridProps) => {
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  };

  return <div style={gridStyle}>{children}</div>;
};

export default Grid;
