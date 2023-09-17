interface ContainerProps {
  children: React.ReactNode;
  minWidth: number;
  maxWidth: number;
}

const Container = ({ children, minWidth, maxWidth }: ContainerProps) => {
  const containerStyle: React.CSSProperties = {
    minWidth: `${minWidth}px`,
    maxWidth: `${maxWidth}px`,
    margin: "0 auto",
  };

  return <div style={containerStyle}>{children}</div>;
};

export default Container;
