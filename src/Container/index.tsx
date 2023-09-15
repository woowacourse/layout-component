interface ContainerProps {
  minWidth?: number;
  maxWidth?: number;
  paddingX?: number;
  paddingY?: number;
  marginX?: number;
  marginY?: number;
}

export default function Container({
  minWidth = 0,
  maxWidth = 0,
  paddingX = 0,
  paddingY = 0,
  marginX = 0,
  marginY = 0,
}: ContainerProps) {
  return (
    <div
      style={{
        minWidth: minWidth ? `${minWidth}px` : '',
        maxWidth: maxWidth ? `${maxWidth}px` : '',
        padding: `${paddingY}px ${paddingX}px`,
        margin: `${marginY}px ${marginX}px`,
      }}
    ></div>
  );
}
