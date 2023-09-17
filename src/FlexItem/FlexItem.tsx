import type { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react';

interface FlexItemProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Flex Item의 배치 순서를 지정합니다.
   */
  order?: number;
  /**
   * basis 값보다 커질 수 있도록 지정합니다.
   */
  grow?: CSSProperties['flexGrow'];
  /**
   * basis 값보다 작아질 수 있도록 지정합니다.
   */
  shrink?: CSSProperties['flexShrink'];
  /**
   * Flex Item의 기본 크기를 지정합니다.
   */
  basis?: CSSProperties['flexBasis'];
  /**
   * Flex Item의 수직축 방향 정렬을 지정합니다.
   */
  alignSelf?: CSSProperties['alignSelf'];
  /**
   * Flex Item의 자식 컴포넌트입니다.
   */
  children?: ReactNode;
}

const FlexItem = ({
  order,
  grow,
  shrink,
  basis,
  alignSelf,
  children,
  ...props
}: FlexItemProps) => {
  const flexItemStyles = {
    order,
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis,
    alignSelf,
  };

  return (
    <div style={flexItemStyles} {...props}>
      {children}
    </div>
  );
};

export default FlexItem;
