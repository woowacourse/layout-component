import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export interface CommonProps extends ComponentPropsWithoutRef<ElementType> {
  /** 태그 변경 가능
   * @default div
   */
  tag?: ElementType;
  /** 안의 내용물 변경 가능 */
  children?: ReactNode;
}
