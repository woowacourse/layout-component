import {
  CSSProperties,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';
import { CommonStyleProps } from '../style/common';

interface Common<T extends ElementType>
  extends CommonStyleProps,
    PropsWithChildren {
  /**
   * HTML 태그를 문자열로 입력해 원하는 HTML 태그로 사용할 수 있습니다.
   */
  as?: T;
  /**
   * 디테일 한 CSS 속성을 지정해야 할 경우 직접 CSS를 입력할 수 있습니다.
   */
  css?: CSSProperties;
}

export type PolymorphicRef<T extends ElementType> =
  ComponentPropsWithRef<T>['ref'];

export type PolymorphicComponentProps<
  T extends ElementType,
  Props
> = Common<T> &
  ComponentPropsWithoutRef<T> &
  Props & {
    ref?: PolymorphicRef<T>;
  };
