import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

type PropsWithTag<T extends ElementType, P> = P & {
  /** 태그(tag) 프로퍼티는 ReactHTML의 키(key) 중 하나를 가질 수 있습니다. */
  tag?: T;
};

type PropsToOmit<T extends ElementType, P = {}> = keyof (T & P);

type Props<T extends ElementType, P = {}> = PropsWithChildren<
  PropsWithTag<T, P>
> &
  Omit<ComponentPropsWithoutRef<T>, PropsToOmit<T, P>>;

type RenderProps<P extends object = object> = (payload: P) => JSX.Element;

export type { Props, RenderProps };
