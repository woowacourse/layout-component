import type { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react';

import styles from './Flex.module.css';

export interface FlexProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Flex의 너비값입니다.
   */
  width?: string | number;
  /**
   * Flex의 높이값입니다.
   */
  height?: string | number;
  /**
   * Flex의 배치방향을 정합니다.
   */
  direction?: CSSProperties['flexDirection'];
  /**
   * Flex의 중심축 정렬 방식입니다.
   */
  justifyContent?: CSSProperties['justifyContent'];
  /**
   * Flex의 교차축 정렬 방식입니다.
   */
  alignItems?: CSSProperties['alignItems'];
  /**
   * Flex Item들의 줄바꿈 설정입니다.
   */
  wrap?: CSSProperties['flexWrap'];
  /**
   * Flex Item들 간의 간격입니다.
   */
  gap?: number;
  /**
   * Flex의 자식컴포넌트 입니다.
   */
  children?: ReactNode;
}

const Flex = ({
  width,
  height,
  direction = 'row',
  wrap,
  justifyContent,
  alignItems,
  gap,
  children,
  ...props
}: FlexProps) => {
  const flexStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: justifyContent,
    alignItems: alignItems,
    gap: `${gap}px`,
  };

  return (
    <div className={styles.flex} style={flexStyle} {...props}>
      {children}
    </div>
  );
};

export default Flex;
