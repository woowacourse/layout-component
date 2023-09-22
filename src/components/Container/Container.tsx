import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { containerStyle } from './Container.style';

export interface ContainerProps extends ComponentPropsWithoutRef<ElementType> {
  /**
   * Container의 HTML 태그
   *
   * @default 'div'
   */
  as?: ElementType;
  /**
   * 최대 넓이 (number로 입력시 px로 고정, string으로 입력시 그대로 반영)
   *
   * @default '100%'
   */
  maxWidth?: number | string;
  /**
   * 최소 넓이 (number로 입력시 px로 고정, string으로 입력시 그대로 반영)
   *
   * @default '100px'
   */
  minWidth?: number | string;
}

const Container = ({
  maxWidth = '100%',
  minWidth = '100px',
  as = 'div',
  children,
  ...attributes
}: ContainerProps) => {
  const Tag = as;
  return (
    <Tag {...attributes} css={containerStyle({ minWidth, maxWidth })}>
      {children}
    </Tag>
  );
};

export default Container;
