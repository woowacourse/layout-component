import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Container의 최소 너비입니다.
   */
  minWidth?: string;
  /**
   * Container의 최대 너비입니다.
   * @default '100%'
   */
  maxWidth?: string;
  /**
   * Container의 margin값입니다.
   */
  margin?: string;
  /**
   * Container의 padding값입니다.
   */
  padding?: string;
  /**
   * Container의 배경 색상입니다.
   */
  bgColor?: string;
  /**
   * Container의 border-radius값입니다.
   */
  borderRadius?: string;
  /**
   * Container의 자식 컴포넌트들의 중앙 정렬 여부입니다.
   * @default false
   */
  centerContent?: boolean;
  /**
   * Container의 자식 컴포넌트입니다.
   */
  children: ReactNode;
}

const Container = ({
  minWidth,
  maxWidth = '100%',
  margin,
  padding,
  bgColor,
  borderRadius,
  centerContent = false,
  children,
  ...props
}: ContainerProps) => {
  const containerStyles = {
    minWidth: minWidth,
    maxWidth: maxWidth,
    margin: margin,
    padding: padding,
    backgroundColor: bgColor,
    borderRadius: borderRadius,
    ...(centerContent && {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
  };

  return (
    <div style={containerStyles} {...props}>
      {children}
    </div>
  );
};

export default Container;
