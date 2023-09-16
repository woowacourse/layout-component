interface Props extends React.HTMLAttributes<HTMLOrSVGElement> {
  minWidth?: number;
  maxWidth?: number;
  children?: React.ReactNode;
  tag?: React.ElementType;
}

function Container({
  minWidth,
  maxWidth,
  tag: Tag = "div",
  children,
  ...restProps
}: Props) {
  const containerStyle = {
    minWidth: minWidth ? `${minWidth}px` : "auto",
    maxWidth: maxWidth ? `${maxWidth}px` : "100%",
    margin: "0 auto",
  };

  return (
    <Tag className="container" style={containerStyle} {...restProps}>
      {children}
    </Tag>
  );
}

export default Container;
