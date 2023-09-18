import { ComponentPropsWithoutRef, ElementType } from 'react';
import { centerStyle } from '../styles/center';

interface ContainerProps extends ComponentPropsWithoutRef<ElementType> {
  /**
   * Container 컴포넌트의 태그를 변경합니다.
   * @default div
   */
  as?: ElementType;
  /**
   * `max-width` 스타일 프로퍼티를 정의합니다.
   */
  maxWidth?: number;
  /**
   * `min-width` 스타일 프로퍼티를 정의합니다.
   */
  minWidth?: number;
}

function Container({ as = 'div', maxWidth, minWidth, children, ...attributes }: ContainerProps) {
  const Component = as;

  return <Component css={[centerStyle, { maxWidth, minWidth }, { ...attributes }]}>{children}</Component>;
}

export default Container;
