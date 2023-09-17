import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react';

interface FlexProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Flex의 배치 방향을 설정합니다.
   */
  direction?: CSSProperties['flexDirection'];
  /**
   * Flex의 줄넘김 처리를 설정합니다.
   */
  wrap?: CSSProperties['flexWrap'];
  /**
   * Flex의 메인축 방향 정렬을 지정합니다.
   */
  justify?: CSSProperties['justifyContent'];
  /**
   * Flex의 수직축 방향 정렬을 지정합니다.
   */
  align?: CSSProperties['alignItems'];
  /**
   * Flex의 너비를 지정합니다.
   */
  width?: string;
  /**
   * Flex의 높이를 지정합니다.
   */
  height?: string;
  /**
   * Flex Item 사이의 간격을 지정합니다.
   */
  gap?: number;
  /**
   * Flex의 자식 컴포넌트입니다.
   */
  children: ReactNode[];
}

const Flex = ({
  direction,
  wrap,
  justify,
  align,
  width,
  height,
  gap,
  children,
  ...props
}: FlexProps) => {
  const flexStyles = {
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: justify,
    alignItems: align,
    width,
    height,
    gap: `${gap}px`,
  };

  return (
    <div style={flexStyles} {...props}>
      {children}
    </div>
  );
};

export default Flex;
