import { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'div'> {
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  bgColor?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
}

const Container = ({
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  bgColor,
  color,
  border,
  borderRadius,
  padding,
  margin = '0 auto',
  children,
  ...attributes
}: Props) => {
  const containerStyle = {
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    backgroundColor: bgColor,
    color,
    border,
    borderRadius,
    padding,
    margin,
  };

  return (
    <div style={containerStyle} {...attributes}>
      {children}
    </div>
  );
};

export default Container;
