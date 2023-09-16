import type { ComponentPropsWithoutRef, ReactNode } from 'react';

interface GridItemProps extends ComponentPropsWithoutRef<'div'> {
  area?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  children?: ReactNode;
}

const GridItem = ({
  area,
  width,
  height,
  bgColor,
  children,
}: GridItemProps) => {
  const itemStyles = {
    gridArea: area,
    width: width,
    height: height,
    backgroundColor: bgColor,
  };

  return <div style={itemStyles}>{children}</div>;
};

export default GridItem;
