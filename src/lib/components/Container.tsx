import type { ElementType, ReactNode } from "react";

type Props<Tag extends ElementType> = React.ComponentPropsWithoutRef<Tag> & {
  minWidth?: number;
  maxWidth?: number;
  children?: ReactNode;
  tag?: Tag;
};

function Container({
  minWidth,
  maxWidth,
  tag: ElementType = "div",
  children,
  ...restProps
}: Props<ElementType>) {
  const containerStyle = {
    minWidth: minWidth ? `${minWidth}px` : "auto",
    maxWidth: maxWidth ? `${maxWidth}px` : "100%",
    margin: "0 auto",
  };

  return (
    <ElementType className="container" style={containerStyle} {...restProps}>
      {children}
    </ElementType>
  );
}

export default Container;
