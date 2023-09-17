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
   * Container의 배경 색상입니다.
   */
  bgColor?: string;
  /**
   * Container의 자식 컴포넌트입니다.
   */
  children: ReactNode;
}

const Container = ({
  minWidth,
  maxWidth,
  bgColor,
  children,
  ...props
}: ContainerProps) => {
  const containerStyles = {
    minWidth: minWidth,
    maxWidth: maxWidth,
    backgroundColor: bgColor,
  };

  return (
    <div style={containerStyles} {...props}>
      {children}
    </div>
  );
};

export default Container;
